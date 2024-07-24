import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { GayathriComponent } from './gayathri/gayathri.component';
import { LocalComponent } from './local/local.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    GalleryComponent,
    UserDetailsComponent,
    UsersComponent,
    LoginComponent,
    GayathriComponent,
    LocalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

