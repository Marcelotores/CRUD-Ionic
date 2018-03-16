import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  PATH = '/products';
  formulario: any = {};
  produto: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formB: FormBuilder,
    public fb: AngularFireDatabase
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
    this.edit(this.formulario.value);
    this.navCtrl.setRoot(HomePage);
  }

  edit(produto: any) {
    return new Promise((resolve, reject) => {
      if (produto.key) {
        this.fb.list(this.PATH)
          .update(produto.key, { name: produto.name, preco: produto.preco })
          .then(() => resolve())
          .catch((e) => reject(e));
      } 
    })
    
  }

}
