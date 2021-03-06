﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hackathon.API.Models
{
    public class ApartmentModel
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int NumberOfRooms { get; set; }
        public int Flat { get; set; }
        public bool ArmoredDoor { get; set; }
        public string HeatingType { get; set; }
        public decimal Area { get; set; }
        public bool Power { get; set; }
        public bool Gas { get; set; }
        public bool NewlyBuilt { get; set; }
        public DateTime DateOfRenewal { get; set; }
        public DateTime DateOfPublication { get; set; }
        public MasterModel Location { get; set; }
    }
}
