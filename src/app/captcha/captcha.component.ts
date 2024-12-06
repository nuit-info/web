import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-captcha',
  standalone: true,
  imports: [
    NgStyle,
    NgIf
  ],
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

  @ViewChild('modal') modalRef!: ElementRef;
  position = { x: 50, y: 50 };
  captchaValidated = false;
  modalWidth = 0;
  modalHeight = 0;
  circleSize = 80;

  ngOnInit(): void {
    this.moveCircleRandomly();
  }

  ngAfterViewInit(): void {
    const modal = this.modalRef.nativeElement;
    this.modalWidth = modal.offsetWidth;
    this.modalHeight = modal.offsetHeight;
  }

  handleClick(): void {
    this.captchaValidated = true;
  }

  moveCircleRandomly(): void {
    setInterval(() => {
      if (!this.captchaValidated) {
        this.position = {
          x: Math.random() * (this.modalWidth - this.circleSize),
          y: Math.random() * (this.modalHeight - this.circleSize),
        };
      }
    }, 1000);
  }

  // IA JEU DECHETS

let liste_dechets: number[] = Array.from({ length: 22 }, (_, i) => i);

let game_over: boolean = false;
let tourIA: boolean = false;

function IA_supp(liste: number[]): number[] {
    let nb_dechets = liste.length;
    let res = [...liste];
    if (nb_dechets % 4 === 0) {
        res.shift(); // Retire le premier élément
    } else {
        while (nb_dechets % 4 !== 0) {
            nb_dechets -= 1;
        }
        res = res.slice(0, nb_dechets);
    }
    return res;
}

let winner: string | null = null;

while (!game_over) {
    if (tourIA) {
        liste_dechets = IA_supp(liste_dechets);
    }

    tourIA = !tourIA;

    if (liste_dechets.length === 0) {
      winner = tourIA ? 'IA' : 'Joueur';
      game_over = true;
  }
}

console.log(`Le gagnant est : ${winner}`);

}
