import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.scss']
})
export class CardActionComponent implements OnInit {


  @Input() action!: any;
  @Input() button: Boolean = false
  constructor() { }

  ngOnInit(): void {
    console.log('this.action is :', this.action)
  }

}
