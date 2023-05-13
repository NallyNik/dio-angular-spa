import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SpaButtonComponent } from './components/spa-button/spa-button.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { CardComponent } from './components/card/card.component';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { MenuComponent } from './components/menu/menu.component';
import { TasksComponent } from './components/tasks/tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodolistComponent,
    LoginComponent,
    LogoutComponent,
    SpaButtonComponent,
    ChipsComponent,
    ChecklistComponent,
    CardComponent,
    MenuComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
