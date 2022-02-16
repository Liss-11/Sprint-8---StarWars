
import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutentificacionGuard } from './autentificacion.guard';






const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starships', component: PrincipalComponent, canActivate: [AutentificacionGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
