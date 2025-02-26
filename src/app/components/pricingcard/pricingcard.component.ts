import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-pricingcard',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './pricingcard.component.html',
  styleUrl: './pricingcard.component.css'
})
export class PricingcardComponent {
  @Input('card-title') cardTitle: string ="";
  @Input('card-desc') cardDesc:string="";
  @Input('card-price') cardPrice:string="";
  @Input('type') Type:string='';
}
