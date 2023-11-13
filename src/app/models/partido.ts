import { Contadores } from "./contadores";

export interface Partido {
    key: keyof Contadores;
    nombre: string;
    lista: string;
    total: number;
}

export const emptyPartidos = () : Partido[] => (
    [
        {
          key: 'lla',
          nombre: 'La Libertad Avanza',
          lista: '135',
          total: 0
        },
        {
          key: 'upp',
          nombre: 'Union por la Patria',
          lista: '134',
          total: 0
        },
        {
          key: 'blancos',
          nombre: 'Votos en Blanco',
          lista: '-',
          total: 0
        },
        {
          key: 'nulos',
          nombre: 'Votos Nulos',
          lista: '-',
          total: 0
        },
        {
          key: 'electores',
          nombre: 'Total de Electores',
          lista: '-',
          total: 0
        },
    ]
);