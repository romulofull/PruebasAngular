import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContadorComponent } from './contador/contador.component';
import { AppComponent } from './app.component';
   

@NgModule({
  imports: [BrowserModule, AppComponent],  // Importamos el AppComponent standalone
  declarations: [ContadorComponent],  // Declaramos ContadorComponent
  bootstrap: [AppComponent],  
  
})
export class AppModule { }
