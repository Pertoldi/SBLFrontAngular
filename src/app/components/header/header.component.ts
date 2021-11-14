import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean = false
  isAdmin: boolean = false
  isAuthSubscription!: Subscription
  isAdminSubscription!: Subscription

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isAuthSubscription = this.userService.isAuthSubject.subscribe(
      (isAuth: boolean) => {
        this.isAuth = isAuth
      }, (error) => {
        throw error
      }
    )

    this.isAdminSubscription = this.userService.isAdminSubject.subscribe(
      (isAdmin: boolean) => {
        this.isAdmin = isAdmin
      }, (error) => {
        throw error
      }
    )
  }

  onDisconnect() {
    this.userService.setIsAuthToFalse(false)
    this.userService.setIsAdminToFalse(false)
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userId')
    alert('Vous êtes déconnecté !')
  }

}
