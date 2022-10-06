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
            toggleButtons(footerButtons, footerOpdatering);
          });
          $(footerRooster).on('click', () => {
            toggleButtons(footerButtons, footerRooster);
          });
          $(footerStatistieke).on('click', () => {
            toggleButtons(footerButtons, footerStatistieke);
          });
        };
        toggleFooter(indexFooter);

        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
