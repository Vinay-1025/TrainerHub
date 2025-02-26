import { Component } from '@angular/core';
import { DashboardNavComponent } from "../dashboard-nav/dashboard-nav.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [DashboardNavComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
