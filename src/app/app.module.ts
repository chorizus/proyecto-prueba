import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChorizusMiBibliotecaModule } from "../../projects/chorizus-mi-biblioteca/src/lib/chorizus-mi-biblioteca.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChorizusMiBibliotecaModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
