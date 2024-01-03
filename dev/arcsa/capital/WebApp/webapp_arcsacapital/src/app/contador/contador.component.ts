import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {


  persona: Persona = {
    nombre: 'Daniel Ochoa',
    edad: 26
  };

}
