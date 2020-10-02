import { Component, OnInit } from '@angular/core';
import { isIndexSignatureDeclaration } from 'typescript';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {


//declaracion de variable tipo arreglo de clase datospersona 1er
  arrayPersona:datospersona[] = [];

  constructor() { }

  ngOnInit(): void {
    this.inicializaArray();
  }

//funcion va a llenar mis atributos o campos porque no tenemos api
inicializaArray()
{
 var objeto = [{
            nombre:"Sandro",
            Apellido:"Yagual",
            celular:979501563

            },
            {
              nombre:"Anibal",
              Apellido:"Tomala",
              celular:979501563
            }
            ];
            //asignamos a ese arreglo el objeto
  this.arrayPersona = objeto;//.push(objeto);
  console.log(this.arrayPersona);
}

}

//clase datospersona
export interface datospersona{
 nombre:string;
 Apellido:string;
 celular:number; 
}