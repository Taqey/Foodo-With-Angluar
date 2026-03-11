import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile-button',
  imports: [],
  templateUrl: './profile-button.html',
  styleUrl: './profile-button.css',
})
export class ProfileButton {
  @Output() logoutClicked = new EventEmitter<void>();
    logout() {
    this.logoutClicked.emit(); 
  }

}
