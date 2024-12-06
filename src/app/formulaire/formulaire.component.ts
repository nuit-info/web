import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css',
})
export class FormulaireComponent {
  inputValue: string = ''; // Variable to hold input value
  numberClick: number = 0;
  clicksNeeded: number = Math.trunc(Math.random() * 5) + 3;

  // Gestion de la saisie utilisateur
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.value; // Update the input value
    const previousValue = this.inputValue || ''; // Valeur précédente (par défaut vide)

    // Trouver la lettre ajoutée
    const addedLetter = this.inputValue.length > previousValue.length
      ? this.inputValue[this.inputValue.length - 1] // Dernière lettre ajoutée
      : null; // Rien ajouté, ou suppression

    console.log(addedLetter);
  }

  // Gestion du déplacement du bouton survolé
  moveButton(): void {
    const buttonsubmit = document.getElementById('buttonsubmit');

    if (buttonsubmit) {
      // Calcul d'une nouvelle position aléatoire
      const newX = Math.random() * (window.innerWidth); // Déplacement horizontal (moins une marge)
      const newY = Math.random() * (window.innerHeight); // Déplacement vertical (moins une marge)

      console.log(`Nouvelle position : X=${newX}, Y=${newY}`);

      // Appliquer la transformation CSS pour déplacer le bouton
      buttonsubmit.style.transform = `translate(${newX}px, ${newY}px)`;
      buttonsubmit.style.transition = 'transform 0.5s ease-in-out'; // Animation douce
    }
  }

  // Gestion du clic sur le bouton
  submit(): void {
    const buttonsubmit = document.getElementById('buttonsubmit');

    if (this.numberClick < this.clicksNeeded) {
      this.numberClick += 1;
    }

    if (this.numberClick >= this.clicksNeeded) {
      console.log('Nombre maximum de déplacements atteint !');
    }

    console.log('Valeur saisie :', this.inputValue);
  }
}
