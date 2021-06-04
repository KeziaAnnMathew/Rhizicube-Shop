import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren :() => import('./modules/product-list/product-list.module').then(module => module.ProductListModule)},
  {path:'addproduct',loadChildren :() => import('./modules/add-product/add-product.module').then(module => module.AddProductModule)},
  {path:'cart', loadChildren :() => import('./modules/cart/cart.module').then(module => module.CartModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
