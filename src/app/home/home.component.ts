import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  openModal(organe: string, imageUrl: string) {
    // Mettre à jour le nom de l'organe dans la modale
    const organNameElement = document.getElementById('organName')!;
    organNameElement.textContent = organe;

    // Mettre à jour l'image dans la modale
    const organImageElement = document.getElementById('organImage') as HTMLImageElement;
    organImageElement.src = imageUrl;

    // Afficher la modale avec une transition d'opacité
    const modalElement = document.getElementById('organModal')!;
    modalElement.classList.remove('opacity-0', 'pointer-events-none'); // Retirer les classes de "caché"
    modalElement.classList.add('opacity-100', 'pointer-events-auto'); // Ajouter les classes de "visible"
  }

  closeModal() {
    // Masquer la modale avec une transition d'opacité
    const modalElement = document.getElementById('organModal')!;
    modalElement.classList.remove('opacity-100', 'pointer-events-auto'); // Retirer les classes de "visible"
    modalElement.classList.add('opacity-0', 'pointer-events-none'); // Ajouter les classes de "caché"
  }
}
