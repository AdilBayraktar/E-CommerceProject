using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityContextAssest
    {
        public static async Task AssestUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Adil BAYRAKTAR",
                    Email = "adil@adil.com",
                    UserName = "AdilBayraktar",
                    Address = new Address
                    {
                        FirstName = "Adil",
                        LastName = "BAYRAKTAR",
                        Street = "Bosna Hersek Mah",
                        City = "Konya",
                        Country = "Turkey",
                        MobileNumber = "0535353535"
                    }
                };

                await userManager.CreateAsync(user, "Admin123456");

            }
        }
    }
}