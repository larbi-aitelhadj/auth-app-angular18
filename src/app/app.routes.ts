import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './authenticated/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProjectsComponent } from './authenticated/projects/projects.component';
import { ContactComponent } from './authenticated/contact/contact.component';
import { AboutComponent } from './authenticated/about/about.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'authenticated',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
      }
    ]
  },
   {
    path: 'authenticated',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
      }
    ]
  },
   {
    path: 'authenticated',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '',
        redirectTo: 'contact',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];