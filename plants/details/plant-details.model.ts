import { ShellModel } from '../../shell/data-store';

export class PlantDetailsModel extends ShellModel {
  id: number;
  icon:string;
  slug: string;
  image: string;
  name: string;
  style: string;
  date_updated: string;
  moisture_events: Array<{moisture_level: number, date:string}> = [
    {
      moisture_level:null,
      date: null,
    }

  ];


  constructor() {
    super();
  }
}
