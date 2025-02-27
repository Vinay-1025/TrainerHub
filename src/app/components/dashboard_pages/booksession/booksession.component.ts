import { Component } from '@angular/core';
import { DashboardNavComponent } from "../dashboard-nav/dashboard-nav.component";
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../button/button.component";

@Component({
  selector: 'app-booksession',
  standalone: true,
  imports: [DashboardNavComponent, NgFor, NgIf, MatIconModule, FormsModule, ButtonComponent],
  templateUrl: './booksession.component.html',
  styleUrl: './booksession.component.css'
})
export class BooksessionComponent {
  filterText: string = "";

  bookings = [
    { date: "2025-03-01", type: "Meditation", trainername: "Amit Sharma", mode: "Online", joinlink: "https://zoom.us/amitsharma" },
    { date: "2025-03-02", type: "Exercise", trainername: "Priya Kapoor", mode: "Offline", joinlink: "" },
    { date: "2025-03-03", type: "Gym", trainername: "Rahul Verma", mode: "Online", joinlink: "https://meet.google.com/rahul-gym" },
    { date: "2025-03-04", type: "Meditation", trainername: "Sneha Joshi", mode: "Online", joinlink: "https://zoom.us/snehajoshi" },
    { date: "2025-03-05", type: "Exercise", trainername: "Arjun Patel", mode: "Offline", joinlink: "" },
    { date: "2025-03-06", type: "Gym", trainername: "Rohit Mehta", mode: "Online", joinlink: "https://teams.microsoft.com/rohitmehta" },
    { date: "2025-03-07", type: "Meditation", trainername: "Neha Malhotra", mode: "Offline", joinlink: "" },
    { date: "2025-03-08", type: "Exercise", trainername: "Vikram Singh", mode: "Online", joinlink: "https://meet.google.com/vikramsingh" },
    { date: "2025-03-09", type: "Gym", trainername: "Kiran Rao", mode: "Offline", joinlink: "" },
    { date: "2025-03-10", type: "Meditation", trainername: "Sunil Gupta", mode: "Online", joinlink: "https://zoom.us/sunilgupta" },
    { date: "2025-03-11", type: "Exercise", trainername: "Pooja Desai", mode: "Offline", joinlink: "" },
    { date: "2025-03-12", type: "Gym", trainername: "Sandeep Nair", mode: "Online", joinlink: "https://teams.microsoft.com/sandeepnair" },
    { date: "2025-03-13", type: "Meditation", trainername: "Ritika Sharma", mode: "Online", joinlink: "https://meet.google.com/ritikasharma" },
    { date: "2025-03-14", type: "Exercise", trainername: "Deepak Chauhan", mode: "Offline", joinlink: "" },
    { date: "2025-03-15", type: "Gym", trainername: "Manoj Kumar", mode: "Online", joinlink: "https://zoom.us/manojkumar" },
  ];

  get filteredBookings() {
    return this.bookings.filter(booking =>
      booking.trainername.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
