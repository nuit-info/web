import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [],
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent {
  inputValue: string = ''; // Variable to hold input value
  numberClick: number = 0;
  clicksNeeded: number = Math.trunc(Math.random() * 5) + 6; // Random number between 6 and 10

  // Gestion de la saisie utilisateur
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.value; // Update the input value
  }

  // Fonction pour obtenir la position de l'image de la baleine
  getBaleinePosition(): DOMRect {
    const baleineImage = document.getElementById('baleine-image');
    return baleineImage ? baleineImage.getBoundingClientRect() : new DOMRect(0, 0, 0, 0);
  }

  // Gestion du déplacement du bouton lors du survol
  moveButton(): void {
    const buttonsubmit = document.getElementById('buttonsubmit');
    
    if (this.numberClick < this.clicksNeeded && buttonsubmit) {
      this.numberClick += 1;

      // Obtenir la position de l'image de la baleine
      const baleinePosition = this.getBaleinePosition();

      // Calculer les limites de déplacement
      const maxX = baleinePosition.left;  // Le bouton doit se déplacer à gauche de la baleine
      const maxY = baleinePosition.top;   // Le bouton doit se déplacer au-dessus de la baleine

      // Générer une position aléatoire à l'intérieur de cette zone
      const newX = Math.random() * maxX;  // Position aléatoire à gauche de la baleine
      const newY = Math.random() * maxY;  // Position aléatoire au-dessus de la baleine

      console.log(`Nouvelle position : X=${newX}, Y=${newY}`);

      // Appliquer la transformation CSS pour déplacer le bouton
      buttonsubmit.style.transform = `translate(${newX}px, ${newY}px)`;
      buttonsubmit.style.transition = 'transform 0.5s ease-in-out'; // Animation douce
    }
  }

  // Gestion du clic sur le bouton (validation)
  submit(): void {
    if (this.numberClick >= this.clicksNeeded) {
      if (this.inputValue.toLowerCase() === 'baleine') {
        console.log('Formulaire validé !');
        alert('Bravo, vous avez répondu correctement : "Baleine"');
      } else {
        console.log('Réponse incorrecte');
        alert('Désolé, ce n\'est pas la bonne réponse.');
      }
    } else {
      console.log('Cliquez encore pour déplacer le bouton');
      alert('Cliquez encore pour déplacer le bouton avant de valider.');
    }
    console.log('Valeur saisie :', this.inputValue);
  }
}
