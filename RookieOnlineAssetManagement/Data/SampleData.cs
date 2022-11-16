using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using System;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;
using RookieOnlineAssetManagement.Entities;

namespace RookieOnlineAssetManagement.Data
{
    public class SampleData
    {
        private readonly ApplicationDbContext _context;
        public SampleData(ApplicationDbContext context)
        {
            _context = context;
        }

        public void Initialize()
        {
            for (int i = 0; i < 10; i++)
            {

                var user = new User
                {
                    FirstName = "NguyenVan",
                    LastName = "A",
                    UserName = $"Anv{i}",
                    DateofBirth = DateTime.Now,
                    JoinedDay = DateTime.Now.AddDays(1),
                    Gender = 0,
                    Type = "Staff",
                    StaffCode = $"SD00{i}",
                    Location = "HCM",
                };

                var password = new PasswordHasher<User>();
                var hashed = password.HashPassword(user, $"{user.UserName}@{user.DateofBirth.ToString("ddMMyyyy")}");
                user.PasswordHash = hashed;

                var userStore = new UserStore<User>(_context);
                var result = userStore.CreateAsync(user);
                _context.SaveChangesAsync();
            }

        }
    }
}
