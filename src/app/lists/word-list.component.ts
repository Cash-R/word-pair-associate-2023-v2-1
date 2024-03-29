import { Component, Input } from '@angular/core';
import { WordComponent } from '../word.component';

@Component({
  template: `
    <div class="list-display">
      <p>{{data.prompt}} - {{data.answer}}</p> 
    </div>
  `
})
export class WordListComponent implements WordComponent {
  @Input() data: any;

}


