import { Component } from '@angular/core';
import { AuthButtons } from "../auth-buttons/auth-buttons";
import { NgIf } from '@angular/common';
import { ProfileButton } from "../profile-button/profile-button";
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [AuthButtons, NgIf, ProfileButton],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public router: Router) {}

  isLoggedIn : boolean=false;
  login(){
    this.isLoggedIn=true;
  }
  logout(){
    this.isLoggedIn=false;
  }
}
