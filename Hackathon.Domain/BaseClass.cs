using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Hackathon.Domain
{
    public class BaseClass
    {
        public BaseClass()
        {
            Created = DateTime.Now;
            Creator = 0;
            Deleted = false;
        }
        [Key]
        public int Id { get; set; }
        public DateTime Created { get; set; }
        public int Creator { get; set; }
        public bool Deleted { get; set; }
    }
}
