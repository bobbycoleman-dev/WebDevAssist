#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
namespace Server.Models
{
    public class WebDevContext : DbContext
    {
        public WebDevContext(DbContextOptions<WebDevContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<PurchaseOrder> PurchaseOrders { get; set; }
    }
}

