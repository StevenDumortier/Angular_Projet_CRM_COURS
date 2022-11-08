import { Directive, HostBinding, Input } from '@angular/core';
//décorateur
@Directive({
  selector: '[appState]'
})
export class StateDirective {

@Input() etat!:string;

//accéder à l'attribut boulu dans l'élément html
@HostBinding("class") tdClassName!:string;

  constructor() {
    console.log("depuis directive state")
  }

  ngOnInit(){
    //console.log(this.etat,"etat")
  }
  ngOnChanges(){
    //let stateLowercase = this.etat.toLowerCase();
    //console.log(stateUppercase)
    this.tdClassName= `state-${this.etat.toLowerCase()}`
  }

}
