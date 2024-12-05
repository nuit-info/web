import {Component, OnInit} from '@angular/core';
import {MapsModule} from "@syncfusion/ej2-angular-maps";
import { world_map } from './world-map';
import { registerLicense } from '@syncfusion/ej2-base';
import { ZoomService, MarkerService, SelectionService  } from '@syncfusion/ej2-angular-maps'

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [
    MapsModule
  ],
  providers: [ZoomService, MarkerService, SelectionService],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css'
})
export class MeteoComponent implements OnInit{
  public shapeData: object = world_map;
  public zoomSettings?: object;
  public markerSettings?: object;

  ngOnInit(): void {
    this.zoomSettings = {
      enable: true,
      toolbars: ['ZoomIn', 'ZoomOut', 'Pan', 'Reset']
    };
    this.markerSettings = [{
      visible: true,
      selectionSettings: {
        enable: true,
        fill: 'lightblue',
        border: { color: 'white', width: 2}
      },
      shapeValuePath:'shape',
      colorValuePath:'color',
      shape: 'Triangle',
      fill: 'blue',
      height: 20,
      width: 20,
      dataSource: [
        { latitude: 48.085731 , longitude: -11.53778 },
        { latitude: 35.777202 , longitude: -69.545593 },
        { latitude: 42.165376 , longitude: -134.233093 },
      ],
      animationDuration: 0,
    }]
    this.shapeData = world_map;
  }

  constructor() {
    registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF1cX2hIYVdpR2Nbek5zflROal1TVBYiSV9jS3pSdEVmWHpfeHVWR2haWQ==');
  }

  onMarkerClick(args: any) {
    console.log(args);
  }
}
