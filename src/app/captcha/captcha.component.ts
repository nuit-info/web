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
    }, 500);
  }
}
