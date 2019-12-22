using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Hackathon.DAL;
using Hackathon.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hackathon.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : BaseController
    {
        public UsersController(HackathonContext context) : base(context) { }

        [HttpGet]
        public IActionResult Get()
        {
            var currentUser = HttpContext.User as ClaimsPrincipal;
            List<string> claims = new List<string>();
            foreach (Claim claim in currentUser.Claims) claims.Add(claim.Value);
            var users = Unit.Users.Get().ToList();
            return Ok(new { claims, users });
        }
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] User user)
        {
            User control = Unit.Users.Get(x => x.Username == user.Username && x.Password == user.Password).FirstOrDefault();
            if (control == null) return NotFound();
            byte[] bytes = Encoding.ASCII.GetBytes($"{control.Username}:{control.Password}");
            string base64 = Convert.ToBase64String(bytes);
            return Ok(new
            {
                control.Id,
                control.FullName,
                base64
            });
            //return Ok($"{control.Username}:{control.Password}");
        }
    }
}