import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
//import { FormGroup } from '@angular/forms/src/model';
//import { FormBuilder } from '@angular/forms/src/form_builder';


@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  PATH = '/products';

 // produto: FormGroup;
  formulario: any = {};
  produto: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public fb: AngularFireDatabase,
    public formB: FormBuilder
  ) {

    
   this.produto = this.navParams.data.produto || { };  //O que isse código faz????
  
   this.formulario = this.formB.group({
      
      key: [this.produto.key],
      name: [this.produto.name],
      preco: [this.produto.preco]
  
    })
  }

  submeter(): void {
    //Enviar os dados para o método create e depois volta a home
    this.create(this.formulario.value);
    this.navCtrl.setRoot(HomePage);
  }

  //Adiciona o produto
  create(produto: any) {
    return new Promise((resolve, reject) => {
        this.fb.list(this.PATH)
        .push({ name: produto.name, preco: produto.preco })
        .then(() => resolve());
    })
  }


/*

  //Adiciona ou edita, depende se vinher com a chave ou não
  create(produto: any) {
    return new Promise((resolve, reject) => {
      if (produto.key) {
        this.fb.list(this.PATH)
          .update(produto.key, { name: produto.name, preco: produto.preco })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.fb.list(this.PATH)
          .push({ name: produto.name, preco: produto.preco })
          .then(() => resolve());
      }
    })
    
  }
*/
  

}
