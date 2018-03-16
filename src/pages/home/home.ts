import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProdutoPage } from '../produto/produto';
import { Observable } from 'rxjs/Observable';
import { DetalhePage } from '../detalhe/detalhe';
import { EditPage } from '../edit/edit';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  PATH = '/products';

  public produtos: Observable<any>;

  constructor(public navCtrl: NavController, public fb: AngularFireDatabase) {
    this.produtos = this.getAll();
  }

  novoProduto(): void {
    this.navCtrl.push(ProdutoPage);
  }

  detalhe(key: string) {
    this.navCtrl.push(DetalhePage, {key: key});
  }

  edit(produto: string) {
    this.navCtrl.push(EditPage, {produto: produto});
  }


  getAll() {
    return this.fb.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }


  remove(key: string): void {
    this.fb.list(this.PATH).remove(key);
  }

}
