import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  @Input('hero-title') heroTitle: string="";
  @Input('hero-subtitle') heroSubtitle: string="";
  @Input('hero-overview') overviewHeroTitle: string="";
  @Input('hero-image') heroImage: string="";

}
