import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dashboard-nav',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.css'
})
export class DashboardNavComponent {
  
  router = inject(Router);

  handleLogout() {
    this.router.navigateByUrl('/');
  }

  onHandleDashboard() {
    this.router.navigateByUrl('dashboard');
  }

  onHandleProgess() {
    this.router.navigateByUrl('progessTracking');
  }

  onHandleBooking() {
    this.router.navigateByUrl('booking');
  }

  onHandleProfile() {
    this.router.navigateByUrl('profile');
  }

  isActive(route: string): boolean {
    return this.router.url === `/${route}`;
  }
}
