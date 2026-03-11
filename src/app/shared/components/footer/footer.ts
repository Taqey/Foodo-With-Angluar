import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Logo } from "../logo/logo";
@Component({
  selector: 'app-footer',
  imports: [NgIf, Logo],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
constructor(public router:Router){}
}
