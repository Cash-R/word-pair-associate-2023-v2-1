import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[wordHost]',
})
export class WordDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

