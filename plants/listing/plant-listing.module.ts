import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { PlantService } from '../plant.service';
import { PlantListingPage } from './plant-listing.page';
import { PlantListingResolver } from './plant-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: PlantListingPage,
    resolve: {
      data: PlantListingResolver
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
    PlantListingPage
  ],
  providers: [
    PlantListingResolver,
    PlantService
  ]
})
export class PlantListingPageModule {}
