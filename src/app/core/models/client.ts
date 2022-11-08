import { StateClient } from "../enums/state-client";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
  state=StateClient.INACTIVE;
  tva=20;
  id!:number;
  name!:string;
  totalCaHt!:number;
  comment!:string;

  constructor(obj?: Partial<Client>){
    //vérifier la précense de obj
    if(obj){
      Object.assign(this,obj)
    }
  }
}
