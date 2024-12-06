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
    if(this.dechets.length == 0){
      this.captchaValidated = true;
    }
    console.log('Dechets après suppression:', this.dechets);
  }

  trackById(index: number, dechet: { id: string }): string {
    return dechet.id;  // Retourne l'id pour éviter les réorganisations
  }

  // Partie IA

  public tourIA: boolean = true; // Début avec l'IA
  public gameOver: boolean = false; // Indique si le jeu est terminé
  public winner: string | null = null; // Stocke le gagnant

  // Fonction pour supprimer des éléments (logique IA)
  IA_supp(dechets: number[]): number[] {
    let nbDechets = dechets.length;
    let res = [...dechets];

    if (nbDechets % 4 === 0) {
      res.shift(); // Retire le premier élément
    } else {
      while (nbDechets % 4 !== 0) {
        nbDechets -= 1;
      }
      res = res.slice(0, nbDechets);
    }
    return res;
  }

  // Méthode principale pour jouer au jeu
  playGame(dechets: number[]): void {
    while (!this.gameOver) {
      if (this.tourIA) {
        this.dechets = this.IA_supp(this.dechets);
      }

      // Alterner les tours
      this.tourIA = !this.tourIA;

      // Vérifier si le jeu est terminé
      if (this.dechets.length === 0) {
        this.winner = this.tourIA ? 'IA' : 'Joueur';
        this.gameOver = true;
      }
    }
  }
}
