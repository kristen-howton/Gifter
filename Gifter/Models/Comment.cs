using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Gifter.Models
{
    public class Comment
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Hmmm...Looks like your forgot to add your message...")]
        [StringLength(255, MinimumLength = 2)]
        public string Message { get; set; }
        [Required]
        public int UserProfileId { get; set; }

        public UserProfile UserProfile { get; set; }
        [Required]
        public int PostId { get; set; }

        public Post Post { get; set; }

    }
}
