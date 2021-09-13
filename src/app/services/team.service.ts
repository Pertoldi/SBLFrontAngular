import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  serverNode: string = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getTeamCard() {
    return new Promise<any>(
      (resolve, reject) => {
        this.http.get(`${this.serverNode}/api/teamcard/`).subscribe(
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
