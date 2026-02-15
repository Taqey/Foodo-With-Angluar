import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // لازم


@Component({
  selector: 'app-dashboard-header',
  imports: [CommonModule],
  templateUrl: './dashboard-header.html',
  styleUrl: './dashboard-header.css',
})
export class DashboardHeader {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() showAddButton: boolean = false;
  @Input() AddButtonText: string = '';
  @Input() exportText: string = 'Export';
  @Input() exportIcon: string = 'download';
}
