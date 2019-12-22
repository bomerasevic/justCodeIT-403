using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Hackathon.DAL
{
    public class Repository<Entity> : IRepository<Entity> where Entity : class
    {
        protected HackathonContext _context;
        protected DbSet<Entity> _dbSet;

        public Repository(HackathonContext context)
        {
            _context = context;
            _dbSet = _context.Set<Entity>();
        }
        public virtual IQueryable<Entity> Get() => _dbSet;
        public virtual IList<Entity> Get(Func<Entity, bool> where) => Get().Where(where).ToList();
        public virtual Entity Get(int id)
        {

            Entity entity = _dbSet.Find(id);
            //if (entity == null)
            //    throw new ArgumentException($"There is no object with id: {id} in database");

            return entity;
        }
        public virtual void Insert(Entity entity) => _dbSet.Add(entity);
    }
}
