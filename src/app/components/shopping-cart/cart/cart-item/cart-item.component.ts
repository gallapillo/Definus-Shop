import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../../../models/product';
import {Observable} from 'rxjs';
import {cartUrl} from '../../../../config/api';
import {CartService} from '../../../../services/cart.service';
import {MessengerService} from '../../../../services/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any

  constructor(private cartService: CartService,private msg: MessengerService) { }

  handleDeleteToCart(){
    this.cartService.deleteProductToCart(this.cartItem).subscribe(()=>{
      this.msg.sendMsg(this.cartItem);
    });
  }

  ngOnInit() {
  }

}
