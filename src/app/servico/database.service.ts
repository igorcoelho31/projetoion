import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  readonly API = 'http://localhost:3000/produtos/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

constructor(private http: HttpClient) { }

  /* Consulta */
  consulta(){
   return this.http.get<Produtos[]>(this.API)
  }

  /* Cadastro */

  cadastro(form:any){
   return this.http.post(this.API, form, this.httpOptions).subscribe();
  }

  /* Edit */

  editar(dados:any, id:any){
    return this.http.put(this.API + id, dados, this.httpOptions).subscribe();
  }

  /* Excluir */

  excluir(id:any){
    return this.http.delete(this.API + id).subscribe();
  }  
}
