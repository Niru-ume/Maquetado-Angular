import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './Componentes/encabezado/encabezado.component';
import { SobreMIComponent } from './Componentes/sobre-mi/sobre-mi.component';
import { ProyectosComponent} from './Componentes/proyectos/proyectos.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SobreMIComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
