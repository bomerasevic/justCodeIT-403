using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hackathon.API.Models;
using Hackathon.DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hackathon.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransportsController : BaseController
    {
        public TransportsController(HackathonContext context) : base(context) { }

        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(400)]
        public IActionResult Get()
        {
            return Ok(Unit.Transports.Get().ToList().Select(x => Factory.Create(x)).ToList());
        }
        [HttpGet("location/{firstLocation}/{secondLocation}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(400)]
        public IActionResult Get(int firstLocation, int secondLocation)
        {
            List<TransportModel> a = Unit.Transports.Get(x => x.FromLocation.Id == firstLocation && x.ToLocation.Id == secondLocation).ToList().Select(x => Factory.Create(x)).ToList();
            if (a == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(a);
            }
        }
    }
}