import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appApplycolor]'
})
export class ApplycolorDirective {
element:any=ElementRef;
  constructor(private elem:ElementRef) { 
   // console.log(elem);
   elem.nativeElement.style.color="white";
   elem.nativeElement.style.backgroundColor="orange";
   elem.nativeElement.innerText +="I am coming from Constructor  ";
   this.element=elem;

  }
  ngOnInit(){
   //this.element.nativeElement.innerText += "  I am Coming from OnInit"
  }
}
