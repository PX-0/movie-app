import { Hobby } from "../interfaces/hobby-interface";
import { Language } from "../interfaces/language-interface";

export type Student = {
    nome: string,
    cognome: string,
    genere: string,
    eta: number,
    citta: string,
    hobbies: Array<Hobby>,
    hasPets: boolean,
    lingue: Array<Language>,
}