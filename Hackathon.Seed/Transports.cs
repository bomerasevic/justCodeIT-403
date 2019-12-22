using Hackathon.DAL;
using Hackathon.Domain;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.Text;

namespace Hackathon.Seed
{
    public static class Transports
    {
        public static void Collect(ExcelWorksheet rawData, UnitOfWork unit)
        {
            Console.Write("Transports: ");
            int N = 0;
            for (int row = 2; row <= rawData.Dimension.Rows; row++)
            {
                int oldId = rawData.ReadInteger(row, 1);
                Transport transport = new Transport
                {
                    FromLocation = unit.Locations.Get(Utility.locationDictionary[rawData.ReadInteger(row, 2)]),
                    ToLocation = unit.Locations.Get(Utility.locationDictionary[rawData.ReadInteger(row, 3)]),
                    TimeOfDeparture = rawData.ReadString(row, 4),
                    TimeOfArrival = rawData.ReadString(row, 5),
                    Line = rawData.ReadString(row, 6),
                    Distance = rawData.ReadString(row, 7),
                    Price = rawData.ReadDecimal(row, 8),
                    Duration = rawData.ReadDecimal(row, 9),
                    Company = rawData.ReadString(row, 10)
                };
                unit.Transports.Insert(transport);
                unit.Save();
                N++;
                Utility.apartmentDictionary.Add(oldId, transport.Id);
            }
            Console.WriteLine(N);
        }
    }
}
