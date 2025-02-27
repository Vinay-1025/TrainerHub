import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
 
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-progress-stat',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './progress-stat.component.html',
  styleUrl: './progress-stat.component.css'
})
export class ProgressStatComponent {
  chartOptions = {
	  animationEnabled: true,
	  title:{
		text: "Weekly Report"
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 28, name: "Meditation" },
		  { y: 10, name: "Exercise" },
		  { y: 20, name: "Gym" },
		]
	  }]
	}
}
