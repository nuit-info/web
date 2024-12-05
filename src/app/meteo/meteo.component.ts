import {Component, OnInit} from '@angular/core';
import {MapsModule} from "@syncfusion/ej2-angular-maps";
import { BrowserModule } from '@angular/platform-browser'
import { world_map } from './world-map';
import { registerLicense } from '@syncfusion/ej2-base';
import { ZoomService } from '@syncfusion/ej2-angular-maps'


@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [
    MapsModule
  ],
  providers: [ZoomService],
  template: `<ejs-maps id='maps-container' [zoomSettings] = 'zoomSettings'>
                <e-layers>
                    <e-layer [shapeData] = 'shapeData'></e-layer>
                </e-layers>
               </ejs-maps>`,
  styleUrl: './meteo.component.css'
})
export class MeteoComponent implements OnInit{
  public shapeData: object = world_map;
  public zoomSettings?: object;

  ngOnInit(): void {
    this.zoomSettings = {
      enable: true,
      toolbars: ['ZoomIn', 'ZoomOut', 'Pan', 'Reset']
    };
    this.shapeData = world_map;
  }

  constructor() {
    registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF1cX2hIYVdpR2Nbek5zflROal1TVBYiSV9jS3pSdEVmWHpfeHVWR2haWQ==');
  }

}
