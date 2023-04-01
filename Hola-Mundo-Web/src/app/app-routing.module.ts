import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CulturaMaizComponent } from './pages/cultura-maiz/cultura-maiz.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MaizGuatemalaComponent } from './pages/maiz-guatemala/maiz-guatemala.component';
import { ActividadComponent } from './pages/actividad/actividad.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';

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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
