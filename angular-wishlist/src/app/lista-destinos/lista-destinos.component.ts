import { Component, OnInit, Output } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.models';
import { DestinosApiClient } from '../models/destinos-api-client.model';
import { EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
  providers: [ DestinosApiClient ]
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
  constructor(public destinosApiCliente:DestinosApiClient) { 
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.destinosApiCliente.subscribeOnChange((d: DestinoViaje) => {
      if(d !=null){
        this.updates.push('Se ha elegido a ' + d.nombre);
      }
    });
  }

  ngOnInit(): void {
  }

  agregado(d: DestinoViaje){
    this.destinosApiCliente.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(e: DestinoViaje){
    this.destinosApiCliente.elegir(e);
  }

}
