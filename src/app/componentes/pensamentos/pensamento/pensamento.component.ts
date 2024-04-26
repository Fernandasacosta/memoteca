import { ListarPensamentoComponent } from './../listar-pensamento/listar-pensamento.component';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  // propiedade vai receber informações do componente pai
 @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'joboatao',
    autoria:'bia',
    modelo:'modelo3',
    favorito: false



  }
  @Input() listaFavoritos: Pensamento[] = [];


  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  // tamanho do card de forma dinamica
  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string{
    if(this.pensamento.favorito ==false){
      return 'inativo'
    }
    return 'ativo'
  }

  atualizarFavoritos(){
    this.service.mudarFavorito(this.pensamento).subscribe(() =>
    this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1));
  }

}
