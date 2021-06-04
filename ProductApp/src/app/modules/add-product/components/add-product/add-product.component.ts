import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addForm : FormGroup | any;

  constructor(private service:ProductService,private router:Router,private formBuilder:FormBuilder) { }

  productItem = new ProductModel('','','',0,'','',0,0,0)
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      'productname' : [this.productItem.productname,[Validators.required]],
      'productprice' : [this.productItem.productprice,[Validators.required,Validators.min(1)]],
      'SKU' : [this.productItem.SKU,[Validators.required]],
      'productcategory' : [this.productItem.productcategory,[Validators.required]],
      'productimage' : [this.productItem.productimage,[Validators.required]],
      'productdescription' : [this.productItem.productdescription,[Validators.required]],
      'productrating' : [this.productItem.productrating,[Validators.required,Validators.max(5)]],
      'producttotalbought' : [this.productItem.producttotalbought,[Validators.required]],
      'productreviews' : [this.productItem.productreviews,[Validators.required]],
    })
  }
  
  addProduct(){
    this.service.addProduct(this.productItem)
    alert("Succesfully added");
    this.router.navigate([''])
  }
}
