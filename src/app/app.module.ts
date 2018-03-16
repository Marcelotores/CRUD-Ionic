import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Importações do firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ProdutoPage } from '../pages/produto/produto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { EditPage } from '../pages/edit/edit';

const config = {
  apiKey: "AIzaSyC9B9Fu4mzDFM-b8NGM7mgjOk96abFyHWk",
  authDomain: "project-2-ae366.firebaseapp.com",
  databaseURL: "https://project-2-ae366.firebaseio.com",
  projectId: "project-2-ae366",
  storageBucket: "",
  messagingSenderId: "638930853532"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProdutoPage,
    DetalhePage,
    EditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    //configurações do firebase
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProdutoPage,
    DetalhePage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
