using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Adil",
                    Email = "adil@selcuk.com",
                    UserName = "adil@selcuk.com",
                    Address = new Address
                    {
                        FirstName = "Adil",
                        LastName = "Bayraktar",
                        Street = "Bosna Hersek",
                        City = "Konya",
                        Country = "Turkey",

                    }
                };
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}