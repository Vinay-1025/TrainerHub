import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-howitworks',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './howitworks.component.html',
  styleUrl: './howitworks.component.css'
})
export class HowitworksComponent {
  @Input('how-left') leftImg: string="";
  @Input('how-right-title') howTitle: string="";
  @Input('how-right-desc') howDesc: string="";

}