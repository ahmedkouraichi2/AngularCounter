import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MethodComponent } from './method/method.component';
import { DatasetComponent } from './method/dataset/dataset.component';


import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ScrumTimeComponent } from './scrum-time/scrum-time.component';
import { ProcessMapComponent } from './process-map/process-map.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MethodComponent,
    DatasetComponent,
    ScrumTimeComponent,
    ProcessMapComponent,
    AppSidebarComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
