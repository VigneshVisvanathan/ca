import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component'
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';




const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'navbar',
    canActivate:[AuthGuard],
    component:NavbarComponent
  },
  {
    path:'dash',
    canActivate:[AuthGuard],
    component:DashboardComponent
  },
  {
    path:'forgotpass',
    component:ForgotpassComponent
  },
  {
    path:'login/forgotpass',
    component:ForgotpassComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
