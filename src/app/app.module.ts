import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EditarComponent } from './components/editar/editar.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
