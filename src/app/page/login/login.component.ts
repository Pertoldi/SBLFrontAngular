import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm!: FormGroup
	signinForm!: FormGroup

	constructor(private formBuilder: FormBuilder, private userService: UserService) { }

	ngOnInit(): void {
		this.initLoginForm()
		this.initSigninForm()
	}

	initLoginForm() {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]]
		})
	}

	onSubmitLoginForm() {
		const email = this.loginForm.get('email')!.value
		const password = this.loginForm.get('password')!.value

		console.log(this.loginForm);
		this.userService.signInUser(email, password)
	}

	initSigninForm() {
		this.signinForm = this.formBuilder.group({
			firstName: ['', [Validators.required]],
			lastName: ['', [Validators.required]],
			address: ['', [Validators.required]],
			city: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]],
			passwordConfirmation: ['', [Validators.required]]
		})
	}

	onSubmitSigninForm() {
		const password = this.signinForm.get('password')!.value
		const passwordConfirmation = this.signinForm.get('passwordConfirmation')!.value
		if (password != passwordConfirmation) {
			console.log('PWD NOT VALID!');
			//TODO make an alert or a *ngIf -> is better

		} else {
			const lastName = this.signinForm.get('lastName')!.value
			const firstName = this.signinForm.get('firstName')!.value
			const address = this.signinForm.get('address')!.value
			const city = this.signinForm.get('city')!.value
			const email = this.signinForm.get('email')!.value
			this.userService.createNewUser(lastName, firstName, address, city, email, password)
		}
	}
}
