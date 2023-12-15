import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
{
  path:'expediteur',
  loadChildren: () => import('./expediteur/expediteur.module').then(m => m.ExpediteurModule),
},
{
  path:'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
},
{
  path:'login',
  component:LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
