import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images:any[];
  imagesFound:boolean = false;
  searching:boolean = false;

  constructor(private _imageService:ImageService) { }

  searchImages(query: string){
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
     data => this.handleSuccess(data),
     error => console.log(error),
     () => this.searching = false
   )   
  }
  handleSuccess(data){
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  ngOnInit() {
    
  }

}
