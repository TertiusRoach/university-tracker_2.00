import { GetDesign } from 'code/utilities/GetDesign';
export namespace AkademiciFooter {
  export function eventsFor(pageName: String | 'default-footer') {
    const akademiciBody: HTMLElement = document.getElementById('akademici-body');
    const akademiciHeader: HTMLElement = document.getElementById('akademici-header');
    const akademiciMain: HTMLElement = document.getElementById('akademici-main');
    const akademiciSidebar: HTMLElement = document.getElementById('akademici-sidebar');
    const akademiciOverlay: HTMLElement = document.getElementById('akademici-overlay');
    const akademiciFooter: HTMLElement = document.getElementById('akademici-footer');

    const akademiciData: HTMLElement = document.getElementById('akademici-data');

    switch (pageName) {
      case 'default-footer':
        //--|▼| Changes button to the clicked icon |▼|--//
        const toggleFooter = (akademiciFooter: HTMLElement) => {
          let footerButtons: Object = akademiciFooter.querySelectorAll('nav > div');
          let footerOpdatering: HTMLElement = akademiciFooter.querySelector('#opdatering');
          let footerRooster: HTMLElement = akademiciFooter.querySelector('#rooster');
          let footerStatistieke: HTMLElement = akademiciFooter.querySelector('#statistieke');
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
            if (akademiciData.querySelector('main p') !== null) {
              var button: HTMLDivElement = akademiciMain.querySelector('#opdatering-date div:nth-child(3)');
              var navigation: HTMLElement = akademiciMain.querySelector('#opdatering-buttons nav');
              var information: HTMLIFrameElement = akademiciMain.querySelector('#opdatering-sheets header iframe');
              var studios = akademiciData.querySelector('main p').textContent;
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
        toggleFooter(akademiciFooter);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
