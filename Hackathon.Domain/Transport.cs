using System;
using System.Collections.Generic;
using System.Text;

namespace Hackathon.Domain
{
    public class Transport : BaseClass
    {
        public List<string> FromLocation { get; set; }
        public List<string> ToLocation { get; set; }
        public string Time_of_Departure { get; set; }
        public string Time_of_Arrival { get; set; }
        public string Line { get; set; }
        public string Distance { get; set; }
        public decimal Price { get; set; }
        public decimal Duration { get; set; }
        public string Company { get; set; }
    }
}
