import { Component, OnInit, HostListener} from '@angular/core';
import { AppModule } from '../app.module'; // yoannes
import Swal from 'sweetalert2'; // yoannes
import { ActivatedRoute, Router } from '@angular/router'; // yoannes using route to navigate between pages without affecting my global variables values

const win: Window = window; //yoannes

@Component({
  selector: 'app-message-page-esp',
  templateUrl: './message-page-esp.component.html',
  //styleUrls: ['./message-page.component.css']
})
export class MessagePageESPComponent implements OnInit {

  hideMessage = true;
  listName : any = '';
  // constructor() { }
    //constructor() { }
  //yoannes Inject the class in the components where you want to access the global variable:
  constructor(private globalService: AppModule, private router: Router, private route: ActivatedRoute) {}

  accessGlobalVariable() {
    console.log(AppModule.globalVariable);
    console.log(AppModule.trainingTesting);
  }
  // yoannes end

  ngOnInit(): void {
    this.inputStudyId();  //yoannes
    this.listName = this.route.snapshot.paramMap.get('id');
    AppModule.listName = this.listName;
  }

  @HostListener('window:keyup.space',['$event'])
  navigateOnSpacebar(event: KeyboardEvent) {
    this.router.navigate(['word-associate-esp',this.listName]);
  }
  
  
  //function to get the Study ID
  inputStudyId(){
      Swal.fire({
        title: 'Ingrese la ID del estudio',
        input: 'text',
        width: 'auto',
        padding: 50,
        allowEscapeKey: false,
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: false,
        confirmButtonText: 'Entregar',
        confirmButtonColor: '#3085d6',
        showLoaderOnConfirm: true,
        preConfirm: (inputValue) => {
          if (!inputValue) {
            Swal.showValidationMessage(
              'Por favor ingrese una ID de estudio'
            )
          }else{
            AppModule.globalVariable = inputValue.toUpperCase();
            this.popSweetAlertSelection()
          }
        },
        // allowOutsideClick: () => !Swal.isLoading(),
        allowOutsideClick: false
      })
    } 


  //yoanes, prompt selection of the training (evening) vs Testing (morning)
  popSweetAlertSelection() {

      Swal.fire(
        {
          text: "ID del estudio " + AppModule.globalVariable,
          showCancelButton: true,
          cancelButtonText: "Pruebas (mañana)",
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#4caf50',
          width: 700,
          padding: 100,
          confirmButtonText: 'Entrenamiento (tarde)',
          allowOutsideClick: false
        }
      ).then((result) => {
        if (result.value) {
            // do nothing stay in testing evening
            AppModule.trainingTesting = "training";
            this.hideMessage = false;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          
          //Go to the task page
          AppModule.trainingTesting = "testing";
          this.router.navigate(['/task-message-testing-esp']);
        } 
      });
    }
  }
