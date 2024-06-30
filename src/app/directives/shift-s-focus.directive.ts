import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShiftSFocus]',
  standalone: true
})
export class ShiftSFocusDirective {

  constructor(public el: ElementRef) { 
  }
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'S' && event.shiftKey) {
      event.preventDefault();
      this.el.nativeElement.focus();
    }
  }
}
