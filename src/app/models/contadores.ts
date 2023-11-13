export interface Contadores {
    lla: number;
    upp: number;
    blancos: number;
    nulos: number;
    electores: number;
}

export const emptyContadores = () : Contadores => ({
    lla: 0,
    upp: 0,
    blancos: 0,
    nulos: 0,
    electores: 0
});