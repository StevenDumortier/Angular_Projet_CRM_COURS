import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsServiceService } from '../../service/clients-service.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  constructor(private clientService:ClientsServiceService,
    private root:Router) { }

  init = new Client();
  ngOnInit(): void {
  }

  onAdd(item: Client){
    this.clientService.add(item).subscribe(()=>{
    this.root.navigate(['clients'])
    }
    )


    //console.log(item,"depuis parent")
  }

}
