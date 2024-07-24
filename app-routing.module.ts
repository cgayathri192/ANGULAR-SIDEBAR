import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userInfo } from 'os';
import { GayathriComponent } from './gayathri/gayathri.component';
import { LocalComponent } from './local/local.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UsersComponent } from './pages/users/users.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'gayathri',
    component:GayathriComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'sidebar',
    component:SidebarComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'users/:id',
    component:UserDetailsComponent
  },
  {
    path:'local',
    component:LocalComponent
  },
  {
    path:'**',
    component:SidebarComponent
  }
  
  
  

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
