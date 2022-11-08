import { Pipe, PipeTransform } from '@angular/core';

//décorateur
@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, tva?:boolean):number {
    //console.log("pipe")
    if(tva){
      return value.totalTTC();
    }
    return value.totalHT();
  }

}
