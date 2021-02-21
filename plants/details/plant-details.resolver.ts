import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { PlantService } from '../plant.service';
import { PlantDetailsModel } from './plant-details.model';

@Injectable()
export class PlantDetailsResolver implements Resolve<DataStore<PlantDetailsModel>> {

  constructor(private plantService: PlantService) {}

  resolve(route: ActivatedRouteSnapshot): DataStore<PlantDetailsModel> {
    const itemSlug = route.paramMap.get('productId');

    const dataSource: Observable<PlantDetailsModel> = this.plantService.getDetailsDataSource(itemSlug);
    const dataStore: DataStore<PlantDetailsModel> = this.plantService.getDetailsStore(dataSource);

    return dataStore;
  }
}
