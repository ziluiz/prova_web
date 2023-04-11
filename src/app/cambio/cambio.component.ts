import { Component } from '@angular/core';

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.css']
})
export class CambioComponent {

moeda1 : number = 0;

moeda2 : number = 0;

constructor(){}

//real - dolar americano
brlad(){

  this.moeda2 = this.moeda1 * 0.20

}

//real - dolar canadense
brlcd(){

  this.moeda2 = this.moeda1 * 0.27

}

//dolar americano - dolar canadense ****
adcd(){

  this.moeda2 = this.moeda1 * 1.35

}

//dolar americano - real
adbrl(){

  this.moeda2 = this.moeda1 * 5.07

}

//dolar canadense - dolar americano
cdad(){

  this.moeda2 = this.moeda1 * 0,74

}

//dolar canadense - real
cdbrl(){

  this.moeda2 = this.moeda1 * 3,75

}

}
