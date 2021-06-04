import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component'



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatIconModule
  ]
})
export class CartModule { }
