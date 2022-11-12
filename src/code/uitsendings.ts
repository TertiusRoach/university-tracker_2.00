import { GetDesign } from 'code/utilities/GetDesign';
export namespace Uitsendings {
  export class LoadDesign {
    constructor(page: String) {
      //--|▼| Pages for events are inside 'code/events/*.ts' |▼|--//
      new GetDesign.forPage('default-header');
      new GetDesign.forPage('default-main');

      new GetDesign.forPage('default-sidebar');
      new GetDesign.forPage('default-footer');

      new GetDesign.forPage('header-overlay');
      new GetDesign.forPage('sidebar-overlay');
      new GetDesign.forPage('default-overlay');

      new GetDesign.forPage('default-data');
      //--► console.log('--uitsendings.js Loaded'); ◄--//
    }
  }
}
