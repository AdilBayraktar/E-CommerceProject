using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class StoreContextAssest
    {
        public static async Task AssestAsync(StoreContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                if (!context.categories.Any())
                {
                    var categoriesData = File.ReadAllText("../Infrastructure/Data/AssestData/categories.json");

                    var categories = JsonSerializer.Deserialize<List<Category>>(categoriesData);

                    foreach (var item in categories)
                    {
                        context.categories.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
                if (!context.productTypes.Any())
                {
                    var typesData = File.ReadAllText("../Infrastructure/Data/AssestData/types.json");

                    var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);

                    foreach (var item in types)
                    {
                        context.productTypes.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
                if (!context.Products.Any())
                {
                    var productsData = File.ReadAllText("../Infrastructure/Data/AssestData/products.json");

                    var products = JsonSerializer.Deserialize<List<Product>>(productsData);

                    foreach (var item in products)
                    {
                        context.Products.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
            }
            catch(Exception ex){
                var logger = loggerFactory.CreateLogger<StoreContextAssest>();
                logger.LogError(ex.Message);
            }
        }
    }
}