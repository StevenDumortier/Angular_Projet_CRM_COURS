import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {


  constructor(private orderService:OrdersService,
    private root:Router) { }

  init = new Order();
  ngOnInit(): void {
  }

  onAdd(item: Order){
    this.orderService.add(item).subscribe(()=>{
      this.root.navigate(['orders'])
    }
    )


    //console.log(item,"depuis parent")
  }

}
