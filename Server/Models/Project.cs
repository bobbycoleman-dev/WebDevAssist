#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace Server.Models
{
    public class Project
    {

        [Key]
        public long ProjectId { get; set; }

        public int UserId { get; set; }
        public User? Designer { get; set; }

        public int ClientId { get; set; }
        public Client? Client { get; set; }

        public List<PurchaseOrder> PurchaseOrders { get; set; }

    }
}
