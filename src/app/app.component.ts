import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string ="Demonstration of Obtaining Data From the Server through the service";
  className = "red";
  d="none";
  productName : string = '';
  quantity : Number = 0;
  addItem(event){
      this.productName=event.name;
      this.quantity=event.quantity;
      this.d=event.display;

  }
}
