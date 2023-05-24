import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAuth: boolean = false
  isAdmin: boolean = false
  isAuthSubject = new Subject<boolean>()
  isAdminSubject = new Subject<boolean>()
  serverNode: string = "https://sblbackend.onrender.com"

  constructor(private http: HttpClient, private router: Router) {
    this.initIsAuthSubject()
    this.initIsAdminSubject()
  }


  async initIsAuthSubject() {
    this.isAuth = await this.isConnect()
    this.emitAuthSubject()
  }

  async initIsAdminSubject() {
    this.isAdmin = await this.isConnectAsAdmin()
    this.emitAdminSubject()
  }

  emitAuthSubject() {
    this.isAuthSubject.next(this.isAuth)
  }

  emitAdminSubject() {
    this.isAdminSubject.next(this.isAdmin)
  }

  setIsAuthToFalse(bol: boolean) {
    this.isAuth = false
    this.emitAuthSubject()
  }

  setIsAdminToFalse(bol: boolean) {
    this.isAdmin = false
    this.emitAdminSubject()
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
      (resolve, reject) => {//TODO test sans le header pour voir si ca fonctionne(normalement oui)
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Accept', 'application/json').set('Content-Type', 'application/json')
        this.http.post(`${this.serverNode}/api/auth/isConnect`, JSON.stringify({ token, userId }), { 'headers': headers }).subscribe(
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

  isConnectAsAdmin(): boolean | Promise<boolean> {
    // return false
    let token = sessionStorage.getItem('token')
    let userId = sessionStorage.getItem('userId')
    if (token == null || userId == null) {
      this.isAuth = false
      this.emitAdminSubject()
      return false
    }
    return new Promise<boolean>((resolve, reject) => {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Accept', 'application/json').set('Content-Type', 'application/json')
      this.http.post(`${this.serverNode}/api/auth/isAdmin`, JSON.stringify({ token, userId }), { 'headers': headers }).subscribe(
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

    })
    // TODO
  }

  signInUser(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
      this.http.post(`${this.serverNode}/api/auth/login`, JSON.stringify({ email, password }), { 'headers': headers }).subscribe(
        (res: any) => {
          sessionStorage.setItem('token', res.token)
          sessionStorage.setItem('userId', res.userId)
          this.isAuth = true
          this.emitAuthSubject()
          this.initIsAdminSubject()
          this.router.navigate([''])
          resolve(res)
        },
        (error) => {
          reject(error)
        }
      )
    })
  }

  createNewUser(lastName: string, firstName: string, address: string, city: string, email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')

      this.http.post(`${this.serverNode}/api/auth/signup`, JSON.stringify({ lastName, firstName, address, city, email, password }), { 'headers': headers }).subscribe(
        (res: any) => {
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
