import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produtos } from '../model/produto.model';
import { DatabaseService } from '../servico/database.service';

@Component({
  selector: 'app-criar-lista',
  templateUrl: './criar-lista.page.html',
  styleUrls: ['./criar-lista.page.scss'],
})

export class CriarListaPage{

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  nameButton = "Adicionar";
  imagem ='https://cdn.pixabay.com/photo/2014/10/28/22/19/supermarket-507295_1280.jpg';
  form!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private bancoDados:DatabaseService
    ){}
  
  ngOnInit(){
    this.validaForm()
  }

validaForm(){
  this.form = this.formBuilder.group({
    item: ['',[Validators.required, Validators.minLength(1)]],
    quant: ['',[Validators.required, Validators.maxLength(50)]] 
   })
}

cadastroButton(){
this.bancoDados.cadastro(this.form.value)
}

}


 /*   dados = {
    id: "",
    produto: "",
    quantidade: ""
};

  constructor(
    private http:HttpClient,
  ) {}
  ngOnInit(): void {

    
  }

  cadastro(form:any){
    this.http.post('http://localhost:3000/lista/', form.value, this.httpOptions).subscribe();
    setTimeout(this.refresh, 1000) 
  }


  deletar(id:any){
    this.http.delete('http://localhost:3000/lista/' + id).subscribe();
    // Definir 2 segundos para atualizar a página
    setTimeout(this.refresh, 1000) 
  }

  // Método de refresh

refresh(){
  // Função JS - Atualiza a página
  location.reload();
}

}  */ 
