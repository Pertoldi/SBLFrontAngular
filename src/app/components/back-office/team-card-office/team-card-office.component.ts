import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
	selector: 'app-team-card-office',
	templateUrl: './team-card-office.component.html',
	styleUrls: ['./team-card-office.component.scss']
})
export class TeamCardOfficeComponent implements OnInit {

	teamCardForm!: FormGroup
	teamCardFile!: File

	constructor(private formBuilder: FormBuilder, private teamService: TeamService) { }

	ngOnInit(): void {
		this.initTeamCardForm()
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

	onSubmitTeamCardForm() {
		const bodyPost = {
			title: this.teamCardForm.get('title')!.value,
			nom: this.teamCardForm.get('nom')!.value,
			prenom: this.teamCardForm.get('prenom')!.value,
			presentationText: this.teamCardForm.get('description')!.value
		}

		const formData = new FormData()
		formData.append('data', JSON.stringify(bodyPost))
		formData.append('image', this.teamCardFile)

		this.teamService.saveTeamCard(formData).then(res => {
			console.log(res)
		})
	}

	onFileSelected(event: Event) {
		this.teamCardFile = (event.target as HTMLInputElement).files![0]
	}

}
