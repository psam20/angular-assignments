import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

   private _productsUrl = 'http://localhost:3000/products';
   
    
   private httpOptions = {
       "headers" : new HttpHeaders(
         {
           "Content-Type" : 'application/json'
         }
       )
   };
   constructor(private _http : HttpClient) { }
     getProducts(){
       return this._http.get(this._productsUrl);
     }
     addProducts(pro){
      
       return this._http.post(this._productsUrl,pro,this.httpOptions);
     }
         
 
}
