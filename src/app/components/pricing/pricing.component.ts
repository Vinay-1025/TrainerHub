import { Component, Input } from '@angular/core';
import { PricingcardComponent } from "../pricingcard/pricingcard.component";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [PricingcardComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  @Input('pricing-title') pricingTitle: string=""; 
  @Input('pricing-desc') pricingDesc: string="";

  pricingplan: boolean = true;
  pricingvalue: string = "Month";

  onPricingPlanClick() {
    this.pricingplan = !this.pricingplan;
  }

}
