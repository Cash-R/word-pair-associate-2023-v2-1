import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'task-message-esp',
  templateUrl: './task-message-esp.component.html',
})
export class TaskMessageESPComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  @HostListener('window:keyup.space',['$event'])
  navigateOnSpacebar(event: KeyboardEvent) {
    this.router.navigateByUrl('/input-esp');
  }

}
function preventDefault() {
  throw new Error('Function not implemented.');
}

