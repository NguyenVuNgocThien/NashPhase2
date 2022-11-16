using Microsoft.AspNetCore.Identity;
using RookieOnlineAssetManagement.Models;
using System;
using System.Collections.Generic;

namespace RookieOnlineAssetManagement.Entities
{
    public class User : IdentityUser
    {
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public DateTime JoinedDay { get; set; }
        public DateTime DateofBirth { get; set; }
        public int Gender { get; set; }
        public string Type { get; set; } = null!;
        public string Location { get; set; } = null!;
        public bool Status { get; set; }
        public string StaffCode { get; set; }
        public virtual ICollection<Assignments> AssignmentAssignedByNavigations { get; } = new List<Assignments>();
        public virtual ICollection<Assignments> AssignmentAssignedToNavigations { get; } = new List<Assignments>();
    }
}
