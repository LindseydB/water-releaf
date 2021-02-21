import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { PlantService } from '../plant.service';
import { PlantDetailsPage } from './plant-details.page';
import { PlantDetailsResolver } from './plant-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: PlantDetailsPage,
    resolve: {
      data: PlantDetailsResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PipesModule
  ],
  declarations: [
    PlantDetailsPage
  ],
  providers: [
    PlantDetailsResolver,
    PlantService
  ]
})
export class PlantDetailsPageModule {}
