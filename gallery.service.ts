import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getGalleryData(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }
}
