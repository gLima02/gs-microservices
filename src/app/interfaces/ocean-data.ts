import { ProjetoConservacao } from './projeto-conservacao';
import { Especie } from "./especie";

export interface OceanData {
  regiao: string;
  temperaturaAgua: number;
  pH: number;
  nivelPoluicao: string;
  especies: Especie[];
  ProjetoConservacao: ProjetoConservacao[];
}
