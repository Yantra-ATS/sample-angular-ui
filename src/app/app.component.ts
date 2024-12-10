import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Highcharts = Highcharts;  // Declare the Highcharts property
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'scatter',  // Specify the chart type as scatter
    },
    title: {
      text: 'Project Issues Over Time',
    },
    xAxis: {
      title: { text: 'Age in Days' },
      min: 1,
      max: 100,
      tickInterval: 10,  // Adjust tickInterval as needed
    },
    yAxis: {
      title: { text: 'Projects' },
      categories: ['Project 1', 'Project 2', 'Project 3'], // Projects as categories on y-axis
      reversed: false, // Projects are displayed from top to bottom
      min: 0, // Set minimum to 0
      max: 2, // Number of projects - adjust according to the number of projects
      tickInterval: 1, // Adjust interval if needed
    },
    series: [
      {
        name: 'Project Issues',
        type: 'scatter', // Ensure the series is of type scatter
        connectNulls: true, // Connect points even if there are null values
        data: [
          [1, 0, '#32e716', 3],  // Project 'Project 1' (index 0) has 3 issues at age 1
          [15, 0, '#32e716', 7], // Project 'Project 1' (index 0) has 7 issues at age 15
          [25, 0, '#ff0000', 10], // Project 'Project 1' (index 0) has 10 issues at age 25
          [10, 1, '#32e716', 5],  // Project 'Project 2' (index 1) has 5 issues at age 10
          [20, 1, '#32e716', 8],  // Project 'Project 2' (index 1) has 8 issues at age 20
          [30, 1, '#ff0000', 12], // Project 'Project 2' (index 1) has 12 issues at age 30
          [12, 2, '#32e716', 4],  // Project 'Project 3' (index 2) has 4 issues at age 12
          [18, 2, '#32e716', 6],  // Project 'Project 3' (index 2) has 6 issues at age 18
          [22, 2, '#ff0000', 9]   // Project 'Project 3' (index 2) has 9 issues at age 22
        ].map(([x, y, color, issues]) => ({
          x,
          y: Number(y),  // Ensure y is treated as a number
          marker: {
            radius: 5,  // Size of the dots
            symbol: 'circle',  // Marker style
            fillColor: color as string, // Ensure fillColor is a valid string
          },
        })),
        lineWidth: 2, // Set line width to connect the dots
        dashStyle: 'Dash',  // Connect dots with a dashed line
      }
    ],
    tooltip: {
      shared: true,
      pointFormat: 'Project: {point.y}<br>Age: {point.x} days<br>Issues: {point.marker.fillColor}',
    },
    credits: {
      enabled: false,
    },
  };
}
