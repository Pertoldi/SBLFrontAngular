import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  serverNode: string = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getActions() {
    return new Promise<any>(
      (resolve, reject) => {
        this.http.get(`${this.serverNode}/api/event/`).subscribe(
          (res) => {
            resolve(res)
          },
          (error) => {
            reject(error)
          }
        )
      }
    )
  }

  getOneAction(id: string) {
    return new Promise<any>(
      (resolve, reject) => {
        this.http.get(`${this.serverNode}/api/event/${id}`).subscribe(
          (res) => {
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
