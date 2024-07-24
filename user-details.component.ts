import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
userdata:any;
  constructor(private userser: UserService,private ac: ActivatedRoute) { }

  ngOnInit(): void {
    let currentId
    this.ac.params.subscribe((a:any)=>{
      currentId= a.id;
      this.userdata = this.userser.getuser(currentId);
      console.log(this.userdata)
    })
    console.log(currentId)
  }

}
