import { Component } from '@angular/core';
import { Logo } from "../logo/logo";
import { RouterLink } from "@angular/router";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [Logo, RouterLink,RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

}
