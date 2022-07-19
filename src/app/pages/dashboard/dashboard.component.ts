import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  today = new Date();
  totalAccount  = 400000;
  totalCredits = 13000;
  showItem = 'all';
  creditType = 'visa';
  lastMovements = [
    {
      description: 'Transfer',
      date: this.today,
      amount:  567,
      total: 400.000,
      type: 'outcome',
      class: 'fas fa-arrow-down text-danger mr-3'
    },
    {
      description: 'Payment',
      date: this.today,
      amount:  9678,
      total: 400.000,
      type: 'outcome',
      class: 'fas fa-arrow-down text-danger mr-3'
    },
    {
      description: 'Google Services',
      date: this.today,
      amount:  1213,
      total: 400.000,
      type: 'income',
      class: 'fas fa-arrow-up text-success mr-3'
    },
    {
      description: 'Transfer',
      date: this.today,
      amount:  78979,
      total: 400.000,
      type: 'outcome',
      class: 'fas fa-arrow-down text-danger mr-3'
    },
    {
      description: 'Salary',
      date: this.today,
      amount:  23463,
      total: 400.000,
      type: 'income',
      class: 'fas fa-arrow-up text-success mr-3'
    },

  ]

  ngOnInit() {

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  checkIncome(b: string) {
    this.showItem = b;
  }

  checkTotal(amount: number) {
    return this.totalAccount - amount;

  }

  changeCard(type: string) {
    this.creditType = type;
  }
}
