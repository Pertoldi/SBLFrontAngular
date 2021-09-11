import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAuth: boolean = false
  isAuthSubject = new Subject<boolean>()
  serverNode: string = "http://localhost:3000"

  constructor(private http: HttpClient, private router: Router) {
    this.initIsAuthSubject()
  }


  async initIsAuthSubject() {
    this.isAuth = await this.isConnect()
    this.emitAuthSubject()
  }

  emitAuthSubject() {
    this.isAuthSubject.next(this.isAuth)
  }

  setIsAuthToFalse(bol:boolean) {
    this.isAuth = false
    this.emitAuthSubject()
  }

  isConnect(): boolean | Promise<boolean> {
    let token = sessionStorage.getItem('token')
    let userId = sessionStorage.getItem('userId')
    if (token == null || userId == null) {
      this.isAuth = false
      this.emitAuthSubject()
      return false
    }

    return new Promise<boolean>(
      (resolve, reject) => {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Accept', 'application/json').set('Content-Type', 'application/json')
        this.http.post('http://localhost:3000/api/auth/isConnect', JSON.stringify({ token, userId }), { 'headers': headers }).subscribe(
          (res) => {
            this.isAuth = true
            this.emitAuthSubject()
            resolve(true)
          },
          (error) => {
            this.isAuth = false
            this.emitAuthSubject()
            reject(false)
          }
        )
      }
    )
  }

  signInUser(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
      this.http.post(`${this.serverNode}/api/auth/login`, JSON.stringify({ email, password }), { 'headers': headers }).subscribe(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('token', res.token)
          sessionStorage.setItem('userId', res.userId)
          this.isAuth = true
          this.emitAuthSubject()
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
