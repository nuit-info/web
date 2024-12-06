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
  clicksNeeded: number = Math.trunc(Math.random() * 5) + 3;
  decalageCesar: number = Math.trunc(Math.random() * 5) + 4;

  // Gestion de la saisie utilisateur
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const newValue = input.value; // Nouvelle valeur du champ
    const previousValue = this.inputValue || ''; // Valeur précédente (par défaut vide)

    // Trouver la lettre ajoutée
    let addedLetterCode =
      newValue.length > previousValue.length
        ? newValue[newValue.length - 1].charCodeAt(0) - this.decalageCesar // Dernière lettre ajoutée
        : null; // Rien ajouté, ou suppression

    const addedLetter = addedLetterCode
      ? String.fromCharCode(addedLetterCode)
      : null;

    // Si une lettre a été ajoutée et qu'elle est décalée
    if (addedLetter !== null) {
      // Remplacer la dernière lettre dans l'input par la lettre décalée
      const modifiedValue =
        newValue.slice(0, newValue.length - 1) + addedLetter;
      this.inputValue = modifiedValue; // Met à jour la valeur interne
      input.value = modifiedValue; // Met à jour la valeur dans le champ de saisie
    } else {
      this.inputValue = newValue; // Met à jour la valeur interne sans modification
    }

    console.log(addedLetter);
    this.inputValue = newValue;
  }

  onKeyDown(event: KeyboardEvent): void {
    // Désactiver Ctrl+V (pasting)
    if (event.ctrlKey && event.key === 'v') {
      event.preventDefault(); // Empêche le collage
      alert('Haha bien essayer');
    }
  }

  onContextMenu(event: MouseEvent): void {
    event.preventDefault(); // Disable right-click context menu
    alert('Haha bien essayer');
  }

  submit(): void {
    if (this.numberClick === this.clicksNeeded) {
      if (this.inputValue.toLowerCase() === 'baleine') {
        alert("Bravo, vous avez répondu correctement : 'Baleine'");
      } else {
        alert("Désolé, ce n'est pas la bonne réponse");
      }
    }
  }

  // Gestion du déplacement du bouton
  moveButton(): void {
    const buttonsubmit = document.getElementById('buttonsubmit')!;

    if (this.numberClick < this.clicksNeeded) {
      this.numberClick += 1;

      // Calculer le déplacement aléatoire entre -window.innerWidth / 2 et window.innerWidth / 2
      const newX = Math.trunc(
        (Math.random() * window.innerWidth) / 2 - window.innerWidth / 2
      );

      // Calculer le déplacement aléatoire entre -window.innerHeight / 2 et window.innerHeight / 2
      const newY = Math.trunc(
        (Math.random() * window.innerHeight) / 2 - window.innerHeight / 2
      );

      console.log(newX, newY);
      console.log(`translate-x-[${newX}px]`, `translate-y-[${newY}px]`);

      buttonsubmit.style.transform = `translate(${newX}px, ${newY}px)`;
    }

    console.log('Input value:', this.inputValue); // Log input value on submit
  }
}
