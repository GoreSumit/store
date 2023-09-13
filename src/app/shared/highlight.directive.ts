import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight:string |null = null;
  @Input() defaultColor='blue';

  constructor(private el:ElementRef) {
   }

  
   @HostListener('mouseenter')
   onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = this.appHighlight || this.defaultColor;

   }

   @HostListener('mouseleave')
   onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = null ;

   }

}
