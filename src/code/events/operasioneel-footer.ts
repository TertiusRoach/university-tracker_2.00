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
        //--|▼| Changes button to the clicked icon |▼|--//
        const toggleFooter = (operasioneelFooter: HTMLElement) => {
          let footerButtons: Object = operasioneelFooter.querySelectorAll('nav > div');
          let footerOpdatering: HTMLElement = operasioneelFooter.querySelector('#opdatering');
          let footerRooster: HTMLElement = operasioneelFooter.querySelector('#rooster');
          let footerStatistieke: HTMLElement = operasioneelFooter.querySelector('#statistieke');
          function toggleButtons(buttons: Object, container: HTMLElement) {
            //--▼ Deactivates footer buttons ▼--//
            for (let i = 0; i < Object.keys(buttons).length; i++) {
              buttons[i].className = '';
            }

            //--▼ Highlight Header Button ▼--//
            container.querySelector('div').className = 'active';
          }

          $(footerOpdatering).on('click', () => {
            new GetDesign.forPage('opdatering-main');
            toggleButtons(footerButtons, footerOpdatering);

            //--▼ Reverts to previously displayed info by using the data container ▼--//
            if (operasioneelData.querySelector('main p') !== null) {
              var button: HTMLDivElement = operasioneelMain.querySelector('#opdatering-date div:nth-child(3)');
              var navigation: HTMLElement = operasioneelMain.querySelector('#opdatering-buttons nav');
              var information: HTMLIFrameElement = operasioneelMain.querySelector('#opdatering-sheets header iframe');
              var studios = operasioneelData.querySelector('main p').textContent;
              switch (studios) {
                case 'original':
                  button.classList.remove('hide-additional');
                  button.classList.add('hide-original');

                  navigation.classList.remove('show-additional');
                  navigation.classList.add('show-original');

                  information.id = 'original';
                  break;
                case 'additional':
                  button.classList.remove('hide-original');
                  button.classList.add('hide-additional');

                  navigation.classList.remove('show-original');
                  navigation.classList.add('show-additional');

                  information.id = 'additional';
                  break;
              }
            }
          });
          $(footerRooster).on('click', () => {
            toggleButtons(footerButtons, footerRooster);
            new GetDesign.forPage('rooster-main');
          });
          $(footerStatistieke).on('click', () => {
            new GetDesign.forPage('statistieke-main');
            toggleButtons(footerButtons, footerStatistieke);
          });
        };
        toggleFooter(operasioneelFooter);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
