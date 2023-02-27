import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search=new BehaviorSubject("")

  constructor(private httpClient:HttpClient) { }

  viewAllproduct(){                                              //API calling of view all product
  const baseurl='http://localhost:3000/products'
    return this.httpClient.get(baseurl)
  }
  viewproduct(productid:any){
  const baseurl='http://localhost:3000/products/'+productid //(to view a single product)                   //activated Route method
  return this.httpClient.get(baseurl)                                       //get is used to get that data

  }
  deleteproduct(productid:any){
    const baseurl='http://localhost:3000/products/'+productid
    return this.httpClient.delete(baseurl)
  
    }
    addproduct(productdata:any){
      const baseurl='http://localhost:3000/products/'
      return this.httpClient.post(baseurl,productdata)
    }  

    editproduct(productid:any,productdata:any){
      const baseurl='http://localhost:3000/products/'+productid
      return this.httpClient.put(baseurl,productdata)
}
}
