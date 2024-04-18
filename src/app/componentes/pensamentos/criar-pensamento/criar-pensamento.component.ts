import { Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {




  formulario!: FormGroup;



  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuider: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuider.group({
      conteudo: ['Formulário reativo'],
      autoria: ['Angular'],
      modelo: ['modelo1']
    })
  }
  // ngOnInit(): void {
  //   this.formulario = new FormGroup({
  //     conteudo: new FormControl(''),
  //     autoria: new FormControl(''),
  //     modelo: new FormControl('')
  //   })
  // }

  criarPensamento(){
   this.service.criar(this.formulario.value).subscribe(() =>{
    this.router.navigate(['/listarPensamento'])
   })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
