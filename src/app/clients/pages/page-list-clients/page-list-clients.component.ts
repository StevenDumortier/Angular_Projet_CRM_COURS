import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsServiceService } from '../../service/clients-service.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  titleParent: string = 'Liste des clients';
  collection$!: Observable<Client[]>;
  states = Object.values(StateClient);

  public headers = ['Action', 'name', 'tva', 'totalCaHt', 'comment', 'state'];
  constructor(private clientsService: ClientsServiceService,
    private router:Router) {
    this.collection$ = this.clientsService.collection;
  }

  ngOnInit(): void {}

  changeState(item: Client, event: Event) {
    //console.log(event)
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateClient;
    this.clientsService.changeState(item, state).subscribe((res) => {
      //console.log(res, 'put state');
      Object.assign(item, res);
    });
  }
  goToEdit(item:Client){
    this.router.navigate(["clients","edit",item.id])
  }
  goToDelete(item:Client){
    this.clientsService.delete(item).subscribe();
  }
}
