using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RookieOnlineAssetManagement.Entities;
using RookieOnlineAssetManagement.Models;

namespace RookieOnlineAssetManagement.Data
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public ApplicationDbContext()
        {

        }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public virtual DbSet<Assignments> Assignments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Assignments>(entity =>
            {
                entity.ToTable("Assignment");

                entity.Property(e => e.Id).ValueGeneratedNever();
                entity.Property(e => e.AssetCode)
                    .HasMaxLength(50)
                    .IsUnicode(false);
                entity.Property(e => e.AssignedBy).HasMaxLength(450);
                entity.Property(e => e.AssignedTo).HasMaxLength(450);

                entity.HasOne(d => d.AssignedByNavigation).WithMany(p => p.AssignmentAssignedByNavigations)
                    .HasForeignKey(d => d.AssignedBy)
                    .HasConstraintName("FK_Assignment_User1");

                entity.HasOne(d => d.AssignedToNavigation).WithMany(p => p.AssignmentAssignedToNavigations)
                    .HasForeignKey(d => d.AssignedTo)
                    .HasConstraintName("FK_Assignment_User");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}
