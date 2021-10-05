import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { DriverGridComponent } from './driver-grid-div-1/driver-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriverGridSecondComponent } from './driver-grid-second/driver-grid-second.component';
import { DriverGridThirdComponent } from './driver-grid-third/driver-grid-third.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    DriverGridComponent,
    DriverGridSecondComponent,
    DriverGridThirdComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
