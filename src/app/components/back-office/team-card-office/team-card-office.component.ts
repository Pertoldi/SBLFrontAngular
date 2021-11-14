import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
	selector: 'app-team-card-office',
	templateUrl: './team-card-office.component.html',
	styleUrls: ['./team-card-office.component.scss']
})
export class TeamCardOfficeComponent implements OnInit {

	@ViewChild('feedback') feedback!: ElementRef

	teamCardForm!: FormGroup
	teamCardFile!: File
	teamCard: any

	url = "../../../../assets/backOffice/default-profile-pic-e1513291410505.jpg"

	constructor(private formBuilder: FormBuilder, private teamService: TeamService) { }

	ngOnInit(): void {
		this.initTeamCardForm()
		this.teamService.getTeamCard().then(async (serverTeamCard) => {
			this.teamCard = serverTeamCard
		})
	}


	initTeamCardForm() {
		this.teamCardForm = this.formBuilder.group({
			title: ['', [Validators.required]],
			prenom: ['', [Validators.required]],
			nom: ['', [Validators.required]],
			image: ['', [Validators.required]],
			description: [''],
		})
	}

	async onSubmitTeamCardForm() {
		const bodyPost = {
			title: this.teamCardForm.get('title')!.value,
			nom: this.teamCardForm.get('nom')!.value,
			prenom: this.teamCardForm.get('prenom')!.value,
			presentationText: this.teamCardForm.get('description')!.value
		}

		const formData = new FormData()
		formData.append('data', JSON.stringify(bodyPost))
		formData.append('image', this.teamCardFile)

		await this.teamService.saveTeamCard(formData).then(res => {
			console.log(res)
			this.ngOnInit()
		}).catch((error) => {
			console.error('error is :', error)
			this.feedback.nativeElement.innerText = `Error: ${error.status} => ${error.statusText}`
		})
	}

	onFileSelected(event: Event) {
		this.teamCardFile = (event.target as HTMLInputElement).files![0] //To send it on the post request after submit

		// To show the preview
		const reader = new FileReader()
		reader.readAsDataURL((event.target as HTMLInputElement).files![0])
		reader.onload = (e: any) => {
			this.url = e.target.result
		}

	}

	callBackTeamCardDeleted() {
		this.ngOnInit()
	}
}
