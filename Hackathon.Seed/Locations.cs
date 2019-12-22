using Hackathon.DAL;
using Hackathon.Domain;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.Text;

namespace Hackathon.Seed
{
    public static class Locations
    {
        public static void Collect(ExcelWorksheet rawData, UnitOfWork unit)
        {
            Console.Write("Locations: ");
            int N = 0;
            for (int row = 2; row <= rawData.Dimension.Rows; row++)
            {
                int oldId = rawData.ReadInteger(row, 1);
                Location location = new Location
                {
                    Name = rawData.ReadString(row, 2)
                };
                unit.Locations.Insert(location);
                unit.Save();
                N++;
                Utility.locationDictionary.Add(oldId, location.Id);
            }
            Console.WriteLine(N);
        }
    }
}
