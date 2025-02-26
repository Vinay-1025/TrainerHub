import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, DashboardComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
