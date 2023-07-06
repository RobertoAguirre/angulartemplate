import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ComponentepadreComponent } from './componentepadre/componentepadre.component';
import { ListaComponent } from './crud/lista/lista.component';
import { DetalleComponent } from './crud/detalle/detalle.component';

const routes: Routes = [
  {path:'', component:LoginComponent,pathMatch:'full'},
  {path:'home', component:HomeComponent,pathMatch:'full'},
  {path:'padre', component:ComponentepadreComponent,pathMatch:'full'},
  {path:'lista',component:ListaComponent, pathMatch:'full'},
  {path:'detalle/:data',component:DetalleComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
