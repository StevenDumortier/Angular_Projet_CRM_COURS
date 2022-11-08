import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {

  item$!: Observable<Order>;

  constructor(private orderService:OrdersService,
    private root:Router,
    private activatedRoute:ActivatedRoute) {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.item$ = this.orderService.getItemById(id)



     }
    order = new Order();
  ngOnInit(): void {
  }
  onEdit(item: Order){

    this.orderService.update(item).subscribe()
    this.root.navigate(['orders'])





    // this.orderService.add(item).subscribe(()=>{
    //   this.root.navigate(['orders'])
    // }
    // )


    //console.log(item,"depuis parent")
  }

}
