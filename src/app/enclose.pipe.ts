import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enclose'
})
export class EnclosePipe implements PipeTransform {

  transform(value:any, type?:string):any {
    if(type!==undefined && type.toLowerCase()==='curly'){
      return '{'+value+'}';
    } else if(type!=undefined && type.toLowerCase()==='square'){
      return '['+value+']'
    } else {
      return '('+value+')'
    }
  }

}
