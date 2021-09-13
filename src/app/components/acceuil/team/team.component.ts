import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @ViewChild('loaderTeamCard') loader!: ElementRef;
  teamCard: any
  constructor(private teamService: TeamService) { }


  async ngOnInit() {
    this.teamService.getTeamCard().then(async (serverTeamCard) => {
        this.teamCard = serverTeamCard
        this.loader.nativeElement.classList.add('disable-loader-spinner')  
    })
  }
}
