import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ActionsService {
	serverNode: string = "https://sblbackend.onrender.com"
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

	saveAction(body: FormData) {
		return new Promise<any>((resolve, reject) => {
			const token = sessionStorage.getItem('token')

			const httpOptions = {
				headers: new HttpHeaders({
					'Authorization': `Bearer ${token}`
				})
			}

			this.http.post(`${this.serverNode}/api/event/`, body, httpOptions).subscribe(
				res => {
					resolve(res)
				},
				error => {
					reject(error)
				}
			)
		})
	}

	deleteAction(id: String) {
		return new Promise<any>((resolve, reject) => {
			const token = sessionStorage.getItem('token')

			const httpOptions = {
				headers: new HttpHeaders({
					'Authorization': `Bearer ${token}`
				})
			}

			this.http.delete(`${this.serverNode}/api/event/${id}`, httpOptions).subscribe(
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
