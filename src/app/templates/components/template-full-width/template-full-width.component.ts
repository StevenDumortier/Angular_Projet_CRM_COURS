import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit {

  @Input() titleEnfant!: string;
  constructor() {
   // console.log(this.titleEnfant,"titleEnfant");
  }

  ngOnInit(): void {
    //console.log(this.titleEnfant,"titleEnfant depuis ngOnInit");
  }

}
