import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module'; // yoannes
import Swal from 'sweetalert2'; // yoannes

const win: Window = window; //yoannes

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  // constructor() { }
    //constructor() { }
  //yoannes Inject the class in the components where you want to access the global variable:
  constructor(private globalService: AppModule) {}

  accessGlobalVariable() {
    console.log(AppModule.globalVariable);
  }
  // yoannes end

  ngOnInit(): void {
  }

}
