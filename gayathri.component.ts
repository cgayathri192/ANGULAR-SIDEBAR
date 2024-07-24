import { Component, OnInit } from '@angular/core';
import { GayathriService } from '../gayathri.service';

@Component({
  selector: 'app-gayathri',
  templateUrl: './gayathri.component.html',
  styleUrls: ['./gayathri.component.scss']
})
export class GayathriComponent implements OnInit {

  constructor(private ser: GayathriService) { }

  ngOnInit(): void {
    this.ser.dataFromLink().subscribe((x:any)=>{
      console.log(x)
      localStorage.setItem('name','gayatri');
    })
  }

}
