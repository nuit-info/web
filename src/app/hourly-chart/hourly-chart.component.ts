
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-hourly-chart',
  standalone: true,
  templateUrl: './hourly-chart.component.html',
  styleUrls: ['./hourly-chart.component.css']
})
export class HourlyChartComponent implements OnInit {
  @ViewChild('chart', { static: true }) private chartContainer!: ElementRef;
  @Input() data: { hourly: { temperature2m: number[] } } = { hourly: { temperature2m: [] } };

  private dataGraphe: { date: Date; value: number }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.dataGraphe = this.generateHourlyData();
    this.createChart();
  }

  private generateHourlyData(): { date: Date; value: number }[] {
    const startDate = new Date(); // Aujourd'hui
    startDate.setHours(0, 0, 0, 0); // Début de la journée

    const hourlyData: { date: Date; value: number }[] = [];
    const temperatures = this.data.hourly.temperature2m;

    for (let i = 0; i < temperatures.length; i++) {
      const date = new Date(startDate);
      date.setHours(startDate.getHours() + i); // Ajoute i heures
      hourlyData.push({ date, value: temperatures[i] });
    }

    return hourlyData;
  }

  private createChart(): void {
    console.log("Graphe")
    console.log(this.data)
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

    // Échelles
    const x = d3.scaleTime()
      .domain(d3.extent(this.dataGraphe, d => d.date) as [Date, Date])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(this.dataGraphe, d => d.value) as number])
      .nice()
      .range([height, 0]);

    // Axes
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
<<<<<<< HEAD
      .call(
        d3.axisBottom(x).tickFormat((domainValue: Date | d3.NumberValue) =>
          d3.timeFormat('%a %Hh')(new Date(+domainValue))
        )
      );
=======
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat('%a %Hh') as (d: number | { valueOf(): number }) => string));
>>>>>>> 853ca5014a10c948afb5d606cc6a4813fa584047

    svg.append('g')
      .call(d3.axisLeft(y));

    // Générateur de ligne
    const line = d3.line<{ date: Date; value: number }>()
      .x(d => x(d.date)!)
      .y(d => y(d.value)!)
      .curve(d3.curveMonotoneX);

    // Dessiner la ligne
    svg.append('path')
      .datum(this.dataGraphe)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line);

    // Ajouter des cercles pour les points de données
    svg.selectAll('circle')
      .data(this.dataGraphe)
      .enter()
      .append('circle')
      .attr('cx', d => x(d.date)!)
      .attr('cy', d => y(d.value)!)
      .attr('r', 3)
      .attr('fill', 'steelblue');
  }
}
