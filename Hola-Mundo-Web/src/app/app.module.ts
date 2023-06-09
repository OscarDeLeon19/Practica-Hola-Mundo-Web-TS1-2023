import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MaizGuatemalaComponent } from './pages/maiz-guatemala/maiz-guatemala.component';
import { CulturaMaizComponent } from './pages/cultura-maiz/cultura-maiz.component';
import { ActividadComponent } from './pages/actividad/actividad.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/create/create.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { MenuUsuarioComponent } from './shared/menu-usuario/menu-usuario.component';
import { AgregarReviewComponent } from './components/agregar-review/agregar-review.component';
import { MisReviewsComponent } from './components/mis-reviews/mis-reviews.component';
import { ModificarReviewComponent } from './components/modificar-review/modificar-review.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { TablaPuntuacionComponent } from './components/tabla-puntuacion/tabla-puntuacion.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    MaizGuatemalaComponent,
    CulturaMaizComponent,
    ActividadComponent,
    LoginComponent,
    CreateComponent,
    UpdateUserComponent,
    MenuUsuarioComponent,
    AgregarReviewComponent,
    MisReviewsComponent,
    ModificarReviewComponent,
    PreguntasComponent,
    TablaPuntuacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
