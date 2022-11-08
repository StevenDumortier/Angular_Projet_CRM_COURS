import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VersionService {


  //créer un observable
  //créer une méthode increment()
  //this.data.next(this.data.value + 1)
  //header et footer besoin de service

  subj= new BehaviorSubject(0);


  constructor() {

  }
  increment(){

    this.subj.next(this.subj.value + 1)
  }
}
