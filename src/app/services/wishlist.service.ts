import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {wishlistUrl} from '../config/api';
import {map} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private htpp: HttpClient) { }

  getwishlist(){
    return this.htpp.get(wishlistUrl).pipe(
      map((result: any[]) =>{
        // tslint:disable-next-line:prefer-const one-variable-per-declaration
        let productsIds = [];
        result.forEach(item => productsIds.push(item.id));
        return productsIds;
      })
    );
  }

  addToWishlist(productId){
    return this.htpp.post(wishlistUrl,{id: productId});
  }

  removeFromWishlist(productId){
    return this.htpp.delete(wishlistUrl +'/'+ productId);
  }
}
