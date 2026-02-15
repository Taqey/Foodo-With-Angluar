import { Component,Input } from '@angular/core';
import { AuthButtons } from "../auth-buttons/auth-buttons";
import { NgIf } from '@angular/common';
import { ProfileButton } from "../profile-button/profile-button";
import {  RouterLink, RouterLinkActive } from '@angular/router';
import { LandingPageLinks } from '../landing-page-links/landing-page-links';

@Component({
  selector: 'app-navbar',
  imports: [AuthButtons, NgIf, ProfileButton, RouterLink, RouterLinkActive, LandingPageLinks],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  // constructor(public router: Router) {}

  isLoggedIn : boolean=false;
  @Input() isLandingPage:boolean=true;
  login(){
    this.isLoggedIn=true;
  }
  logout(){
    this.isLoggedIn=false;
  }
isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

closeMenu() {
  this.isMenuOpen = false;
}

}
