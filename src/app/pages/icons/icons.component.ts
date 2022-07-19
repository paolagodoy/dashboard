import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;


  colorScheme = {
    domain: ['#fae5bb', '#A10A28', '#c3cae3', '#b6f8da']
  };
  colorSchemeLine = {
    domain: ['#31af1f', '#A10A28']
  };
  single = [
    {
      'name': 'Transfers',
      'value': 79546
    },
    {
      'name': 'Payments',
      'value': 11678
    },
    {
      'name': 'Bills',
      'value': 96478
    }
  ];

  public copy: string;
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Month';
  yAxisLabel: string = 'Amount';
  timeline: boolean = true;
  multi = [
    {
      'name': 'Incomes',
      'series': [
        {
          'name': 'Month 1',
          'value': 62000000
        },
        {
          'name': 'Month 2',
          'value': 73000000
        },
        {
          'name': 'Month 3',
          'value': 89400000
        }
      ]
    },

    {
      'name': 'Outcome',
      'series': [
        {
          'name': 'Month 1',
          'value': 250000000
        },
        {
          'name': 'Month 2',
          'value': 309000000
        },
        {
          'name': 'Month 3',
          'value': 311000000
        }
      ]
    },

  ];

  constructor() { }

  ngOnInit() {
  }
}
