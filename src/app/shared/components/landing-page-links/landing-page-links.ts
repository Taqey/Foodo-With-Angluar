import { Component,Input,Output,EventEmitter } from '@angular/core';
import { AuthButtons } from '../auth-buttons/auth-buttons';
import { ProfileButton } from '../profile-button/profile-button';
import { NgIf } from '@angular/common';

import {  Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-landing-page-links',
  imports: [AuthButtons, ProfileButton,RouterLink,RouterLinkActive,NgIf],
  templateUrl: './landing-page-links.html',
  styleUrl: './landing-page-links.css',
})
export class LandingPageLinks {
@Input() isLandingPage: boolean = false;
@Input() isLoggedIn: boolean = false;
@Output() toggleMenu = new EventEmitter<void>();
}
