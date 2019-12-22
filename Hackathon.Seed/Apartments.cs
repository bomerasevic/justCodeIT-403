using Hackathon.DAL;
using Hackathon.Domain;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.Text;

namespace Hackathon.Seed
{
    public static class Apartments
    {
        public static void Collect(ExcelWorksheet rawData, UnitOfWork unit)
        {
            Console.Write("Apartments: ");
            int N = 0;
            for (int row = 2; row <= rawData.Dimension.Rows; row++)
            {
                int oldId = rawData.ReadInteger(row, 1);
                Apartment apartment = new Apartment
                {
                    Address = rawData.ReadString(row, 2),
                    Description = rawData.ReadString(row, 3),
                    Price = rawData.ReadDecimal(row, 4),
                    NumberOfRooms = rawData.ReadInteger(row, 5),
                    Flat = rawData.ReadInteger(row, 6),
                    ArmoredDoor = rawData.ReadBool(row, 7),
                    HeatingType = rawData.ReadString(row, 8),
                    Area = rawData.ReadDecimal(row, 9),
                    Power = rawData.ReadBool(row, 10),
                    Gas = rawData.ReadBool(row, 11),
                    NewlyBuilt = rawData.ReadBool(row, 12),
                    //DateOfRenewal = rawData.ReadString(row, 13),
                    //DateOfPublication = rawData.ReadString(row, 14),
                    Location = unit.Locations.Get(Utility.locationDictionary[rawData.ReadInteger(row+5, 2)])
                };
                unit.Apartments.Insert(apartment);
                unit.Save();
                N++;
                Utility.apartmentDictionary.Add(oldId, apartment.Id);
            }
            Console.WriteLine(N);
        }
    }
}
