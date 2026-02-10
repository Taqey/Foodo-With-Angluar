import { Component } from '@angular/core';
import { Sidebar } from "../../shared/components/sidebar/sidebar";
import { Navbar } from "../../shared/components/navbar/navbar";
import { RouterOutlet } from '@angular/router';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-layout',
  imports: [Sidebar, Navbar, RouterOutlet],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {
    constructor(public router: Router) {}

}
