using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;

namespace Infrastructure.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly StoreContext _context;
        private Hashtable _repository;

        public UnitOfWork(StoreContext context)
        {
            _context = context;
        }

        public async Task<int> Complete()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntities
        {
            if (_repository == null) _repository = new Hashtable();

            // Check type of the entity
            var type = typeof(TEntity).Name;

            // Check whether hash table contains entry with this name
            if (!_repository.ContainsKey(type))
            {
                var repositoryType = typeof(TEntity);
                // If we don't have a repository for this type, then create a instance of that repo
                var repositoryInstance = Activator.CreateInstance(repositoryType.MakeGenericType(typeof(TEntity)), _context);
                _repository.Add(type, repositoryInstance);
            }

            return (IGenericRepository<TEntity>) _repository[type];
        }
    }
}