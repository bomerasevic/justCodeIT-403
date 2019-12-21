using System;
using System.Collections.Generic;
using System.Text;

namespace Hackathon.Domain
{
    public class User : BaseClass
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get { return FirstName + " " + LastName; } }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
