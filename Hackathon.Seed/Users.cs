using Hackathon.DAL;
using Hackathon.Domain;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.Text;

namespace Hackathon.Seed
{
    public static class Users
    {
        public static void Collect(ExcelWorksheet rawData, UnitOfWork unit)
        {
            Console.Write("Users: ");
            int N = 0;
            for (int row = 2; row <= rawData.Dimension.Rows; row++)
            {
                int oldId = rawData.ReadInteger(row, 1);
                User user = new User
                {
                    FirstName = rawData.ReadString(row, 2),
                    LastName = rawData.ReadString(row, 3),
                    Username = rawData.ReadString(row, 4),
                    Email = rawData.ReadString(row, 5),
                    Password = rawData.ReadString(row, 6)
                };
                unit.Users.Insert(user);
                unit.Save();
                N++;
                Utility.apartmentDictionary.Add(oldId, user.Id);
            }
            Console.WriteLine(N);
        }
    }
}
