import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("name","gayathri")
  }
  click(){
    sessionStorage.setItem("name","gayi")
  }
  

}
