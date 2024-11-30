import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from "./contador/contador.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 /*  template: '<h1>Angular</h1>', */

 /* styleUrl: './app.component.css' */
 styles : [ 'h1 {color: blue;}'],
 standalone: true,
 imports: [ContadorComponent], 

})
export class AppComponent {
  title = 'curso';
}
