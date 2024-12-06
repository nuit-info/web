import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-hourly-chart',
  standalone: true,
  templateUrl: './hourly-chart.component.html',
  styleUrls: ['./hourly-chart.component.css']
})
export class HourlyChartComponent implements OnInit {
  @ViewChild('chart') private chartContainer!: ElementRef;
  @Input() data: any;

  // Exemple de données : valeurs aléatoires réparties par heure sur 7 jours
  private data_graphe = this.generateHourlyData();

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  private generateHourlyData() {
    const startDate = new Date(); // aujourd'hui
    startDate.setHours(0, 0, 0, 0); // début de la journée

    const hourlyData = [];
    for (let i = 0; i < 7 * 24; i++) {
      const date = new Date(startDate);
      date.setHours(startDate.getHours() + i);
      hourlyData.push({ date, value: this.data.hourly.temperature2m.i });
    }

    return hourlyData;
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;
    const margin = { top: 20, right: 30, bottom: 50, left: 50 };
    const width = element.offsetWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(element)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const x = d3.scaleTime()
      .domain(d3.extent(this.data_graphe, d => d.date) as [Date, Date])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(this.data_graphe, d => d.value) as number])
      .nice()
      .range([height, 0]);

    // Axes
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat('%a %Hh') as (d: number | { valueOf(): number }) => string));

    svg.append('g')
      .call(d3.axisLeft(y));

    // Line generator
    const line = d3.line<{ date: Date; value: number }>()
      .x(d => x(d.date))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX);

    // Draw line
    svg.append('path')
      .datum(this.data_graphe)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line);

    // Add circles for data points
    svg.selectAll('circle')
      .data(this.data_graphe)
      .enter()
      .append('circle')
      .attr('cx', d => x(d.date))
      .attr('cy', d => y(d.value))
      .attr('r', 3)
      .attr('fill', 'steelblue');
  }
}
