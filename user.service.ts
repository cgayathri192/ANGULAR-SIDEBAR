import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users=[];

  constructor(private http:HttpClient) { }

  getusers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getuser(id:number){
    return this.users.find((u) => u['id'] == id);
  }
}
