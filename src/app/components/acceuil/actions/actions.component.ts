import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  @ViewChild('loaderActions') loader!: ElementRef;
  actions: any
  blocActions: Array<any> = []; //This variable is use to store 3 actions(les anciens evenment) pour les afficher 3 par 3 dans le caroussel

  constructor(private actionsService: ActionsService) { }

  ngOnInit(): void {
    this.actionsService.getActions().then(async (serverActions) => {
      console.log('serverActions is :', serverActions)
      this.actions = serverActions
      this.loader.nativeElement.classList.add('disable-loader-spinner')

      // this loop initialize blocActions
      for (let i = 0; i < Math.floor(this.actions.length / 3) + 1; i++) {
        this.blocActions.push([])
      }
      console.log('this.blocActions is :', this.blocActions)

      for (let i = 0; i < this.actions.length; i++) {
        let indexBlocActions = Math.floor(i / 3)//Divide by 3 becouase we want 3 item by caroussel view

        console.log('indexBlocActions is :', indexBlocActions)
        this.blocActions[indexBlocActions].push(this.actions[i])
        console.log(`this.actions[${i}] is :`, this.actions[i])
      }

      console.log('blocActions is :', this.blocActions)
      console.log(this.blocActions[0]);

    })
  }

  isActive(i: number) {
    if (i === 0) {
      return 'active'
    }
    else {
      return ''
    }
  }
}


