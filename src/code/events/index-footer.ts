import { GetDesign } from 'code/utilities/GetDesign';
export namespace IndexFooter {
  export function eventsFor(pageName: String | 'default-footer') {
    const indexBody: HTMLElement = document.getElementById('index-body');
    const indexHeader: HTMLElement = document.getElementById('index-header');
    const indexMain: HTMLElement = document.getElementById('index-main');
    const indexSidebar: HTMLElement = document.getElementById('index-sidebar');
    const indexOverlay: HTMLElement = document.getElementById('index-overlay');
    const indexFooter: HTMLElement = document.getElementById('index-footer');

    const indexData: HTMLElement = document.getElementById('index-data');

    switch (pageName) {
      case 'default-footer':
        //--|▼| Changes button to the clicked icon |▼|--//
        const toggleFooter = (indexFooter: HTMLElement) => {
          let footerButtons: Object = indexFooter.querySelectorAll('nav > div');
          let footerOpdatering: HTMLElement = indexFooter.querySelector('#opdatering');
          let footerRooster: HTMLElement = indexFooter.querySelector('#rooster');
          let footerStatistieke: HTMLElement = indexFooter.querySelector('#statistieke');
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
            if (indexData.querySelector('main p') !== null) {
              var button: HTMLDivElement = indexMain.querySelector('#opdatering-date div:nth-child(3)');
              var navigation: HTMLElement = indexMain.querySelector('#opdatering-buttons nav');
              var information: HTMLIFrameElement = indexMain.querySelector('#opdatering-sheets header iframe');
              var studios = indexData.querySelector('main p').textContent;
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
        toggleFooter(indexFooter);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
