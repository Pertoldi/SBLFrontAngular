import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  @Input() card!: any;
  @Input() button: boolean = false

  @Output() callbackEvent = new EventEmitter() //This callback is send to the parent to reload the view after a card is deleted

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {

  }

  onBtnDelete(event: Event): void {
    const id = (event.target as HTMLElement)!.id

    if (confirm("Etes vous sûr de vouloir supprimer cette carte?")) {
      this.teamService.deleteTeamCard(id).then(() => {
        this.callbackEvent.emit() // to allow the parent to reload his view
      })
    }
  }
}
