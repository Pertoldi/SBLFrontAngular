import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TeamService {
	serverNode: string = "https://sblbackend.onrender.com"
	constructor(private http: HttpClient) { }

	/**
	 * @returns all teams cards
	 */
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

	saveTeamCard(body: FormData) {
		return new Promise<any>(
			(resolve, reject) => {
				const token = sessionStorage.getItem('token')

				const httpOptions = {
					headers: new HttpHeaders({
						'Authorization': `Bearer ${token}`
					})
				}

				this.http.post(`${this.serverNode}/api/teamcard/`, body, httpOptions).subscribe(
					res => {
						resolve(res)
					},
					error => {
						reject(error)
					}
				)
			}
		)
	}

	deleteTeamCard(id: string) {
		return new Promise<any>(
			(resolve, reject) => {
				const token = sessionStorage.getItem('token')

				const httpOptions = {
					headers: new HttpHeaders({
						'Authorization': `Bearer ${token}`
					})
				}

				this.http.delete(`${this.serverNode}/api/teamcard/${id}`, httpOptions).subscribe(
					res => {
						resolve(res)
					},
					error => {
						reject(error)
					}
				)
			})
	}

}
