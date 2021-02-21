import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { PlantService } from '../plant.service';
import { PlantListingModel } from './plant-listing.model';

@Injectable()
export class PlantListingResolver implements Resolve<DataStore<PlantListingModel>> {

  constructor(private plantService: PlantService) {}

  resolve(): DataStore<PlantListingModel> {
    const dataSource: Observable<PlantListingModel> = this.plantService.getListingDataSource();
    const dataStore: DataStore<PlantListingModel> = this.plantService.getListingStore(dataSource);

    return dataStore;
  }
}
