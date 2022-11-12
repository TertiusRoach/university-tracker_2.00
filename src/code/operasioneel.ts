import { GetDesign } from 'code/utilities/GetDesign';
export namespace Operasioneel {
  export class LoadDesign {
    constructor(page: String) {
      new GetDesign.forPage('default-header');
      new GetDesign.forPage('projekte-main');
      new GetDesign.forPage('default-sidebar');
      new GetDesign.forPage('default-footer');

      new GetDesign.forPage('header-overlay');
      new GetDesign.forPage('sidebar-overlay');
      new GetDesign.forPage('default-overlay');

      new GetDesign.forPage('default-data');

      //--► console.log('--operasioneel.js Loaded'); ◄--//
    }
  }
}
