import {Component, Input, OnInit} from '@angular/core';
import {NgFor, NgForOf, NgStyle} from "@angular/common";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {WeatherIcon} from "../../models/weather-icon";

@Component({
  selector: 'app-rain-of-pictograms',
  standalone: true,
  imports: [NgStyle, NgFor, NgForOf],
  templateUrl: './rain-of-pictograms.component.html',
  styleUrl: './rain-of-pictograms.component.css'
})
export class RainOfPictogramsComponent implements OnInit {
  @Input() pictogramFormats: WeatherIcon | WeatherIcon[] = [];
  @Input() density: number = 1;
  @Input() intensity: number = 10;
  pictograms: { svg: SafeHtml; x: number; y: number; size: number, color: string, animationDelay: number }[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.startRain();
  }

  startRain() {
    const density = this.density >= 1 && this.density <= 5 ? this.density : 1;
    setInterval(() => {
      if (this.pictograms.length < 100 * density) {
        if(Array.isArray(this.pictogramFormats)){
          this.pictogramFormats.forEach((pictogram) => {
            this.addPictogram(pictogram);
          });
        } else {
          this.addPictogram(this.pictogramFormats);
        }
      }
    }, 200/density);
  }

  addPictogram(pictogram: WeatherIcon) {
    const sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(pictogram.icon);
    const newPictogram = {
      svg: sanitizedSvg,
      x: Math.random() * window.innerWidth,
      y: Math.random() * -100,
      size: Math.random() * 40 + 20,
      color: pictogram.color,
      animationDelay: Math.random() * 3,
    };
    this.pictograms.push(newPictogram);
  }

  resetPosition(index: number) {
    this.pictograms[index].x = Math.random() * window.innerWidth;
    this.pictograms[index].y = Math.random() * -100;
  }

  getIntensity(): number {
    switch (this.intensity){
      case 1:
        return 10
      case 2:
        return 8
      case 3:
        return 6
      case 4:
        return 4
      case 5:
        return 1
      default:
        return 10
    }
  }
}
