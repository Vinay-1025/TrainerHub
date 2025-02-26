import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aboutimagecard',
  standalone: true,
  imports: [],
  templateUrl: './aboutimagecard.component.html',
  styleUrl: './aboutimagecard.component.css'
})
export class AboutimagecardComponent {
  @Input('image1') Image1:string="";
  @Input('image-title') imageTitle:string="";
}
