using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hackathon.DAL;
using Hackathon.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hackathon.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoommatesController : BaseController
    {
        public RoommatesController(HackathonContext context) : base(context) { }

        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(400)]
        public IActionResult Get()
        {
            return Ok(Unit.Roommates.Get().Select(x => Factory.Create(x)).ToList());
        }
        [HttpGet("{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(400)]
        public IActionResult Get(int id)
        {
            //Log.Info($"Try to get Day with {id} ");
            Roommate r = Unit.Roommates.Get(id);
            if (r == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(Factory.Create(r));
            }
        }
    }
}