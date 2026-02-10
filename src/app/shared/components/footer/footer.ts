import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-footer',
  imports: [NgIf],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
constructor(public router:Router){}
}
