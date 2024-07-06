import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';

export const routes: Routes = [
  { path: '', component: HomeComponent , title: 'Home Page'},
  { path: 'add', component: AddComponent },
];
