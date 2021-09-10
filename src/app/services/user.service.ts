import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAuth: boolean = false

  constructor(private http: HttpClient, private router: Router) { }

  //TODO isAuth subject when method will be implemented

  signInUser(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
      this.http.post('http://localhost:3000/api/auth/login', JSON.stringify({ email, password }), { 'headers': headers }).subscribe(
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
}
