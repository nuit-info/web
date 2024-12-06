import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-side-bar-meteo',
  standalone: true,
  imports: [],
  templateUrl: './side-bar-meteo.component.html',
  styleUrl: './side-bar-meteo.component.css'
})
export class SideBarMeteoComponent {
  @Input() data: any;
  @Output() close = new EventEmitter<void>();

  constructor() {
  }

  public closeModal() {
    this.close.emit()
  }
}
