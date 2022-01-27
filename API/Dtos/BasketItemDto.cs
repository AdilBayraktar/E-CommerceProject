using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class BasketItemDto
    {
        [Required]
        public int Id { get; set; }
        public string ProductName { get; set; }
        [Range(10, double.MaxValue, ErrorMessage="Price must be greater than 10")]
        public decimal Price { get; set; }
        [Range(1, double.MaxValue, ErrorMessage="Quantity must be atleast 1")]
        public int Quantity { get; set; }
        public string PictureUrl { get; set; }
        public string Category { get; set; }
        public string Type { get; set; }
    }
}