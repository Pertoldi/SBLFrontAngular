import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.scss']
})
export class CardActionComponent implements OnInit {


  @Input() action!: any;
  @Input() button: Boolean = false
  
  @Output() callbackEvent = new EventEmitter() //This callback is send to the parent to reload the view after a card is deleted
  constructor(private actionsService: ActionsService) { }

  ngOnInit(): void {
  }


  onBtnDelete(event: Event) {
    const id = (event.target as HTMLElement)!.id

    if (confirm("Etes vous sûr de vouloir supprimer cette carte?")) {
      this.actionsService.deleteAction(id).then(() => {
        this.callbackEvent.emit() // to allow the parent to reload his view
      })
    }
  }

}
