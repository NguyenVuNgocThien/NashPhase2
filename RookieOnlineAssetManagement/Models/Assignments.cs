using RookieOnlineAssetManagement.Entities;
using System;

namespace RookieOnlineAssetManagement.Models
{
    public class Assignments
    {
        public int Id { get; set; }
        public string? AssetCode { get; set; }
        public string AssignedBy { get; set; }
        public string AssignedTo { get; set; }
        public DateTime AssignedDay { get; set; }
        public int State { get; set; }
        public bool Status { get; set; }

        public virtual User AssignedByNavigation { get; set; }

        public virtual User AssignedToNavigation { get; set; }
    }
}

