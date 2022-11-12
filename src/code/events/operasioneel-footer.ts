import { GetDesign } from 'code/utilities/GetDesign';
export namespace OperasioneelFooter {
  export function eventsFor(pageName: String | 'default-footer') {
    const operasioneelBody: HTMLElement = document.getElementById('operasioneel-body');
    const operasioneelHeader: HTMLElement = document.getElementById('operasioneel-header');
    const operasioneelMain: HTMLElement = document.getElementById('operasioneel-main');
    const operasioneelSidebar: HTMLElement = document.getElementById('operasioneel-sidebar');
    const operasioneelOverlay: HTMLElement = document.getElementById('operasioneel-overlay');
    const operasioneelFooter: HTMLElement = document.getElementById('operasioneel-footer');

    const operasioneelData: HTMLElement = document.getElementById('operasioneel-data');

    switch (pageName) {
      case 'default-footer':
        //--|▼| Changes the main container to the selected icon |▼|--//
        const toggleFooter = (operasioneelFooter: HTMLElement) => {
          let footerButtons: Object = operasioneelFooter.querySelectorAll('nav > div');
          let footerProjekte: HTMLElement = operasioneelFooter.querySelector('#projekte');
          let footerAteljees: HTMLElement = operasioneelFooter.querySelector('#ateljees');
          function toggleButtons(buttons: Object, container: HTMLElement) {
            //--▼ Deactivates footer buttons ▼--//
            for (let i = 0; i < Object.keys(buttons).length; i++) {
              buttons[i].className = '';
            }

            //--▼ Highlight Header Button ▼--//
            container.querySelector('div').className = 'active';
          }
          $(footerProjekte).on('click', () => {
            toggleButtons(footerButtons, footerProjekte);
            new GetDesign.forPage('projekte-main');
          });
          $(footerAteljees).on('click', () => {
            new GetDesign.forPage('ateljees-main');
            toggleButtons(footerButtons, footerAteljees);
          });
        };
        toggleFooter(operasioneelFooter);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
