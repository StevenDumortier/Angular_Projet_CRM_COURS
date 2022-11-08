import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  number!:number;

  constructor( private versionService :VersionService)
  {
    this.versionService.subj.subscribe(data => this.number = data);
   }

  ngOnInit(): void {
  }



}
