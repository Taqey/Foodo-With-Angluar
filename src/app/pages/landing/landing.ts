import { Component } from '@angular/core';
import { Navbar } from "../../shared/components/navbar/navbar";
import { Logo } from "../../shared/components/logo/logo";
import { LandingLayout } from "../landing-layout/landing-layout";
import { Footer } from "../../shared/components/footer/footer";

@Component({
  selector: 'app-landing',
  imports: [Navbar, Logo, LandingLayout, Footer],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

}
