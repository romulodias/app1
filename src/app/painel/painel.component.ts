import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';

import { Frase } from '../shared/frase.model'

import { FRASES } from './frases-mock'
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit , OnDestroy {


  public frases: Frase[] = FRASES
  public intrucao: string = 'Traduza a frase:'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<String> = new EventEmitter()

  constructor() {
    this.atualizaRodada();

  }

  ngOnInit() {
    
  }

  ngOnDestroy(){
    console.log("painel foi destruido")
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value)
  }

  verificarResposta(): void {
    console.log("rodadda" , this.rodada)

    if (this.rodadaFrase.frasePtbr == this.resposta) {


      //trocar pergunta da rodada
      this.rodada++

      //trocar progresso
      this.progresso = this.progresso + (100 / this.frases.length)

      //
      if (this.rodada == 4) {
        this.encerrarJogo.emit('Vitória')
      }


      //atualiza frase da rodada
      this.atualizaRodada()



    }
    else {
      
      //trocar pergunta da rodada
      this.tentativas--
      if (this.tentativas === -1) {
        this.encerrarJogo.emit('Derrota')
      }
    }


    

  }


  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]

    //limpar resposta

    this.resposta = ''
  }

}
