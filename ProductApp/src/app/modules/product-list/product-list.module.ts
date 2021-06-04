import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryfilterPipe } from './components/product-list/categoryfilter.pipe'


@NgModule({
  declarations: [ProductListComponent, CategoryfilterPipe],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductListModule { }
