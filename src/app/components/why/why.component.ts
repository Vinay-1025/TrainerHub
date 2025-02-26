import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-why',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './why.component.html',
  styleUrl: './why.component.css'
})
export class WhyComponent {
  @Input('why-title') whyTitle: string="";
  @Input('why-subtitle') whySubtitle: string='';
  @Input('why-desc') whyDesc:string="";
  @Input('why-image') whyImage:string="";
}
