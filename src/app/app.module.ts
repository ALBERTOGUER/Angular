import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent} from './components/navbar/navbar.component';
import { PresentacionComponent} from './components/presentacion/presentacion.component'
import { ServiciosComponent} from './components/servicios/servicios.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component'
  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentacionComponent,
    ServiciosComponent,
    NosotrosComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
