using Hackathon.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hackathon.API.Models
{
    public class ModelFactory
    {
        public RoommateModel Create(Roommate r)
        {
            return new RoommateModel
            {
                Id = r.Id,
                FirstName = r.FirstName,
                LastName = r.LastName,
                FullName = r.FullName,
                Phone = r.Phone,
                Email = r.Email,
                Faculty = r.Faculty
            };
        }
        public ApartmentModel Create(Apartment a)
        {
            return new ApartmentModel
            {
                Id = a.Id,
                Address = a.Address,
                Description = a.Description,
                Price = a.Price,
                NumberOfRooms = a.NumberOfRooms,
                Flat = a.Flat,
                ArmoredDoor = a.ArmoredDoor,
                HeatingType = a.HeatingType,
                Area = a.Area,
                Power = a.Power,
                Gas = a.Gas,
                NewlyBuilt = a.NewlyBuilt,
                DateOfRenewal = a.DateOfRenewal,
                DateOfPublication = a.DateOfPublication,
                Location = new MasterModel { Id = a.Location.Id, Name = a.Location.Name}
            };
        }
    }
}
