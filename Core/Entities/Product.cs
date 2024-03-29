using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Product: BaseEntities
    {
        public string Description { get; set; }
        public Decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public ProductType productType { get; set; }
        public int productTypeId { get; set; }
        public Category productCategory { get; set; }
        public int productCategoryId { get; set; }
    }
}