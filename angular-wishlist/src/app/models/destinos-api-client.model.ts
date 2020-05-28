import { DestinoViaje } from './destino-viaje.models';

export class DestinosApiClient {
	destinos:DestinoViaje[];
	constructor() {
       this.destinos = [];
	}
	add(d:DestinoViaje){
	  this.destinos.push(d);
	}
	getAll(){
	  return this.destinos;
    }
} 