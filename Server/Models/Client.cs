#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace Server.Models
{
    public class Client
    {

        [Key]
        public long ClientId { get; set; }

        [Required]
        public string CompanyName { get; set; }

        [Required]
        public string Address { get; set; }

    }
}