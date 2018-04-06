import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'

import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {


  public frases: Frase[] = FRASES
  public intrucao: string = 'Traduza a frase:'
  public resposta: string
  public rodada: number = 0
  public rodadaFrase: Frase

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase)

  }

  ngOnInit() {
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value)
  }

  verificarResposta(): void {

    if (this.rodadaFrase.frasePtbr == this.resposta) {
      alert('A tradução está correta')
      
      //trocar pergunta da rodada
      this.rodada++

      //atualiza frase da rodada
      this.rodadaFrase = this.frases[this.rodada]
    }
    else
      alert('A tradução está errada')
    //trocar pergunta da rodada


  }

}
