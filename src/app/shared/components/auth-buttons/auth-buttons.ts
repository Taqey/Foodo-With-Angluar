import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-buttons',
  imports: [],
  templateUrl: './auth-buttons.html',
  styleUrl: './auth-buttons.css',
})


export class AuthButtons {
  constructor(private router: Router) {}

  goToRegister(){
  this.router.navigate(['/register']);
  }
  goToLogin(){
    this.router.navigate(['login'])
  }
}
