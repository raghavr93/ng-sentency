import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialComponent } from './special/special.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { AuthGuard } from './auth.guard';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id',
    component: AddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'analysis',
    component: AnalysisComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'special',
    component: SpecialComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
