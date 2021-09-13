import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @ViewChild('dynamicTeamCard') dynamicTeamCard!: ElementRef;
  teamCard: any
  constructor(private teamService: TeamService) { }


  async ngOnInit() {
    this.teamService.getTeamCard().then(async (serverTeamCard) => {
      //TODO stop the spinner
      this.teamCard = serverTeamCard

    })
  }

}
