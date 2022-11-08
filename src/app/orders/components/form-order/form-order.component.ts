import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {

  @Input() init!:Order;
  @Output() submitted = new EventEmitter<Order>();
  orderForm!:FormGroup;
  public states = Object.values(StateOrder)
  constructor(private fb: FormBuilder) { }


   ngOnInit() {
    this.orderForm = this.fb.group({
      typePresta: [this.init.typePresta, Validators.required],
      client: [this.init.client,Validators.required],
      nbJours: [this.init.nbJours,Validators.required],
      tjmHt: [this.init.tjmHt,Validators.required],
      tva: [this.init.tva,Validators.required],
      state: [this.init.state,Validators.required],
      comment: [this.init.comment,Validators.required],
      id:[this.init.id]
    });
  }
  onSubmit(){
    this.submitted.emit(this.orderForm.value) //emit c'est comme un .next
    //console.log("validé")
    //console.log(this.orderForm.value)
  }
}
