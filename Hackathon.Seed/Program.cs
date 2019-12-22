using Hackathon.DAL;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Hackathon.Seed
{
    class Program
    {
        static void Main()
        {
            FileInfo file = new FileInfo(@"C:\Hackathon_DATA\Database.xlsx");
            string conStr = "User ID=postgres; Password=admin; Server=localhost; Port=5432; Database=hackathon; Integrated Security=true; Pooling=true;";
            using (ExcelPackage package = new ExcelPackage(file))
            {
                using (UnitOfWork unit = new UnitOfWork(new HackathonContext(conStr)))
                {

                    unit.Context.Database.EnsureDeleted();
                    unit.Context.Database.EnsureCreated();
                    unit.Context.ChangeTracker.AutoDetectChangesEnabled = false;

                    Apartments.Collect(package.Workbook.Worksheets["Apartments"], unit);
                    Transports.Collect(package.Workbook.Worksheets["Transports"], unit);
                    Users.Collect(package.Workbook.Worksheets["Users"], unit);
                    Roommates.Collect(package.Workbook.Worksheets["Roommates"], unit);
                    Locations.Collect(package.Workbook.Worksheets["Locations"], unit);

                }
            }
            Console.WriteLine("All tasks done.");
            Console.ReadKey();
        }
    }
}
