import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   company : string =" Amazon";
  product : any = [{
     name : String,
     id : Number,
     quantity : Number
  }];
  constructor(private _productService : ProductService) {}

  @Output()  ob = new EventEmitter<any>();

  ngOnInit(){
    this.getProducts(); 
  }
  getProducts(){
    return this._productService.getProducts().subscribe(
      (products : any) => this.product =products 
    );
  }
  
 
  addProducts(v1,v2){
      const pro = {
        name: v1,
        quantity :v2
      };
    return this._productService.addProducts(pro).subscribe(
      (data : any) => {this.product.push(pro);
      this.ob.emit({
        name: v1,
        quantity :v2,
        display : "block"
      })
      }
    )
  }

}
