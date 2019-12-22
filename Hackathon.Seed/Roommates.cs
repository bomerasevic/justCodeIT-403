using Hackathon.DAL;
using Hackathon.Domain;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.Text;

namespace Hackathon.Seed
{
    public static class Roommates
    {
        public static void Collect(ExcelWorksheet rawData, UnitOfWork unit)
        {
            Console.Write("Roommates: ");
            int N = 0;
            for (int row = 2; row <= rawData.Dimension.Rows; row++)
            {
                int oldId = rawData.ReadInteger(row, 1);
                Roommate roommate = new Roommate
                {
                    FirstName = rawData.ReadString(row, 2),
                    LastName = rawData.ReadString(row, 3),
                    Phone = rawData.ReadString(row, 4),
                    Email = rawData.ReadString(row, 5),
                    Faculty = rawData.ReadString(row, 6),
                    Address = rawData.ReadString(row, 7)
                };
                unit.Roommates.Insert(roommate);
                unit.Save();
                N++;
                Utility.roommateDictionary.Add(oldId, roommate.Id);
            }
            Console.WriteLine(N);
        }
    }
}
