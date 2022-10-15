import { GetDesign } from 'code/utilities/GetDesign';
export namespace UitsendingsFooter {
  export function eventsFor(pageName: String | 'default-footer') {
    const uitsendingsBody: HTMLElement = document.getElementById('uitsendings-body');
    const uitsendingsHeader: HTMLElement = document.getElementById('uitsendings-header');
    const uitsendingsMain: HTMLElement = document.getElementById('uitsendings-main');
    const uitsendingsSidebar: HTMLElement = document.getElementById('uitsendings-sidebar');
    const uitsendingsOverlay: HTMLElement = document.getElementById('uitsendings-overlay');
    const uitsendingsFooter: HTMLElement = document.getElementById('uitsendings-footer');

    const uitsendingsData: HTMLElement = document.getElementById('uitsendings-data');

    switch (pageName) {
      case 'default-footer':
        //--|▼| Changes button to the clicked icon |▼|--//
        const toggleFooter = (uitsendingsFooter: HTMLElement) => {
          let footerButtons: Object = uitsendingsFooter.querySelectorAll('nav > div');
          let footerOpdatering: HTMLElement = uitsendingsFooter.querySelector('#opdatering');
          let footerRooster: HTMLElement = uitsendingsFooter.querySelector('#rooster');
          let footerStatistieke: HTMLElement = uitsendingsFooter.querySelector('#statistieke');
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
            if (uitsendingsData.querySelector('main p') !== null) {
              var button: HTMLDivElement = uitsendingsMain.querySelector('#opdatering-date div:nth-child(3)');
              var navigation: HTMLElement = uitsendingsMain.querySelector('#opdatering-buttons nav');
              var information: HTMLIFrameElement = uitsendingsMain.querySelector('#opdatering-sheets header iframe');
              var studios = uitsendingsData.querySelector('main p').textContent;
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
        toggleFooter(uitsendingsFooter);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
