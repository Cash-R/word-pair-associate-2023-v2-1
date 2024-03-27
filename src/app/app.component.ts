import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart} from '@angular/router';

import { WordService } from './word.service'; 
import { AddWord } from './add-word';
import { Subscription } from 'rxjs';

import Swal from 'sweetalert2';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'

})
export class AppComponent implements OnDestroy {
  subscription: Subscription;
  //words: AddWord[] = [];

  constructor(
    private router: Router
  ) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
      }
  });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //constructor(private wordService: WordService) {}

  ngOnInit() {
    //this.words = this.wordService.getWords();
  }
}

