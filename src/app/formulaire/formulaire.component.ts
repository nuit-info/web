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
  clicksNeeded: number = Math.trunc(Math.random() * 5) + 3

  // Handle input change
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



  // Handle submit
  submit(): void {
    const buttonsubmit = document.getElementById('buttonsubmit')!;

    if (this.numberClick < this.clicksNeeded) {
      this.numberClick += 1;

      const newX = Math.trunc(Math.random() * window.innerWidth / 2);
      const newY = Math.trunc(Math.random() * window.innerHeight / 2);

      console.log(newX, newY);
      console.log(`translate-x-[${newX}px]`, `translate-y-[${newY}px]`);

      buttonsubmit.style.transform = `translate(${newX}px, ${newY}px)`;

      // buttonsubmit.classList.add(
      //   `translate-x-[${newX}px]`,
      //   `translate-y-[${newY}px]`
      // );

      // buttonsubmit.classList.add('translate-x-[5px]', 'translate-y-[450px]');
    }

    console.log('Input value:', this.inputValue); // Log input value on submit
  }
}
