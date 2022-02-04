import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  // PATRIZIO
  checkoutForm = this.formBuilder.group({
    name: [null, Validators.required],
    address: [null, Validators.required],
    password: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]]
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
    ) { }

  onSubmit(): void {
    
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  
  ngOnInit(): void {
    
  }

}
