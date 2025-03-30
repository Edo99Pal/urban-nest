import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
export class FeatureModule {}

const routes: Routes = [
  { path: 'feature', component: FeatureComponent } // Directly load the component
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
