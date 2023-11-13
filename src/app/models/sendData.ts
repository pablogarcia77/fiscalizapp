import { Partido, emptyPartidos } from "./partido";

export interface SendData {
    mesa: string;
    totales: Partido[];
    contacto: string;
}

export const emptySendData = () : SendData => ({
    mesa: '',
    totales: emptyPartidos(),
    contacto: ''
});