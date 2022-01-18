using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        IProductRepository _repository;
        public ProductsController(IProductRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts(){
            var products = await  _repository.GetProductsAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id){
            return await _repository.GetProductByIdAsync(id);
        }

        [HttpGet("categories")]
        public async Task<ActionResult<IReadOnlyList<Category>>> GetProductCategories(){
            return Ok (await _repository.GetProductCategoriesAsync());
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes(){
            return Ok (await _repository.GetProductTypesAsync());
        }
    }
}