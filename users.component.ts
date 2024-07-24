import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
 users: any=[];
  constructor(private userser:UserService) { }

  ngOnInit(): void {
    this.userser.getusers().subscribe((u:any)=>{
      this.userser.users=u;
      console.log(u)
      this.users=u
      

    })
    
  }

}
