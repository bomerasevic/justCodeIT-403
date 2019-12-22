using System;
using System.Collections.Generic;
using System.Text;

namespace Hackathon.Domain
{
    public class Transport : BaseClass
    {
        public virtual Location FromLocation { get; set; }
        public virtual Location ToLocation { get; set; }
        public string TimeOfDeparture { get; set; }
        public string TimeOfArrival { get; set; }
        public string Line { get; set; }
        public string Distance { get; set; }
        public decimal Price { get; set; }
        public decimal Duration { get; set; }
        public string Company { get; set; }
    }
}
