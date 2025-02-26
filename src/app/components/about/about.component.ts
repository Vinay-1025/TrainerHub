import { Component, Input } from '@angular/core';
import { AboutimagecardComponent } from "../aboutimagecard/aboutimagecard.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutimagecardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Input('desc-title') descTitle:string="";
  @Input('desc-desc') descDesc:string="";
  @Input('about-title') aboutFeature:string="";
  @Input('about-desc') aboutDesc:string="";
  @Input('feature1') Feature1: string="";
  @Input('feature2') Feature2: string="";
  @Input('feature3') Feature3: string="";
  @Input('feature4') Feature4: string="";
}