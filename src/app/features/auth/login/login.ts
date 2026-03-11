import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { Router, RouterLink } from '@angular/router';
import { Logo } from '../../../shared/components/logo/logo';
import { AuthenticationService } from '../../../core/services/AuthenticationService/authentication-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _AuthenticationService: AuthenticationService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])[^\s]{8,16}$/),
        ],
      ],
      remember: [false],
    });
  }
  errorMessage = signal<string | null>(null);
  login() {
    if (this.loginForm.invalid) return;

    const { email, password, remember } = this.loginForm.value;

    this._AuthenticationService.login(email, password).subscribe({
      next: (res) => {
        console.log('Server response:', res);

        const token = res?.data?.token;

        if (!token) {
          this.errorMessage.set(res.message);
          return;
        }

        this._AuthenticationService.setToken(token, remember);

        this.errorMessage.set(null);
        this._AuthenticationService.getUserRole() === 'Customer'
          ? this.router.navigate(['/'])
          : this.router.navigate(['/merchant-dashboard']);
      },
      error: (err) => {
        const serverMessage = err?.error?.message;

        if (serverMessage) {
          this.errorMessage.set(serverMessage);
          return;
        }

        // switch (err.status) {
        //   case 400:
        //     this.errorMessage.set('Invalid request data.');
        //     break;

        //   case 429:
        //     this.errorMessage.set('Too many requests. Please try again later.');
        //     break;

        //   case 500:
        //     this.errorMessage.set('Server error, please try again later.');
        //     break;

        //   default:
        //     this.errorMessage.set('Something went wrong.');
        // }
      },
    });
  }

  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
