using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Hackathon.Domain
{
    public class Roommate : BaseClass
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [NotMapped]
        /// Employee's full name - not mapped - calculated
        public string FullName { get { return FirstName + " " + LastName; } }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Faculty { get; set; }
        public string Address { get; set; }
    }
}
