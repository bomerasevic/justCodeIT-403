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
    public class BaseController : ControllerBase
    {
        protected UnitOfWork Unit;
        private ModelFactory _factory;
        
        public BaseController(HackathonContext context)
        {
            Unit = new UnitOfWork(context);
        }
        public ModelFactory Factory => _factory ?? (_factory = new ModelFactory());
    }
}