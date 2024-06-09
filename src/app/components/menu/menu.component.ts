import { menuService } from './../../services/menu.service';
import { Component } from '@angular/core';
import { OceanData } from '../../interfaces/ocean-data';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  dados: OceanData[] = [];
  dadosForm: FormGroup;

  constructor(private service: menuService, private formBuilder: FormBuilder) {
    this.dadosForm = this.formBuilder.group({
      region: [''],
      species: [''],
      conservationStatus: [''],
      waterTemperatureMin: [''],
      waterTemperatureMax: [''],
      phMin: [''],
      phMax: [''],
      pollutionLevels: ['']
    });
  }

  ngOnInit(): void {
    this.dadosForm.valueChanges.subscribe(() => {
      this.listarFiltrado();
    });
    this.listar();
  }

  listar(): void {
    const apiUrl = this.buildApiUrl();
    this.service.listarOceanData(apiUrl).subscribe((listaDados) => (this.dados = listaDados));
  }

  listarFiltrado(): void {
    const apiUrl = this.buildApiUrl();
    this.service.listarOceanData(apiUrl).subscribe((listaDados) => {
      this.dados = listaDados;
    });
  }

  buildApiUrl(): string {
    let apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?';

    const region = this.dadosForm.get('region')?.value || '';
    const species = this.dadosForm.get('species')?.value || '';
    const conservationStatus = this.dadosForm.get('conservationStatus')?.value || '';
    const waterTemperatureMin = this.dadosForm.get('waterTemperatureMin')?.value || '';
    const waterTemperatureMax = this.dadosForm.get('waterTemperatureMax')?.value || '';
    const phMin = this.dadosForm.get('phMin')?.value || '';
    const phMax = this.dadosForm.get('phMax')?.value || '';
    const pollutionLevels = this.dadosForm.get('pollutionLevels')?.value || '';

    if (region) {
      apiUrl += `${region}`;
    }
    if (species) {
      apiUrl += `${species}`;
    }
    if (conservationStatus) {
      apiUrl += `${conservationStatus}`;
    }
    if (waterTemperatureMin) {
      apiUrl += `temperaturaMin=${waterTemperatureMin}&`;
    }
    if (waterTemperatureMax) {
      apiUrl += `temperaturaMax=${waterTemperatureMax}&`;
    }
    if (phMin) {
      apiUrl += `phMin=${phMin}&`;
    }
    if (phMax) {
      apiUrl += `phMax=${phMax}&`;
    }
    if (pollutionLevels) {
      apiUrl += `${pollutionLevels}`;
    }
    
    console.log(`apiUrl: ${apiUrl}`);

    return apiUrl + '&pagina=1&qtde=20';
  }

  onSubmit(): void {
    this.listarFiltrado();
  }

}
