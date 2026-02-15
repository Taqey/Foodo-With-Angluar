import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Logo } from "../../shared/components/logo/logo";
import { Navbar } from "../../shared/components/navbar/navbar";
import { Footer } from "../../shared/components/footer/footer";

@Component({
  selector: 'app-landing-layout',
  imports: [RouterModule, Logo, Navbar, Footer],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.css',
})
export class LandingLayout {

}
