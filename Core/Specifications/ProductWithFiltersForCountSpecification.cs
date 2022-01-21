using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductWithFiltersForCountSpecification : BaseSpecification<Product>
    {
        public ProductWithFiltersForCountSpecification(ProductParams productParams) : base(x => (string.IsNullOrEmpty(productParams.Search) || x.Name.ToLower().Contains(productParams.Search)) && (!productParams.CaegoryId.HasValue || x.productCategoryId == productParams.CaegoryId) && (!productParams.TypeId.HasValue || x.productTypeId == productParams.TypeId))
        {
        }
    }
}