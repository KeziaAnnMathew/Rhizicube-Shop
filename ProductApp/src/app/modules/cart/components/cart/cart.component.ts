import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor( private service:ProductService) { }
  cartItems : any;
  subTotal : number=0;
  empty = true;
  i : any;
  ngOnInit(): void {
    this.cartItems = this.service.cart;
    this.checkempty();
    this.getSumPrice(this.cartItems);
  }
  checkempty(){
    if((this.cartItems.length == 0)){
      this.empty = true;
    }
    else{
      this.empty = false;
    }
  }
  getSumPrice(list:any){
    for(this.i=0;this.i<list.length;this.i++){
      this.subTotal += list[this.i].productprice
    }
  }
  removeItem(item:any){
    var index = this.cartItems.indexOf(item);
    var cost = this.cartItems[index].productprice;
    this.cartItems.splice(index,1);
    this.subTotal -= cost;
    this.checkempty()
  } 
}
