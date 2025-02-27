import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  chartOptions = {
		animationEnabled: true,  
		title:{
			text: "Workout"
		},
		axisX: {
			title: "Day"
		},
		axisY: { 
			title: "Hours"                   
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor:"pointer",
			itemclick: function(e: any) {
			  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
				  e.dataSeries.visible = false;
			  } else {
				  e.dataSeries.visible = true;
			  }
			  e.chart.render();
			}
		},
		data: [{        
			type: "spline",
			showInLegend: true,
			name: "Meditation",
			dataPoints: [
        { label: "Sun", y: 8.45 },     
        { label: "Mon", y: 5.23 },     
        { label: "Tue", y: 6.78 },     
        { label: "Wed", y: 3.56 },     
        { label: "Thu", y: 9.12 },     
        { label: "Fri", y: 4.39 },     
        { label: "Sat", y: 7.64 }  
      ]
		}, {        
			type: "spline",
			showInLegend: true,
			name: " Exercise",
			dataPoints: [
        { label: "Sun", y: 6.32 },     
        { label: "Mon", y: 4.18 },     
        { label: "Tue", y: 5.76 },     
        { label: "Wed", y: 3.45 },     
        { label: "Thu", y: 7.21 },     
        { label: "Fri", y: 2.67 },     
        { label: "Sat", y: 6.89 }  
      ]
		}, {        
			type: "spline",
			showInLegend: true,
			name: "Gym",
			dataPoints: [
        { label: "Sun", y: 4.75 },     
        { label: "Mon", y: 2.89 },     
        { label: "Tue", y: 5.43 },     
        { label: "Wed", y: 3.91 },     
        { label: "Thu", y: 6.72 },     
        { label: "Fri", y: 2.14 },     
        { label: "Sat", y: 7.88 }  
      ]
		}]
	}

}
