import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { HowitworksComponent } from "../howitworks/howitworks.component";
import { WhyComponent } from "../why/why.component";
import { PricingComponent } from "../pricing/pricing.component";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent, HowitworksComponent, WhyComponent, PricingComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
