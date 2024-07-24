import { Component, OnInit } from '@angular/core';
import { GalleryModel } from 'src/app/shared/models/gallery.model';
import { GalleryService } from 'src/app/shared/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
gallery: GalleryModel[]=[];
  constructor(private galleryser:GalleryService) { }

  ngOnInit(): void {
    this.galleryser.getGalleryData().subscribe((g:any)=>{
      this.gallery=g.slice(1,100);
      console.log(this.gallery)
    })
  }

}
