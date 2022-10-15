import { GetDesign } from 'code/utilities/GetDesign';
export namespace Index {
  export class LoadDesign {
    constructor(page: String) {
      //--|▼| Pages for events are inside 'code/events/*.ts' |▼|--//
      new GetDesign.forPage('default-header');
      //===========================//
      new GetDesign.forPage('opdatering-main');
      // new GetDesign.forPage('rooster-main');
      // new GetDesign.forPage('statistieke-main');
      //===========================//
      new GetDesign.forPage('default-sidebar');
      new GetDesign.forPage('default-footer');
      new GetDesign.forPage('default-overlay');
      new GetDesign.forPage('default-data');

      //--► console.log('--index.js Loaded'); ◄--//
    }
  }
}
