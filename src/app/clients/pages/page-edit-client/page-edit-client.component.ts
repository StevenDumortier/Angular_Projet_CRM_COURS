import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientsServiceService } from '../../service/clients-service.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {

  item$!: Observable<Client>;

  constructor(private clientsService:ClientsServiceService,
    private root:Router,
    private activatedRoute:ActivatedRoute) {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.item$ = this.clientsService.getItemById(id)



     }
    order = new Client();
  ngOnInit(): void {
  }
  onEdit(item: Client){

    this.clientsService.update(item).subscribe()
    this.root.navigate(['clients'])


  }

}
