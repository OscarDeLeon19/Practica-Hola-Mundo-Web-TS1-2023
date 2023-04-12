import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CulturaMaizComponent } from './pages/cultura-maiz/cultura-maiz.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MaizGuatemalaComponent } from './pages/maiz-guatemala/maiz-guatemala.component';
import { ActividadComponent } from './pages/actividad/actividad.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AgregarReviewComponent } from './components/agregar-review/agregar-review.component';
import { MisReviewsComponent } from './components/mis-reviews/mis-reviews.component';
import { ModificarReviewComponent } from './components/modificar-review/modificar-review.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { TablaPuntuacionComponent } from './components/tabla-puntuacion/tabla-puntuacion.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'maizGuatemala',
    component: MaizGuatemalaComponent
  }, 
  {
    path: 'culturaMaiz',
    component: CulturaMaizComponent
  },
  {
    path: 'actividad',
    component: ActividadComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'updateUser',
    component: UpdateUserComponent
  },
  {
    path: 'agregarReview',
    component: AgregarReviewComponent
  },
  {
    path: 'misReviews',
    component: MisReviewsComponent
  },
  {
    path: 'modificarReview',
    component: ModificarReviewComponent
  },
  {
    path: 'preguntas',
    component: PreguntasComponent
  },
  {
    path: 'tablaPuntuacion',
    component: TablaPuntuacionComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
