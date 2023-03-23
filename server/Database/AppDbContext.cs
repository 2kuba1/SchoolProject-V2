using HighSchoolAPI.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace HighSchoolAPI.Database;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> config) : base(config) { }
    
    public DbSet<User> Users { get; set; }
    public DbSet<Role> Roles { get; set; }
    public DbSet<Announcement> Announcements { get; set; }
    public DbSet<Application> Applications { get; set; }
    public DbSet<Image> Images { get; set; }
    public DbSet<Thumbnail> Thumbnails { get; set; }
    public DbSet<Comment> Comments { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Role>()
            .HasData(new Role()
            {
                Id = 1,
                Name = "User"
            }, new Role()
            {
                Id = 2,
                Name = "Admin"
            });
    }
}