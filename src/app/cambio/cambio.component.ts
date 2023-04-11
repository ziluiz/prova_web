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

//real - dolar americano
brlad(){

 this.brlad = this.moeda1 / 5.07

}

//real - dolar canadense
brlcd(){


}

//dolar americano - dolar canadense
adcd(){


}

//dolar americano - real
adbrl(){


}

//dolar canadense - dolar americano
cdad(){


}

//dolar canadense - real
cdbrl(){


}

}
