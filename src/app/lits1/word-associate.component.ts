import { Component, Input, OnDestroy, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { WordService } from '../word.service'; 
import { WordDirective } from '../word.directive';
import { AddWord } from '../add-word';
import { WordComponent } from '../word.component';
import { AppModule } from '../app.module'; // yoannes


@Component({
  selector: 'app-word-associate',
  template: `
  <div>
    <ng-template wordHost></ng-template>
    <div class="next_btn_wrap_absolute" [class.hidden]='nextClick'>
      <!-- <p><strong>Press the SPACE bar to continue</strong></p> -->
      <button class="next_btn next_btn_hides" 
      [disabled]="nextClick" 
      [routerLink]="['/task-message']" href="">Press the SPACE bar to continue</button>
    </div>
  </div>
  `
})
export class WordAssociateComponent implements OnInit, OnDestroy {
  // @Input() words: AddWord[] = [];
  words: AddWord[] = [];
  nextClick = true;

  //constructor() { }
  //yoannes Inject the class in the components where you want to access the global variable:
  constructor(private globalService: AppModule,private wordService: WordService, private router: Router) {}

  accessGlobalVariable() {
    console.log(AppModule.globalVariable);
  }

  @HostListener('window:keyup.space',['$event'])
  navigateOnSpacebar(event: KeyboardEvent) {
    // Only enable space navigation if all words have been displayed
    if(this.nextClick == false) {
      this.router.navigate(['task-message']);
    }
  }
  // yoannes end

  currentAdIndex = -1;
  counter = 0;

  @ViewChild(WordDirective, { static: true }) wordHost!: WordDirective;
  interval: number | undefined;

  ngOnInit(): void {

    this.words = this.wordService.getWords(AppModule.listName);
    this.loadComponent();
    this.getWordsOne();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  loadComponent() {

    if (this.counter < this.words.length) {

      this.currentAdIndex = (this.currentAdIndex + 1) % this.words.length;
      const addWord = this.words[this.currentAdIndex];



      const viewContainerRef = this.wordHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<WordComponent>(addWord.component);
      componentRef.instance.data = addWord.data;
      this.counter++;


      if (this.counter == this.words.length) {
        this.nextClick = false;
      }
    }
    else {
      return;
    }
  }

  getWordsOne() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 5500);// 5500 The words flash every 5.5 seconds yoannes time
  }
}
