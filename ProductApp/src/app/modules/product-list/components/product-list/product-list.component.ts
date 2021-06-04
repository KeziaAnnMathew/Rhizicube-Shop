import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductModel } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList : ProductModel[] | any;
  productListDummy : ProductModel[] =[];
  i : any;
  filterName = ''
  categorylist : any = [
    {
      category : "All Products",
      image : "https://images-na.ssl-images-amazon.com/images/I/817J0EC40wL._AC_SX425_.jpg"
    },
    {
      category : "Mobiles",
      image : "https://images.jdmagicbox.com/comp/hyderabad/u7/040pxx40.xx40.180613075101.s6u7/catalogue/happi-mobiles-chanda-nagar-hyderabad-mobile-phone-dealers-g7sf1rw6nt.jpg?clr=#4d1a26"
    },
    {
      category : "Electronics",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs17ItyFHrEsO_Qaz2YGigVE8JEDVHUM-_9w&usqp=CAU"
    },
    {
      category : "Appliances",
      image : "https://st.depositphotos.com/2332949/4798/i/950/depositphotos_47988459-stock-photo-electronics-gadgets-tv-fridge-microwave.jpg"
    },
  ]

  // private searchKeySubscription = new Subscription
  constructor(private service:ProductService) { }

  ngOnInit(): void {

    this.service.getallProducts()
      .subscribe((data)=>{
        this.productList = JSON.parse(JSON.stringify(data))
        this.productListDummy = this.productList;
      }
    )
    // this.searchKeySubscription = this.service.getSearchKeySubjectAsObs().subscribe((val:any)=>{
    //   this.filterName = val;
    // })  
  }

  addtoCart(item:any){
    alert("Succesfully added to cart");
    this.service.cart.push(item);
  }

  onSearchCategory(item:any){
    // this.service.setSearchKeySubject(item.category)
    this.filterName = item.category;
  }

  ngOnDestroy(){
    // this.searchKeySubscription.unsubscribe();
  }
}
