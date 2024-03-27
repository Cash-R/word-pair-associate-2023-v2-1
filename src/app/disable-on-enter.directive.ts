import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[disable-on-enter]'
})
export class DisableOnEnterDirective {
  @HostBinding('attr.disabled') isDisabled: boolean | undefined;
  @HostListener('keyup.enter') disableInput() {
   this.isDisabled = true ;
  //DisableOnEnterDirective.constructor() { }

}
}
