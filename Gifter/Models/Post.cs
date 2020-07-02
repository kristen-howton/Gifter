using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Gifter.Models
{
    public class Post
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Hmmm...Looks like your forgot to add a title...")]
        [StringLength(255, MinimumLength = 1)]
        public string Title { get; set; }

        [Required]
        public string ImageUrl { get; set; }
        public string Caption { get; set; }

        [Required]
        [DisplayFormat(DataFormatString = "{0:MMM dd, yyyy}")]
        public DateTime DateCreated { get; set; }

        [Required]
        public int UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }
        public List<Comment> Comment { get; set; }
    }
}