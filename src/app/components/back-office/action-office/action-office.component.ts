import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
	selector: 'app-action-office',
	templateUrl: './action-office.component.html',
	styleUrls: ['./action-office.component.scss']
})
export class ActionOfficeComponent implements OnInit {

	actionForm!: FormGroup
	actionCardFile!: File
	sliderActionFiles!: FileList

	// For image preview
	cardUrl = "../../../../assets/backOffice/Skate-Player-Motivation-salle-de-sport-Stickers-muraux-pour-chambre-d-adolescents-Design-individuel-3d-affiche.jpg"
	sliderUrl = ["../../../../assets/backOffice/Skate-Player-Motivation-salle-de-sport-Stickers-muraux-pour-chambre-d-adolescents-Design-individuel-3d-affiche.jpg"]

	// For card action preview
	title = "Titre"
	date: any = new Date()
	description = "description"


	constructor(private formBuilder: FormBuilder, private actionsService: ActionsService) { }

	ngOnInit(): void {
		this.initActionForm()
		this.actionsService.getActions().then(

		)
	}

	initActionForm() {
		this.actionForm = this.formBuilder.group({
			title: ['', [Validators.required]],
			date: [Date, [Validators.required]],
			imageCard: ['', [Validators.required]],
			description: ['', [Validators.required]],
			imageSlider: ['', [Validators.required]],
			textEvent: ['', [Validators.required]],
			urlYoutube: [''],
		})
	}

	onSubmitActionForm() {
		const bodyPost = {
			title: this.actionForm.get('title')!.value,
			date: this.actionForm.get('date')!.value,
			description: this.actionForm.get('description')!.value,
			textEvent: this.actionForm.get('textEvent')!.value,
			urlYoutube: this.actionForm.get('urlYoutube')!.value,
			userId: sessionStorage.getItem('userId')
		}

		const formData = new FormData()
		formData.append('data', JSON.stringify(bodyPost))
		formData.append('imageCard', this.actionCardFile)
		for (const file of this.sliderActionFiles) {
			formData.append('imageSlider', file)
		}

		this.actionsService.saveAction(formData).then(res => {
		console.log('res is :', res)
		})	
	}

	onImageCardSelected(event: Event) {
		this.actionCardFile = (event.target as HTMLInputElement).files![0]

		// Preview
		const reader = new FileReader()
		reader.readAsDataURL((event.target as HTMLInputElement).files![0])
		reader.onload = (e: any) => {
			this.cardUrl = e.target.result
		}
	}

	onSliderFileSelected(event: Event) {
		this.sliderActionFiles = (event.target as HTMLInputElement).files!

		// Preview
		this.sliderUrl = []
		for (let i = 0; i < this.sliderActionFiles!.length; i++) {
			const reader = new FileReader()
			reader.readAsDataURL((event.target as HTMLInputElement).files![i])
			reader.onload = (e: any) => {
				this.sliderUrl.push(e.target.result)
			}
		}
	}

	previewCardAction(event: Event, input: string) {
		if (input == "title") this.title = (event.target as HTMLInputElement).value
		else if (input == "date") this.date = (event.target as HTMLInputElement).value
		else if (input == "description") this.description = (event.target as HTMLInputElement).value
	}


	callBackActionDeleted() {
		this.ngOnInit()
	}
}
