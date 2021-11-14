import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss']
})
export class BackOfficeComponent implements OnInit {

  teamCardOffice = false
  actionOffice = false

  constructor() { }

  ngOnInit(): void {
  }

  onTeamCardOffice() {
    this.teamCardOffice = true
    this.actionOffice = false
  }

  onActionOffice() {
    this.teamCardOffice = false
    this.actionOffice = true
  }

}
