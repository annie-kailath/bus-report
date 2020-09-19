import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { ArrivalStatusPipe } from './pipes/arrival-status/arrival-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArrivalStatusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
