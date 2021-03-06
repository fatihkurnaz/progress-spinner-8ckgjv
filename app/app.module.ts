import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material.module';
import { MatNativeDateModule } from '@angular/material';
import { ProgressSpinnerModule } from './progress-spinner/progress-spinner.module';
import { ProgressSpinnerDemoComponent } from './progress-spinner-demo/progress-spinner-demo.component';

import { AppComponent } from './app.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ProgressSpinnerModule
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent, ProgressSpinnerDemoComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }