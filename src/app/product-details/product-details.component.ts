import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
    
  ngOnInit(): void {
    // First get the product id from the current route.
    // To access the route parameters, we use route.snapshot, 
    // which is the ActivatedRouteSnapshot that contains information about the active route at that particular moment in time. 
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    if(isNaN(productIdFromRoute)) {
      console.log('productId FromRoute IS NOT a number');
    } else
    {
      console.log('productId FromRoute: ' + productIdFromRoute);
    }
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
