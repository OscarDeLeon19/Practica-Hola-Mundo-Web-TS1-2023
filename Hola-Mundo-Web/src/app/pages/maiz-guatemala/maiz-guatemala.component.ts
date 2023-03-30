import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-maiz-guatemala',
  templateUrl: './maiz-guatemala.component.html',
  styleUrls: ['./maiz-guatemala.component.css']
})
export class MaizGuatemalaComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      }
    }
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Peten', 'Alta Verapaz', 'Quiche', 'Jutiapa', 'Huehuetenango', 'San Marcos'
      , 'Retalhuleu', 'Santa Rosa', 'Chimaltenango', 'Escuintla', 'Quetzaltenango', 'Resto'],
    datasets: [{
      data: [0.18, 0.1, 0.08, 0.07, 0.06, 0.05, 0.05, 0.05, 0.04, 0.04, 0.04, 0.24]
    }]
  };

  public barChartColors: any[] = [
    { backgroundColor: 'red' },
    { backgroundColor: 'green' },
  ]

  public pieChartType: ChartType = 'pie';

  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
