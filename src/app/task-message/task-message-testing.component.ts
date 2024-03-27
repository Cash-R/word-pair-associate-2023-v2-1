import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'task-message-testing',
  templateUrl: './task-message-testing.component.html',
})
export class TaskMessageTestingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @HostListener('window:keyup.space',['$event'])
  navigateOnSpacebar(event: KeyboardEvent) {
    this.router.navigateByUrl('/input');
  }
  
}
function preventDefault() {
  throw new Error('Function not implemented.');
}

