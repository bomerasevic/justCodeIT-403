using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hackathon.API.Models
{
    public class TransportModel
    {
        public int Id { get; set; }
        public virtual MasterModel FromLocation { get; set; }
        public virtual MasterModel ToLocation { get; set; }
        public string TimeOfDeparture { get; set; }
        public string TimeOfArrival { get; set; }
        public string Line { get; set; }
        public string Distance { get; set; }
        public decimal Price { get; set; }
        public decimal Duration { get; set; }
        public string Company { get; set; }
    }
}
