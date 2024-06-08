import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OceanData } from '../interfaces/ocean-data';

@Injectable({
  providedIn: 'root'
})
export class menuService {
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?pagina=1&qtde=20';
  constructor(private http: HttpClient) { }

  dados:OceanData[] = [];
  

  listarOceanData(apiUrl: string): Observable<OceanData[]> {
    return this.http.get<OceanData[]>(apiUrl);
  }
  
}

