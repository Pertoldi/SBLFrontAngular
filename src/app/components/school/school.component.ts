import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  // Array of image paths
  imageArray: string[] = [];

  constructor() {
    this.loadImages();
  }

  ngOnInit(): void {
  }

  // Method to dynamically load image paths 
  loadImages() {
    for (let i = 1; i <= 10; i++) {
      this.imageArray.push(`assets/ecole/2024/Association SKATEBOARD BROTHERHOOD Lozère (${i}).JPG`);
    }
    console.log('imageArray is :', this.imageArray)
  }
}
