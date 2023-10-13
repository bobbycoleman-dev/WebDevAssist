#pragma warning disable CS8618
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Server.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        [DisplayName("First Name")]
        [MinLength(2)]
        [MaxLength(45)]
        public string FirstName { get; set; }

        [Required]
        [DisplayName("Last Name")]
        [MinLength(2)]
        [MaxLength(45)]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        [UniqueEmail]
        [MaxLength(45)]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [RegularExpression("^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$", ErrorMessage = "Password must be at least 8 characters long and contain 1 letter, 1 number, and 1 special character")]
        public string Password { get; set; }

        public string? CompanyName { get; set; }

        public string? GitHubUsername { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        public List<Project> ProjectsList { get; set; }

        [NotMapped]
        [Required]
        [DataType(DataType.Password)]
        [Compare("Password")]
        [DisplayName("Confirm Password")]
        public string ConfirmPassword { get; set; }

    }

    public class UniqueEmailAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value == null)
            {
                return new ValidationResult("Email is required!");
            }

            WebDevContext _context = (WebDevContext)validationContext.GetService(typeof(WebDevContext));
            if (_context.Users.Any(e => e.Email == value.ToString()))
            {
                return new ValidationResult("Email in use. Please use a different email or log in");
            }
            else
            {
                return ValidationResult.Success;
            }
        }
    }
}

