import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides = [
    {image: 'https://img.freepik.com/free-vector/e-commerce-icon-robotic-hand-internet-shopping-online-purchase-add-cart_127544-586.jpg?size=626&ext=jpg', text: 'ECommerce Site'},
    {image: 'https://thumbs.dreamstime.com/b/e-commerce-add-to-cart-online-shopping-business-technology-internet-concept-126587882.jpg',text: 'ECommerce Site'},
    {image: 'https://techworkss.com/wp-content/uploads/2020/06/E-commerce.jpg',text: 'ECommerce Site'}
 ];
 noWrapSlides = false;
 showIndicator = true;

  constructor() { }

  ngOnInit(): void {
  }

}
