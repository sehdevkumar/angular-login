import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { GuardService } from './guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path:'homePage',
    component:HomeComponent,
   // canActivate:[GuardService]
  },
  {
    path:'loginPage',
    component:LoginComponent
  }
  ,
  {
    path: '',
    redirectTo:'loginPage',
    pathMatch:'full'

  },
  {
    path:'homePage/logout',
    component:LogoutComponent
  },

  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
