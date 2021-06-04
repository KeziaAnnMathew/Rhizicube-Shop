import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  readonly baseurl='http://localhost:3000';
  // readonly baseurl = '/api';
 
  constructor(private http:HttpClient) { }
  
  private searchKeySubject=new Subject<string>();

  setSearchKeySubject(searchValue:string){
    this.searchKeySubject.next(searchValue)
  }
  getSearchKeySubjectAsObs(){
    return this.searchKeySubject.asObservable(); 
  }
  
  cart:any=[];

  addProduct(item:any){
    return this.http.post<any>(this.baseurl+`/addproduct`,{"item":item})
    .subscribe(()=>{})
  }
  getallProducts(){
    return this.http.get<any>(this.baseurl+`/getproducts`)
  }
}
