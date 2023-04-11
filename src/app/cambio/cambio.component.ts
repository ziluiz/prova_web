import { Component } from '@angular/core';

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.css']
})

export class CambioComponent {

moeda1 : number = 0;

moeda2 : number = 0;

moeda3 : number = 0;

controle : any;

constructor(){}

execute(controle : any){

  switch(controle){
    case 'brlad':
      this.brlad()
    break

    case 'brlcd':
      this.brlcd()
    break

    case 'adcd':
      this.adcd()
    break

    case 'adbrl':
      this.adbrl()
    break

    case 'cdad':
      this.cdad()
    break

    case 'cdbrl':
      this.cdbrl()
    break

  }
}



//real - dolar americano
brlad(){

  this.moeda3 = 1 *  0.20



}

//real - dolar canadense
brlcd(){

  this.moeda3 = 1 *  0.27



}

//dolar americano - dolar canadense ****
adcd(){

  this.moeda3 = 1 *  1.35



}

//dolar americano - real
adbrl(){

  this.moeda3 = 1 *  5.07



}

//dolar canadense - dolar americano
cdad(){

  this.moeda3 = 1 *  0.74



}

//dolar canadense - real
cdbrl(){

  this.moeda3 = 1 *  3.75



}

converter(){

  this.moeda2 = this.moeda1 * this.moeda3

}

}
