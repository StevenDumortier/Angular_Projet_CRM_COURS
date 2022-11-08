import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/core/models/order';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateOrder } from 'src/app/core/enums/state-order';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // urlAPI
  private urlAPI = environment.urlApi;
  //private collection$!: Observable<Order[]>;
  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>(
    []
  );
  constructor(private Http: HttpClient) {
    //convention dollars en fin pour dire qu'il y a un observable
    this.refreshCollection();
  }

  refreshCollection() {
    this.Http.get<Order[]>(`${this.urlAPI}/orders`)
      .pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Order(obj);
          });
        })
      )
      .subscribe((data) => {
        // ici on va passer data à l'observable chaud this.collection$
        this.collection$.next(data);
      });
  }

  //on va appeler cette fonction this.orderService.collection
  get collection() {
    this.refreshCollection();
    return this.collection$;
  }

  // set collection(col: Observable<Order[]>) {
  //   this.collection = col;
  // }

  // sumUp(a:number,b:number){
  //   return a+b;
  // }

  // get(){
  //   return this.Http.get("http://localhost:3000/orders")

  // }
  // onDisplayList(){
  //   return this.Http.get<Order[]>('http://localhost:4002/orders');

  // }

  // changeState
  changeState(item: Order, state: StateOrder): Observable<Order> {
    //créer un nouvel objet
    const obj = new Order(item);
    //modifier l'état avec la nouvelle valeur
    obj.state = state;
    // déclencher update()
    return this.update(obj);
  }

  update(obj: Order): Observable<Order> {
    return this.Http.put<Order>(`${this.urlAPI}/orders/${obj.id}`, obj)
  }

  add(item: Order): Observable<Order> {
    return this.Http.post<Order>(`${this.urlAPI}/orders`, item);
  }
  getItemById(id: number): Observable<Order> {
    return this.Http.get<Order>(`${this.urlAPI}/orders/${id}`);
  }

  delete(item: Order): Observable<Order> {
    return this.Http.delete<Order>(`${this.urlAPI}/orders/${item.id}`).pipe(
      tap(()=>{
        this.refreshCollection();
      })
    );
  }
}
