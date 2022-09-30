export namespace IndexFooter {
  export function eventsFor(pageName: String | 'default-footer') {
    const indexBody: HTMLElement = document.getElementById('index-body');
    const indexHeader: HTMLElement = document.getElementById('index-header');
    const indexMain: HTMLElement = document.getElementById('index-main');
    const indexSidebar: HTMLElement = document.getElementById('index-sidebar');
    const indexOverlay: HTMLElement = document.getElementById('index-overlay');
    const indexFooter: HTMLElement = document.getElementById('index-footer');
    let footerButtons: Object = indexFooter.querySelectorAll('nav > div');
    let footerOpdatering: HTMLElement = indexFooter.querySelector('#opdatering');
    let footerRooster: HTMLElement = indexFooter.querySelector('#rooster');
    let footerStatistieke: HTMLElement = indexFooter.querySelector('#statistieke');

    const indexData: HTMLElement = document.getElementById('index-data');

    let toggleButtons = (buttons: Object, container: HTMLElement) => {
      //--|▼| Deactivate Header Buttons |▼|--//
      for (let i = 0; i < Object.keys(buttons).length; i++) {
        buttons[i].className = '';
      }

      //--|▼| Highlight Header Button |▼|--//
      container.querySelector('div').className = 'active';
    };

    switch (pageName) {
      case 'default-footer':
        $(footerOpdatering).on('click', () => {
          toggleButtons(footerButtons, footerOpdatering);
        });
        $(footerRooster).on('click', () => {
          toggleButtons(footerButtons, footerRooster);
        });
        $(footerStatistieke).on('click', () => {
          toggleButtons(footerButtons, footerStatistieke);
        });
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
