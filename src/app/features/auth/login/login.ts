import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Logo } from "../../../shared/components/logo/logo";

@Component({
  selector: 'app-login',
  imports: [RouterLink, Logo],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
