// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.Extensions.DependencyInjection;
// using Microsoft.IdentityModel.Tokens;
// using Core.Entities.Identity;
// using Infrastructure.Identity;
// using Microsoft.AspNetCore.Authentication.JwtBearer;


// namespace API.Extentions

// {
//     public static class IdentityServiceExtention
//     {
//       public static IServiceCollection AddIdentityServices(this IServiceCollection services)
//         {
//             var builder = services.AddIdentityCore<AppUser>();

//             builder = new IdentityBuilder(builder.UserType, builder.Services);
//             builder.AddEntityFrameworkStores<AppIdentityDbContext>();
//             builder.AddSignInManager<SignInManager<AppUser>>();

//             services.AddAuthentication();
//         }  
//     }
// }