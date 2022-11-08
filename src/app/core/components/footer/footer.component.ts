import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  number!:number;
  constructor(private versionService :VersionService) {
    this.versionService.subj.subscribe(data => this.number = data);

  }


  ngOnInit(): void {
  }

}
