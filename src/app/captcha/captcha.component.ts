import {Component, OnInit} from '@angular/core';
import {NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-captcha',
  standalone: true,
  imports: [
    NgStyle,
    NgIf
  ],
  templateUrl: './captcha.component.html',
  styleUrl: './captcha.component.css'
})
export class CaptchaComponent implements OnInit {

  position = { x: 50, y: 50 };
  captchaValidated = false;

  ngOnInit(): void {
    this.moveCircleRandomly();
  }

  handleClick(): void {
    this.captchaValidated = true;
  }

  moveCircleRandomly(): void {
    setInterval(() => {
      if (!this.captchaValidated) {
        this.position = {
          x: Math.random() * 260,
          y: Math.random() * 260,
        };
      }
    }, 500);
  }

}
