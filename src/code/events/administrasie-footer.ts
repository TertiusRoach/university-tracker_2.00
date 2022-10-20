import { GetDesign } from 'code/utilities/GetDesign';
export namespace AdministrasieFooter {
  export function eventsFor(pageName: String | 'default-footer') {
    const administrasieBody: HTMLElement = document.getElementById('administrasie-body');
    const administrasieHeader: HTMLElement = document.getElementById('administrasie-header');
    const administrasieMain: HTMLElement = document.getElementById('administrasie-main');
    const administrasieSidebar: HTMLElement = document.getElementById('administrasie-sidebar');
    const administrasieOverlay: HTMLElement = document.getElementById('administrasie-overlay');
    const administrasieFooter: HTMLElement = document.getElementById('administrasie-footer');

    const administrasieData: HTMLElement = document.getElementById('administrasie-data');

    switch (pageName) {
      case 'default-footer':
        //--|▼| Changes button to the clicked icon |▼|--//
        const toggleFooter = (administrasieFooter: HTMLElement) => {
          let footerButtons: Object = administrasieFooter.querySelectorAll('nav > div');
          let footerOpdatering: HTMLElement = administrasieFooter.querySelector('#opdatering');
          let footerRooster: HTMLElement = administrasieFooter.querySelector('#rooster');
          let footerStatistieke: HTMLElement = administrasieFooter.querySelector('#statistieke');
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
            if (administrasieData.querySelector('main p') !== null) {
              var button: HTMLDivElement = administrasieMain.querySelector('#opdatering-date div:nth-child(3)');
              var navigation: HTMLElement = administrasieMain.querySelector('#opdatering-buttons nav');
              var information: HTMLIFrameElement = administrasieMain.querySelector('#opdatering-sheets header iframe');
              var studios = administrasieData.querySelector('main p').textContent;
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
        toggleFooter(administrasieFooter);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
