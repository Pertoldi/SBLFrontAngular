import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/services/actions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-action',
  templateUrl: './page-action.component.html',
  styleUrls: ['./page-action.component.scss']
})
export class PageActionComponent implements OnInit {
  param: any
  action: any
  constructor(private actionsService: ActionsService, route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.param = params.id
      console.log('params is :', params.id)
    })

  }

  ngOnInit(): void {
    this.actionsService.getOneAction(this.param).then(action => {
      this.action = action
      console.log('action is :', action)
    })
  }

  isActive(index: number) {
    if (index === 1) {
      return 'active'
    } else {
      return ''
    }
  }


}
