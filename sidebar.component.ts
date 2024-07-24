import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  items=[
    {
      title:'dashboard',
      link:'/dashboard'
    },
    {
      title:'profile',
      link:'/profile'
    },
    {
      title:'gallery',
      link:'/gallery'
    },
    {
      title:'users',
      link:'/users'
    }
    

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
