import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MessagePageComponent } from './message-page/message-page.component';

import { MessagePageESPComponent } from './message-page-esp/message-page-esp.component';

import { TaskMessageComponent } from './task-message/task-message.component';
import { TaskMessageTestingComponent } from './task-message/task-message-testing.component';

import { TaskMessageTestingESPComponent } from './task-message-esp/task-message-testing-esp.component';

import { WordAssociateInputComponent } from './word-input-display/word-associate-input.component';

import { WordAssociateInputESPComponent } from './word-input-display-esp/word-associate-input-esp.component';

import { FailTestComponent } from './fail-test.component';
import { PassTestComponent } from './pass-test.component';
import { WordAssociateComponent } from './lists/word-associate.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  //{ path: 'app-main-page', component: MainPageComponent },
  { path: '', component: MainPageComponent, pathMatch: 'full'},
  { path: 'app-message-page/:id', component: MessagePageComponent },
  { path: 'app-message-page', component: MessagePageComponent },

  { path: 'app-message-page-esp/:id', component: MessagePageESPComponent },
  { path: 'app-message-page-esp', component: MessagePageESPComponent },

  { path: 'word-associate/:id', component: WordAssociateComponent },
  { path: 'task-message', component: TaskMessageComponent},
  { path: 'task-message-testing', component: TaskMessageTestingComponent},

  { path: 'task-message-testing-esp', component: TaskMessageTestingESPComponent},

  { path: 'input', component: WordAssociateInputComponent},

  { path: 'input-esp', component: WordAssociateInputESPComponent},

  { path: 'fail-test', component: FailTestComponent},
  { path: 'pass-test', component: PassTestComponent},
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' } // Wildcard route for unmatched URLs

   // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];

@NgModule({
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }

