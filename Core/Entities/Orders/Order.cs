using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities.Orders
{
    public class Order : BaseEntities
    {
        public Order()
        {
        }

        public Order(IReadOnlyList<OrderItem> orderItems, string buyerEmail, Address shipToAddress, DeliveryMethod deliveryMethod, decimal subtotal)
        {
            OrderItems = orderItems;
            BuyerEmail = buyerEmail;
            ShipToAddress = shipToAddress;
            DeliveryMethod = deliveryMethod;
            Subtotal = subtotal;
        }

        public string BuyerEmail { get; set; }
        // It will store the local time where the order was made
        public DateTimeOffset OrderDate { get; set; } =  DateTimeOffset.Now;
        public Address ShipToAddress { get; set; }
        public DeliveryMethod DeliveryMethod { get; set; }
        public IReadOnlyList<OrderItem> OrderItems { get; set; }
        public decimal Subtotal { get; set; }
        public OrderStatus Status { get; set; } = OrderStatus.Pending;
        public string PaymentIntentId { get; set; }

        // Automapper run this as well. It returns Get{{PropertyName}}
        // Since, Total is property, hence it ran this code and populated the field.
        // If naming would be something else, it won't work.
        public decimal GetTotal()
        {
            return Subtotal + DeliveryMethod.Price;
        } 
    }
}