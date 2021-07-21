import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrdComponent } from './prd/prd.component';
import { FormControl, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormControlName } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
