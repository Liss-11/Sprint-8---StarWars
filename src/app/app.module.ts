
import {ReactiveFormsModule } from '@angular/forms';
import { AutentificacionGuard } from './autentificacion.guard';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MiServicioService } from './servicios/mi-servicio.service';
import { DetallesNaveComponent } from './detalles-nave/detalles-nave.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CabezeraComponent } from './cabezera/cabezera.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DetallesNaveComponent,
    HomeComponent,
    LoginComponent,
    CabezeraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule
  ],
  providers: [MiServicioService,
  AutentificacionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
