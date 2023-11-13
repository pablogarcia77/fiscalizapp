import { Component, OnInit } from '@angular/core';
import { Contadores, emptyContadores } from 'src/app/models/contadores';
import { Partido, emptyPartidos } from 'src/app/models/partido';
import { emptySendData } from 'src/app/models/sendData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contadores: Contadores = emptyContadores();

  partidos: Partido[] = emptyPartidos();

  sendData = emptySendData();

  constructor() { }

  ngOnInit(): void {
  }

  sumar(nombre: keyof Contadores): void {
    this.contadores[nombre]++;
  }

  restar(partido: keyof Contadores): void {
    this.contadores[partido]--;
  }

  enviarReporte(): void {
    let message = `*Resultados de la mesa ${this.sendData.mesa}:* %0A`;
    this.partidos.forEach(partido => {
      message += `${partido.nombre}: ${this.contadores[partido.key]} (${(this.contadores[partido.key] * 100 / this.contadores['electores']).toFixed(2)}%)%0A`
    });

    const nuevosTotales = this.sendData.totales.map(partido => {
      return {
        nombre: partido.nombre,
        total: this.contadores[partido.key]
      };
    });
    const urlWABase = `https://api.whatsapp.com/send?phone=54${this.sendData.contacto}&text=${message}`;
    window.open(urlWABase);
  }

  sumaTodo(): number {
    return this.partidos
      .filter(partido => partido.key !== 'electores')
      .map(partido => this.contadores[partido.key])
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  recieveData(event: any): void {
    this.sendData.mesa = event.mesa;
    this.sendData.contacto = event.contacto
  }
}
