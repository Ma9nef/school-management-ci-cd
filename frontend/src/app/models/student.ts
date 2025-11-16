import { Classe } from "./classe";

export interface Student {
    id?: number;
    name: string;
    prenom: string;
    age: number;
    classe?: Classe;  
  }
  