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

	// To display the caroussel of actions
	actions: any
	blocActions: Array<any> = []; //This variable is use to store 3 actions(les anciens evenment) pour les afficher 3 par 3 dans le caroussel

	constructor(private formBuilder: FormBuilder, private actionsService: ActionsService) { }

	ngOnInit(): void {
		this.initActionForm()
		this.initActionSlider()
	}

	initActionSlider() {
		console.log("INIT du caroussel");
		this.blocActions = []
		this.actionsService.getActions().then((serverActions) => {
			this.actions = serverActions
	
			// this loop initialize blocActions
			for (let i = 0; i < Math.floor(this.actions.length / 3) + 1; i++) {
			  this.blocActions.push([])
			}
	
			for (let i = 0; i < this.actions.length; i++) {
			  let indexBlocActions = Math.floor(i / 3)//Divide by 3 because we want 3 item by caroussel view
			  this.blocActions[indexBlocActions].push(this.actions[i])
			}
		 })
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
			this.initActionSlider() 
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

	isActive(i: number) {
		if (i === 0) {
			return 'active'
		}
		else {
			return ''
		}
	}

	callBackActionDeleted() {
		console.log('CALLBACK btn suppr');
		
		this.initActionSlider()//Pour ne plus montrer l' action  qui a été delete
	}
}
