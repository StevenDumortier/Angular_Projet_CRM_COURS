import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

 // @Input() collection!:Order[];
  @Input() headers!:any;

  constructor() { }

  ngOnInit(): void {
   // console.log(this.collection, "tableau");
  }
  //hook qui se déclenche a chaque nouvelle modification du composant
  ngOnChanges(){
    //console.log(this.collection, "tableau");
    //console.log(this.headers, "tableau");
  }

}
