import { GetDesign } from 'code/utilities/GetDesign';
export namespace OperasioneelData {
  export function eventsFor(pageName: String | 'default-data') {
    const operasioneelBody: HTMLElement = document.getElementById('operasioneel-body');
    const operasioneelHeader: HTMLElement = document.getElementById('operasioneel-header');
    const operasioneelMain: HTMLElement = document.getElementById('operasioneel-main');
    const operasioneelSidebar: HTMLElement = document.getElementById('operasioneel-sidebar');
    const operasioneelOverlay: HTMLElement = document.getElementById('operasioneel-overlay');
    const operasioneelFooter: HTMLElement = document.getElementById('operasioneel-footer');
    const operasioneelData: HTMLElement = document.getElementById('operasioneel-data');
    switch (pageName) {
      case 'default-data':
        let fadeLoader = () => {
          $('#loading-screen').fadeTo('slow', 0);
          var removeLoader = () => {
            operasioneelBody.querySelector('#loading-screen').remove();
          };
          setTimeout(removeLoader, 2000);
        };
        setTimeout(fadeLoader, 3000);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
