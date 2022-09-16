import { GetDesign } from 'code/utilities/GetDesign';
export namespace Index {
  export class LoadDesign {
    constructor(page: String) {
      new GetDesign.forPage(`default-header`);
      new GetDesign.forPage(`default-main`);
      new GetDesign.forPage(`default-sidebar`);
      new GetDesign.forPage(`default-footer`);
      // new GetDesign.forPage(`default-overlay`);

      //--► console.log('--index.js Loaded'); ◄--//
    }
  }
}
