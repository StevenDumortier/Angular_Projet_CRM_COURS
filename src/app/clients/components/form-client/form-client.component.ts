import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  @Input() init!:Client;
  @Output() submitted = new EventEmitter<Client>();
  clientForm!:FormGroup;
  public states = Object.values(StateClient)
  constructor(private fb: FormBuilder) { }


   ngOnInit() {
      this.clientForm = this.fb.group({
      tva: [this.init.tva, Validators.required],
      name: [this.init.name,Validators.required],
      totalCaHt: [this.init.totalCaHt,Validators.required],
      state: [this.init.state,Validators.required],
      comment: [this.init.comment,Validators.required],
      id:[this.init.id]
    });
  }
  onSubmit(){
    this.submitted.emit(this.clientForm.value) //emit c'est comme un .next
    //console.log("validé")
    //console.log(this.orderForm.value)
  }
}
