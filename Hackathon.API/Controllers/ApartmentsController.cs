using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hackathon.API.Models;
using Hackathon.DAL;
using Hackathon.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hackathon.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentsController : BaseController
    {
        public ApartmentsController(HackathonContext context) : base(context) { }

        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(400)]
        public IActionResult Get()
        {
            return Ok(Unit.Apartments.Get().ToList().Select(x => Factory.Create(x)).ToList());
        }
        [HttpGet("{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(400)]
        public IActionResult Get(int id)
        {
            Apartment a = Unit.Apartments.Get(id);
            if (a == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(Factory.Create(a));
            }
        }
        [HttpGet("location/{id}/{price}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(400)]
        public IActionResult Get(int id, int price)
        {
            List<ApartmentModel> a = Unit.Apartments.Get(x => x.Location.Id == id && x.Price <= price).ToList().Select(x => Factory.Create(x)).ToList();
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