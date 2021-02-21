import { ShellModel } from '../../shell/data-store';

export class PlantItemModel {
  icon: string;
  image: string;
  name: string;
  moisture_level: number;
  moisture_events: Array<{moisture_level: number, date:string}> = [
    {
      moisture_level:null,
      date: null,
    }

  ];
}

export class PlantListingModel extends ShellModel {
  items: Array<PlantItemModel> = [
    new PlantItemModel(),
    new PlantItemModel(),
    new PlantItemModel(),
    new PlantItemModel()
  ];

  constructor() {
    super();
  }
}
