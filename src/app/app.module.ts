import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WordAssociateComponent } from './lits1/word-associate.component'; 
import { MessagePageComponent } from './message-page/message-page.component';
import { TaskMessageComponent } from './task-message/task-message.component';
import { TaskMessageTestingComponent } from './task-message/task-message-testing.component';
import { WordDirective } from './word.directive';
import { WordService } from './word.service'; 
import { MainPageComponent } from './main-page/main-page.component';
import { WordAssociateInputComponent } from './word-input-display/word-associate-input.component';
import { CommonModule } from '@angular/common';
import { DisableOnEnterDirective } from './disable-on-enter.directive';
import { FailTestComponent } from './fail-test.component'; 
import { PassTestComponent } from './pass-test.component';

//yoannes , a static property needs to be created to be used as global variable
import { Injectable } from '@angular/core'; 

@Injectable({ 
  providedIn: 'root'
})

//yoannes end

@NgModule({
  imports: [ 
    BrowserModule, 
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [ WordService],
  declarations: [
    AppComponent, 
    WordAssociateComponent,
    MessagePageComponent,
    WordDirective,
    MainPageComponent,
    TaskMessageComponent,
    TaskMessageTestingComponent,
    WordAssociateInputComponent,
    DisableOnEnterDirective,
    FailTestComponent,
    PassTestComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
  //yoannes static property that will be your global variable:
  static globalVariable: any;
  static trainingTesting: any;
  static listName: any;
}

