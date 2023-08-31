import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/produto.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  imagem ='https://cdn.pixabay.com/photo/2014/10/28/22/19/supermarket-507295_1280.jpg';
  meusProdutos:Produtos[] = [];
  constructor(private http:HttpClient,) {}
  
  ngOnInit(): void {
    
  }


}
