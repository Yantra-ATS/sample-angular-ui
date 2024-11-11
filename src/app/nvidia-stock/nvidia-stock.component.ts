// Import necessary modules
import { Component } from '@angular/core';
import {ExcelService} from '../services/excel.service';


@Component({
  selector: 'app-nvidia-stock',
  templateUrl: './nvidia-stock.component.html',
  styleUrls: ['./nvidia-stock.component.css'],
  providers: [ExcelService] // Also provide any services if needed
})
export class NvidiaStockComponent {
  chartOptions: any;
  chartData:any;

  constructor(private excelService: ExcelService) {}

  async onFileChange(event: any) {
    const file = event.target.files[0];
    const excelData = await this.excelService.readExcelData(file);

    // Process data for chart
    const labels = excelData[0].slice(1); // Skip the first item
    const datasets = excelData.slice(1).map(row => ({
      label: row[0],
      data: row.slice(1),
      fill: false,
      borderColor: this.getRandomColor(),
      tension: 0.4
    }));

    this.chartData = {
      labels,
      datasets
    };

    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'right'
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Days Relative to Earnings'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Stock Price'
          }
        }
      }
    };
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

