import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onReadMore(ElementRef: any) {
    if (ElementRef.classList.contains('text-hidden')) {
      ElementRef.classList.remove('text-hidden')
    } else {
      ElementRef.classList.add('text-hidden')
    }
  }

}

