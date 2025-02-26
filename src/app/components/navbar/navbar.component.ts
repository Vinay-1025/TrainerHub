import { Component, inject, Input } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ButtonComponent } from "../button/button.component";
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AboutComponent, ButtonComponent, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input('comp-title') Title: string = "";
  @Input('comp-icon') compIcon: string="";
  @Input('link1') Link1: string = "";
  @Input('link2') Link2: string = "";
  @Input('link3') Link3: string = "";
  @Input('link4') Link4: string = "";
  @Input('find') Find: string="";


  router = inject(Router);

  onLoginClick() {
    console.log("Login Button Clicked")
    this.router.navigateByUrl('login')
  }
}
