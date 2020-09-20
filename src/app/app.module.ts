import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { ArrivalStatusPipe } from './pipes/arrival-status/arrival-status.pipe';
import { BusServiceListComponent } from './components/bus-service-list/bus-service-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrivalStatusPipe,
    BusServiceListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
