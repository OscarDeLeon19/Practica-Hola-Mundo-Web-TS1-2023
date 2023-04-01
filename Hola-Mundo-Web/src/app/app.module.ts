import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MaizGuatemalaComponent } from './pages/maiz-guatemala/maiz-guatemala.component';
import { NgChartsModule } from 'ng2-charts';
import { CulturaMaizComponent } from './pages/cultura-maiz/cultura-maiz.component';
import { ActividadComponent } from './pages/actividad/actividad.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    MaizGuatemalaComponent,
    CulturaMaizComponent,
    ActividadComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
