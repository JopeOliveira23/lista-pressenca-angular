import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditarComponent } from './components/editar/editar.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';



@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    EditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EditarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
