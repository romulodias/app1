import { Component, OnInit ,OnChanges, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {


  @Input() public tentativas: number

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() {
    
   }


   ngOnChanges(){
    //this.tentativas
    //this.corações.lenght
    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas
      let cocaraoleng = this.coracoes.length
      this.coracoes[indice -1].cheio = false
      console.log("cocacao" ,cocaraoleng)
      console.log("indice" ,indice)
    } 
  }

  ngOnInit() {


  }

  

}
