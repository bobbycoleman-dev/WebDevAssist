#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace Server.Models
{
    public class PurchaseOrder
    {

        [Key]
        public long PurchaseOrderId { get; set; }


    }
}