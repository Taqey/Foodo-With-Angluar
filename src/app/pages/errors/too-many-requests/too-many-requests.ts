import { Component } from '@angular/core';

@Component({
  selector: 'app-too-many-requests',
  imports: [],
  templateUrl: './too-many-requests.html',
  styleUrl: './too-many-requests.css',
})
export class TooManyRequests {
reload() {
  window.location.reload();
}
}
