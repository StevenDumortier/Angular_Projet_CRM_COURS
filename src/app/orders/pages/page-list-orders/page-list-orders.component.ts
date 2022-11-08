import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
titleParent : string="Liste des commandes"
// collection!:any;
collection$!: Observable<Order[]>
states = Object.values(StateOrder);
// en-têtes du tableau de type array
public headers = ['Action', 'Type', 'Client', 'NbJours', 'Tjm HT', 'Total HT', 'Total TTC', 'State' ]
  constructor(
    private ordersService : OrdersService,
    private router:Router

  ) {
  // ordersService.refreshCollection(); pas besoin car dans getcollection
   this.collection$= this.ordersService.collection



    //remplacer par pipe async
    // this.ordersService
    // .collection
    // .subscribe((data)=>{
    //  this.collection = data;
    // });

   }

  ngOnInit(): void {
  }

  changeState(item: Order, event:Event){
    //console.log(event)
    const target = event.target as HTMLSelectElement;
    const state= target.value as StateOrder; //dans changeState pour forcer a mettre en state on peut aussi utiliser <orderState>
    this.ordersService.changeState(item,state).subscribe(res=>{
      //console.log(res,"put state");
      Object.assign(item,res);

    })
    //console.log(state,target)
  }

  //remplacé par pipe en shared car se repette dans le html donc pas bon
  // total(val: number, coef:number, tva?: number): number{
  //   //console.log("page-list-order cacul tva")
  //   if(tva){
  //     return val * coef * (1+tva/100)
  //   }
  //   return val * coef
  // }

  goToEdit(item:Order){
    this.router.navigate(["orders","edit",item.id])
  }
  goToDelete(item:Order){
    this.ordersService.delete(item).subscribe();
  }
}
