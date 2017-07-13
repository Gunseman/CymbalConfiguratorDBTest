import { Component } from '@angular/core';

//import { ProductComponent } from './products/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = '';
  constructor(){
    this.title = 'Cymbal Configurator App';
  }
}
