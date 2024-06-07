import { menuService } from './../../services/menu.service';
import { Component } from '@angular/core';
import { OceanData } from '../../interfaces/ocean-data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  dados:OceanData[] = [];

  dadosForm: FormGroup = new FormGroup({});

    constructor(private service:menuService, private formBuilder: FormBuilder){

    }

    listar():void{
      //acionada assim que é feita a requisicao
      this.service.listarOceanData().subscribe((listaDados) => (this.dados = listaDados));
    }


    ngOnInit():void{
      this.listar();
    }


}
