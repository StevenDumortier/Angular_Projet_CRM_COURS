import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {
  private urlAPI=environment.urlApi;
  private collection$: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>(
    []
  );

  constructor(
    private Http: HttpClient
  ) {
    //convention dollars en fin pour dire qu'il y a un observable
   this.refreshCollection();
  }

  refreshCollection() {
    this.Http.get<Client[]>(`${this.urlAPI}/clients`)
      .pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Client(obj);
          });
        })
      )
      .subscribe((data) => {
        // ici on va passer data à l'observable chaud this.collection$
        this.collection$.next(data);
      });
  }

  //on va appeler cette fonction this.orderService.collection
  get collection(){
    this.refreshCollection();
    return this.collection$;
  }


  changeState(item: Client, state: StateClient):Observable<Client>{
    //créer un nouvel objet
    const obj = new Client(item)
    //modifier l'état avec la nouvelle valeur
    obj.state=state;
    // déclencher update()
    return this.update(obj);
  }

  update(obj:Client):Observable<Client>{
    return this.Http
    .put<Client>(`${this.urlAPI}/clients/${obj.id}`,obj)

  }
   add(obj:Client):Observable<Client>{
    return this.Http.post<Client>(`${this.urlAPI}/clients`,obj)
  }
  getItemById(id: number): Observable<Client> {
    return this.Http.get<Client>(`${this.urlAPI}/clients/${id}`);
  }

  delete(item: Client): Observable<Client> {
    return this.Http.delete<Client>(`${this.urlAPI}/clients/${item.id}`).pipe(
      tap(()=>{
        this.refreshCollection();
      })
    );
  }
}
