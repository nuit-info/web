import { Component } from '@angular/core';
import {MapsModule} from "@syncfusion/ej2-angular-maps";
import { world_map } from './world-map';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [
    MapsModule
  ],
  template: `<ejs-maps id='maps-container'>
                <e-layers>
                    <e-layer [shapeData] = 'shapeData'></e-layer>
                </e-layers>
               </ejs-maps>`,
  styleUrl: './meteo.component.css'
})
export class MeteoComponent {
  public shapeData: object = world_map;


}
