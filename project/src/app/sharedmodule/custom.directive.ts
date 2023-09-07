import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(public el:ElementRef) {
  el.nativeElement.style.backgroundColor='grey'
  el.nativeElement.style.border='1px solid green'
  el.nativeElement.style.color='wheat'
   }

}
