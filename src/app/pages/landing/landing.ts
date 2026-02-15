import { Component } from '@angular/core';
import { Navbar } from "../../shared/components/navbar/navbar";
import { Logo } from "../../shared/components/logo/logo";
import { Footer } from "../../shared/components/footer/footer";
import { LandingLayout } from '../../layouts/landing-layout/landing-layout';

@Component({
  selector: 'app-landing',
  imports: [Navbar, Logo, Footer,LandingLayout],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

}
