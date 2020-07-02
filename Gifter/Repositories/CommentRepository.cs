using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Gifter.Data;
using Gifter.Models;

namespace Gifter.Repositories
{
    public class CommentRepository
    {
        //saving an instance of our app db context
        private readonly ApplicationDbContext _context;
        public CommentRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Comment> GetAll()
        {
            return _context.Comment
                            .Include(c => c.Post)
                            .ToList();
        }
        public Comment GetById(int id)
        {
            return _context.Comment
                            .Include(c => c.Post)
                            .FirstOrDefault(c => c.Id == id);
        }
        public void Add(Comment comment)
        {
            _context.Add(comment);
            _context.SaveChanges();
        }

        public void Update(Comment comment)
        {
            _context.Entry(comment).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var comment = GetById(id);
            _context.Comment.Remove(comment);
            _context.SaveChanges();
        }
    
        public List<Comment> GetByUserPostId(int id)
        {
            return _context.Comment.Include(c => c.Post)
                            .Where(c => c.Id == id)
                            .OrderBy(c => c.Message)
                            .ToList();
        }
    }
}