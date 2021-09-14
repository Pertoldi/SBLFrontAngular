import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-action',
  templateUrl: './page-action.component.html',
  styleUrls: ['./page-action.component.scss']
})
export class PageActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Example of how to receive params
//   this.activatedRoute.params.subscribe(params => {
//     let id = params['id'];
  
//     console.log(`${id}`);
//     });
}
