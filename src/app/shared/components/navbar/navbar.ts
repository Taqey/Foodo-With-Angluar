import { Component, Input, OnInit } from '@angular/core';
import { AuthButtons } from '../auth-buttons/auth-buttons';
import { NgIf } from '@angular/common';
import { ProfileButton } from '../profile-button/profile-button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LandingPageLinks } from '../../../features/landing/components/landing-page-links';

@Component({
  selector: 'app-navbar',
  imports: [AuthButtons, NgIf, ProfileButton, RouterLink, RouterLinkActive, LandingPageLinks],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  ngOnInit(): void {
    if (sessionStorage.getItem('token') != null || localStorage.getItem('token') != null) {
      this.isLoggedIn = true;
    }
  }
  // constructor(public router: Router) {}

  isLoggedIn: boolean = false;
  @Input() isLandingPage: boolean = true;
  logout() {
        sessionStorage.removeItem('token');
    localStorage.removeItem('token');

    this.isLoggedIn = false;
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
