import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training';
  showsidebar: boolean = false;
  constructor (private router: Router, private ar: ActivatedRoute,private translate: TranslateService){
    this.translate.addLangs(['en','fr']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');

     this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        if(event.url=== '/login'){
          this.showsidebar = false;
          console.log('hide sidebar')
        } else{
          this.showsidebar = true;
          console.log('show sidebar')
        }
      }
     })

    }
    changelang(data:any){
      console.log(data.value);
      this.translate.use(data.value)
    }
  }
