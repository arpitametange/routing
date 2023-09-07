import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchterm:any): any {
    return value.filter((nameserch:any)=>{
      return nameserch.toLowerCase().indexOf(searchterm.toLowerCase())>-1
    })
  }

}
