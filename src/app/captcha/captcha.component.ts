import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgOptimizedImage, NgStyle } from '@angular/common';

@Component({
  selector: 'app-captcha',
  standalone: true,
  imports: [NgStyle, NgIf, NgForOf, NgOptimizedImage, NgClass],
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css'],
})
export class CaptchaComponent implements OnInit {
  @ViewChild('captchaBody') captchaBodyRef!: ElementRef;
  captchaValidated = false;
  bodyWidth = 0;
  bodyHeight = 0;

  dechets: { id: string, x: number; y: number, selected: boolean }[] = [];

  ngOnInit(): void {
    this.generateDechets();
  }

  ngAfterViewInit(): void {
    const body = this.captchaBodyRef.nativeElement;
    this.bodyWidth = body.offsetWidth;
    this.bodyHeight = body.offsetHeight;
  }

  generateDechets(): void {
    const numPerRow = 5;
    const dechetWidth = 100;
    const dechetHeight = 100;

    const spacingX = (this.bodyWidth - dechetWidth * numPerRow) / (numPerRow + 1);
    const spacingY = 100;

    this.dechets = [];

    for (let i = 0; i < 10; i++) {
      const row = Math.floor(i / numPerRow);
      const col = i % numPerRow;

      const x = spacingX + col * (dechetWidth + spacingX);
      const y = spacingY + row * (dechetHeight + spacingY);

      this.dechets.push({ id: `dechet-${i}`, x, y, selected: false });
    }
  }

  selectionnerDechet(id: string): void {
    const dechet = this.dechets.find(d => d.id === id);
    if (dechet) {
      // Bascule de l'état de sélection du déchet
      dechet.selected = !dechet.selected;
    }
  }

  validerSelection(): void {
    console.log('Dechets avant suppression:', this.dechets);
    this.dechets = this.dechets.filter(dechet => !dechet.selected);
    console.log('Dechets après suppression:', this.dechets);
  }

  trackById(index: number, dechet: { id: string }): string {
    return dechet.id;  // Retourne l'id pour éviter les réorganisations
  }
}
