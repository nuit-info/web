import { Routes } from '@angular/router';
import {MeteoComponent} from './meteo/meteo.component';
import { CaptchaComponent } from './captcha/captcha.component';
export const routes: Routes = [
  {path: 'meteo', component: MeteoComponent},
  {path: 'captcha', component: CaptchaComponent},
];
