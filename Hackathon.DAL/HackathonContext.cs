using Hackathon.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Hackathon.DAL
{
    public class HackathonContext : DbContext
    {
        private string _conStr;
        public HackathonContext() : base() { _conStr = "User ID=postgres; Password=admin; Server=localhost; Port=5432; Database=hackathon; Integrated Security=true; Pooling=true;"; }
        public HackathonContext(DbContextOptions<HackathonContext> options) : base(options) { }
        public HackathonContext(string conStr) { _conStr = conStr; }
        public DbSet<Apartment> Apartments { get; set; }
        public DbSet<Transport> Transports { get; set; }
        public DbSet<Roommate> Roommates { get; set; }
        public DbSet<User> Users { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            if (_conStr != null)
            {
                optionBuilder.UseNpgsql(_conStr);
            }
            optionBuilder.UseLazyLoadingProxies(true);
            base.OnConfiguring(optionBuilder);
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Apartment>().HasQueryFilter(x => !x.Deleted);
            builder.Entity<Transport>().HasQueryFilter(x => !x.Deleted);
            builder.Entity<Roommate>().HasQueryFilter(x => !x.Deleted);
            builder.Entity<User>().HasQueryFilter(x => !x.Deleted);
        }
        public override int SaveChanges()
        {
            foreach (var entry in ChangeTracker.Entries().Where(x => x.State == EntityState.Deleted && x.Entity is BaseClass))
            {
                entry.State = EntityState.Modified;
                entry.CurrentValues["Deleted"] = true;
            }
            return base.SaveChanges();
        }
    }
}
