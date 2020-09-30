import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { TesteComponent} from './meu-primeiro/teste.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';


@NgModule({
  /*Metadados*/
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    TesteComponent,
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],  /*Onde fica os serviços*/
  bootstrap: [AppComponent]
})
export class AppModule { } /*Modulo Raiz*/
