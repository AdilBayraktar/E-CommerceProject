using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductSpecification : BaseSpecification<Product>
    {
        public ProductSpecification(ProductParams productParams) : base(x => (string.IsNullOrEmpty(productParams.Search) || x.Name.ToLower().Contains(productParams.Search)) && (!productParams.CaegoryId.HasValue || x.productCategoryId == productParams.CaegoryId) && (!productParams.TypeId.HasValue || x.productTypeId == productParams.TypeId))
        {
            AddInclude(p => p.productCategory);
            AddInclude(p => p.productType);
            AddOrderBy(p => p.Name);
            ApplyPaging(productParams.PageSize * (productParams.PageIndex - 1), productParams.PageSize);
            if (!string.IsNullOrEmpty(productParams.Sort))
            {
                switch (productParams.Sort)
                {
                    case "priceAsc":
                        AddOrderBy(p => p.Price);
                        break;
                    case "priceDesc":
                        AddOrderByDescending(p => p.Price);
                        break;
                    default:
                        AddOrderBy(p => p.Name);
                        break;
                }
            }
        }

        public ProductSpecification(int id) : base(p => p.Id == id)
        {
            AddInclude(p => p.productCategory);
            AddInclude(p => p.productType);
        }
    }
}