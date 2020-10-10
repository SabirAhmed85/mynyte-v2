import { Component, OnInit } from '@angular/core';

import { PhotoService } from '@services/index';

@Component({
  selector: 'app-mynyte',
  templateUrl: 'mynyte.page.html',
  styleUrls: ['mynyte.page.scss']
})
export class MyNytePage implements OnInit {

  constructor(public photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
