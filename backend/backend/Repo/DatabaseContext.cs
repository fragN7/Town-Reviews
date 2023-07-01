using backend.Model;
using Microsoft.EntityFrameworkCore;

namespace backend.Repo;

public class DatabaseContext : DbContext
{
    public DatabaseContext() { }
    public DatabaseContext(DbContextOptions opt) : base(opt) { }

    public virtual DbSet<Review> Reviews { get; set; } = null!;
    public virtual DbSet<Item> Items { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Review>()
            .HasOne<Item>(r => r.Item)
            .WithMany(i => i.Reviews)
            .HasForeignKey(r => r.ItemId);

        modelBuilder.Entity<Item>()
            .HasKey(p => p.Id);
    }
}