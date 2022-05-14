import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree'

import { RouterModule, Routes } from '@angular/router'
import { RangerScheduleComponent } from './ranger-schedule/ranger-schedule.component';
import { AboutComponent } from './about/about.component';
import { LettersComponent } from './letters/letters.component';

const routes: Routes = [
  { path: 'schedule', component: RangerScheduleComponent },
  { path: 'letters', component: LettersComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'schedule', pathMatch: 'full' },
]


@NgModule({
  declarations: [
    AppComponent, RangerScheduleComponent, AboutComponent, LettersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    FormsModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    MatGridListModule,
    MatSelectModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
