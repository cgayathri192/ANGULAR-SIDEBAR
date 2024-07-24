import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GayathriService {

  constructor(private http:HttpClient ) { 

  }
  dataFromLink(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
