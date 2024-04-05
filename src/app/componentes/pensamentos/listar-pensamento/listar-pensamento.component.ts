import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    //dados mocados
    {
      conteudo: 'Comunicação entre componentes',
      autoria:'Angular',
      modelo:'modelo3'
    },
    {
      conteudo: 'Comunicação entre componentes',
      autoria:'Angular',
      modelo:'modelo3'
    },
    {
      conteudo: 'When I wake up in the morning, love And the sunlight hurts my eyes And something without warning, love Bears heavy on my mind Then I look at you And the worlds alright with me Just one look at you And I know its gonna be A lovely day Lovely day, lovely day, lovely day... When the day that lies ahead of me Seems impossible to face When someone else instead of me Always seems to know the way',
      autoria:'bill',
      modelo:'modelo1'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
