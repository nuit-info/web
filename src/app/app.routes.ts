import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeteoComponent } from './meteo/meteo.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

import { CaptchaComponent } from './captcha/captcha.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'meteo', component: MeteoComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'captcha', component: CaptchaComponent },
];
