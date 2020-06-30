using Gifter.Models;
using Microsoft.EntityFrameworkCore;

namespace Gifter.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        //These are specific to our project. We pass in the model classes
        public DbSet<UserProfile> UserProfile { get; set; }
        public DbSet<Post> Post { get; set; }
    }
}