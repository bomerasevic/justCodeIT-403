using Hackathon.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Hackathon.DAL
{
    public class UnitOfWork : IDisposable
    {
        protected HackathonContext _context;
        public UnitOfWork(HackathonContext context)
        {
            _context = context;
        }
        private IRepository<Apartment> _apartments;
        private IRepository<Transport> _transports;
        private IRepository<Roommate> _roommates;
        private IRepository<User> _users;
        private IRepository<Location> _locations;

        public HackathonContext Context { get { return _context; } }
        public IRepository<Apartment> Apartments => _apartments ?? (_apartments = new Repository<Apartment>(_context));
        public IRepository<Transport> Transports => _transports ?? (_transports = new Repository<Transport>(_context));
        public IRepository<Roommate> Roommates => _roommates ?? (_roommates = new Repository<Roommate>(_context));
        public IRepository<User> Users => _users ?? (_users = new Repository<User>(_context));
        public IRepository<Location> Locations => _locations ?? (_locations = new Repository<Location>(_context));
        public int Save() => _context.SaveChanges();

        public void Dispose() => _context.Dispose();
    }
}
