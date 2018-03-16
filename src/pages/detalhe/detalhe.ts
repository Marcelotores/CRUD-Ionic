import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  key: string;
  PATH = '/products';
  public produto: Observable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public fb: AngularFireDatabase
  ) {
    this.key = this.navParams.get('key');
    this.produto = this.getOne(this.key);
  }

  getOne(key: string) {
    return this.fb.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

}
