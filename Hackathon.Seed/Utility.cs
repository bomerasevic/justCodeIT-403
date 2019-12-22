using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.Text;

namespace Hackathon.Seed
{
    public static class Utility
    {
        public static Dictionary<int, int> locationDictionary = new Dictionary<int, int>();
        public static Dictionary<int, int> transportDictionary = new Dictionary<int, int>();
        public static Dictionary<int, int> roommateDictionary = new Dictionary<int, int>();
        public static Dictionary<int, int> apartmentDictionary = new Dictionary<int, int>();
        

        public static string ReadString(this ExcelWorksheet sht, int row, int col)
        {
            try
            {
                return sht.Cells[row, col].Value.ToString().Trim();
            }
            catch
            {
                return "";
            }
        }

        public static int ReadInteger(this ExcelWorksheet sht, int row, int col) => int.Parse(sht.ReadString(row, col));

        public static DateTime ReadDate(this ExcelWorksheet sht, int row, int col)
        {
            try
            {
                var data = sht.Cells[row, col].Value;
                if (data == null) return DateTime.MinValue;
                return DateTime.FromOADate(double.Parse(data.ToString()));
                //return DateTime.Parse(sht.ReadString(row, col));
            }
            catch
            {
                return new DateTime(1, 1, 1);
            }
        }

        public static bool ReadBool(this ExcelWorksheet sht, int row, int col) => sht.ReadString(row, col) == "-1";

        public static decimal ReadDecimal(this ExcelWorksheet sht, int row, int col) => decimal.Parse(sht.ReadString(row, col));
    }
}
