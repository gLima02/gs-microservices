import { ProjetosConservacao } from './projetosConservacao';
import { Especie } from "./especie";

export interface OceanData {
  regiao: string;
  temperaturaAgua: number;
  pH: number;
  nivelPoluicao: string;
  especies: Especie[];
  projetosConservacao: ProjetosConservacao[];
}
