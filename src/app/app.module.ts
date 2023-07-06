import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule,FormsModule} from '@angular/forms';

//MATERIAL COMPONENTS//
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { HomeComponent } from './home/home.component';
import { CombociudadesComponent } from './combociudades/combociudades.component';
import { ComponentepadreComponent } from './componentepadre/componentepadre.component';
import { ComponentehijoComponent } from './componentehijo/componentehijo.component';
import { ListaComponent } from './crud/lista/lista.component';
import { DetalleComponent } from './crud/detalle/detalle.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CombociudadesComponent,
    ComponentepadreComponent,
    ComponentehijoComponent,
    ListaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
