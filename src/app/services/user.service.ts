import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAuth: boolean = false
  serverNode:string = "http://localhost:3000"
  constructor(private http: HttpClient, private router: Router) { }

  //TODO isAuth subject when method will be implemented

  signInUser(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
      this.http.post(`${this.serverNode}/api/auth/login`, JSON.stringify({ email, password }), { 'headers': headers }).subscribe(
        (res: any) => {
          console.log(res);
          console.log('REQUEST SEND');
          
          sessionStorage.setItem('token', res.token)
          sessionStorage.setItem('userId', res.userId)
          this.isAuth = true
          // this.emitAuthSubject()
          this.router.navigate([''])
          resolve(res)
        },
        (error) => {
          reject(error)
        }
      )
    }
    )
  }

  createNewUser(lastName: string, firstName: string, address: string, city: string, email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
      console.log('TEST');
      
      this.http.post(`${this.serverNode}/api/auth/signup`, JSON.stringify({ lastName, firstName, address, city, email, password }), { 'headers': headers }).subscribe(
        (res: any) => {
          console.log(res);
          alert('Votre compte à bien été créer !');
          resolve(res)
        },
        (error) => {
          reject(error)
        }
      )
    }
    )
  }
}
