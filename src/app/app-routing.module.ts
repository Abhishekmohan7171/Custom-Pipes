import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


const routes: Routes = [
  {
    component:ReactiveFormsComponent,
    path:'rforms'
  },
  {
    component:AboutComponent,
    path:'about'
  },
  // {
  //   component:PageNotFoundComponent,
  //   path:'**'
  // }
  // Lazy Loading
  // {
  //   path:'admin',loadChildren:()=>import('./admin/admin.module')
  //   .then(mod => mod.AdminModule)
  // },
  // {
  //   path:'user',loadChildren:()=>import('./user/user.module')
  //   .then(mod=>mod.UserModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
