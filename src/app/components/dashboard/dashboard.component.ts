import { Component } from '@angular/core';
import { DashboardNavComponent } from "../dashboard_pages/dashboard-nav/dashboard-nav.component";
import { DashboardLayoutComponent } from "../dashboard_pages/dashboard-layout/dashboard-layout.component";
import { BooksessionComponent } from "../dashboard_pages/booksession/booksession.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardNavComponent, DashboardLayoutComponent, BooksessionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
