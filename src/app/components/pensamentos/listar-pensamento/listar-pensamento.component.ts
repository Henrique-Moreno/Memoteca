import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: ' I love React',
      autoria: 'Henrique',
      modelo: 'modelo1'
    },
    {
      conteudo: ' I love Golang',
      autoria: 'Henrique',
      modelo: 'modelo2'
    }
  ];

}