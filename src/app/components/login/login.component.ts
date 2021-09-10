import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm!: FormGroup;

	constructor(private formBuilder: FormBuilder, private userService: UserService) { }

	ngOnInit(): void {
		this.initLoginForm();
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
		//TODO post request with user Service Add to this service a subject to keep traking when the user is co or not
	}
}
