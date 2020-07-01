using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Gifter.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        [StringLength(255, MinimumLength = 5)]
        public string Email { get; set; }

        public string ImageUrl { get; set; }

        public string Bio { get; set; }

        [Required]
        [DisplayFormat(DataFormatString = "{0:MMM dd, yyyy}")]
        public DateTime DateCreated { get; set; }

    }
}