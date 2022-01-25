import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MiServicioService } from './mi-servicio.service';
import { DetallesNaveComponent } from './detalles-nave/detalles-nave.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DetallesNaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [MiServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
