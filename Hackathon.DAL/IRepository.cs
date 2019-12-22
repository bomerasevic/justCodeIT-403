using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Hackathon.DAL
{
    public interface IRepository<Entity>
    {
        IQueryable<Entity> Get();
        IList<Entity> Get(Func<Entity, bool> where);
        Entity Get(int id);
        void Insert(Entity entity);
    }
}
