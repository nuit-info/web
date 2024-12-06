import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css',
})
export class FormulaireComponent {
  inputValue: string = ''; // Valeur actuelle de l'entrée utilisateur
  numberClick: number = 0; // Nombre de fois que le bouton a été cliqué ou survolé
  maxClicks: number = 3; // Nombre maximum de déplacements du bouton

  // Gestion de la saisie utilisateur
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.value;
  }

  // Gestion du mouvement du bouton lors du survol
  moveButton(): void {
    const buttonSubmit = document.getElementById('buttonsubmit');
    
    if (buttonSubmit) {
      // Calcul d'une nouvelle position aléatoire
      const newX = Math.random() * (window.innerWidth - 200); // Déplacement horizontal (moins une marge)
      const newY = Math.random() * (window.innerHeight - 200); // Déplacement vertical (moins une marge)

      console.log(`Nouvelle position : X=${newX}, Y=${newY}`);

      // Appliquer la transformation CSS pour déplacer le bouton
      buttonSubmit.style.transform = `translate(${newX}px, ${newY}px)`;
      buttonSubmit.style.transition = 'transform 0.5s ease-in-out'; // Animation douce
    }
  }

  // Gestion du clic sur le bouton
  submit(): void {
    const buttonSubmit = document.getElementById('buttonsubmit');
    
    if (buttonSubmit && this.numberClick < this.maxClicks) {
      this.numberClick += 1;
    }

    if (this.numberClick >= this.maxClicks) {
      console.log('Nombre maximum de déplacements atteint !');
    }

    console.log('Valeur saisie :', this.inputValue);
  }
}
