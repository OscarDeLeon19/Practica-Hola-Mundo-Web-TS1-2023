import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MaizGuatemalaComponent } from './pages/maiz-guatemala/maiz-guatemala.component';

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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
