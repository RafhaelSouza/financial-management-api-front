import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { DashboardService } from './../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pieChartData: any;
  lineChartData: any;

  options = {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const price = dataset.data[tooltipItem.index];
          const label = dataset.label ? (dataset.label + ': ') : '';

          return label + this.decimalPipe.transform(price, '1.2-2');
        }
      }
    }
  };

  constructor(
    private dashboardService: DashboardService,
    private decimalPipe: DecimalPipe) { }

  ngOnInit(): void {
    this.setPieChart();
    this.setLineChart();
  }

  setPieChart() {
    this.dashboardService.entriesByCategory()
      .then(datas => {
        this.pieChartData = {
          labels: datas.map(entry => entry.category.name),
          datasets: [
            {
              data: datas.map(entry => entry.total),
              backgroundColor: ['#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#3366CC', '#DC3912']
            }
          ]
        };
      });
  }

  setLineChart() {
    this.dashboardService.entriesByDay()
      .then(datas => {
        const days_of_month = this.setDaysOfMonth();
        const total_earnings = this.totalByEachDayOfMonth(
          datas.filter(data => data.entry_type === 'EARNING'), days_of_month);
        const total_expenses = this.totalByEachDayOfMonth(
          datas.filter(data => data.entry_type === 'EXPENSE'), days_of_month);

        this.lineChartData = {
          labels: days_of_month,
          datasets: [
            {
              label: 'Earnings',
              data: total_earnings,
              borderColor: '#3366CC'
            }, {
              label: 'Expenses',
              data: total_expenses,
              borderColor: '#D62B00'
            }
          ]
        }
      });
  }

  private totalByEachDayOfMonth(datas, days_of_month) {
    const totals: number[] = [];
    for (const day of days_of_month) {
      let total = 0;

      for (const data of datas) {
        if (data.day.getDate() === day) {
          total = data.total;

          break;
        }
      }

      totals.push(total);
    }

    return totals;
  }

  private setDaysOfMonth() {
    const reference_month = new Date();
    reference_month.setMonth(reference_month.getMonth() + 1); // go to next month
    reference_month.setDate(0); // return to the last day of the month we want to

    const amount = reference_month.getDate();

    const days: number[] = [];

    for (let i = 1; i <= amount; i++) {
      days.push(i);
    }

    return days;
  }

}
