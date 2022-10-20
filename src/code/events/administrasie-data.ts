import { GetDesign } from 'code/utilities/GetDesign';
export namespace AdministrasieData {
  export function eventsFor(pageName: String | 'default-data') {
    const administrasieBody: HTMLElement = document.getElementById('administrasie-body');
    const administrasieHeader: HTMLElement = document.getElementById('administrasie-header');
    const administrasieMain: HTMLElement = document.getElementById('administrasie-main');
    const administrasieSidebar: HTMLElement = document.getElementById('administrasie-sidebar');
    const administrasieOverlay: HTMLElement = document.getElementById('administrasie-overlay');
    const administrasieFooter: HTMLElement = document.getElementById('administrasie-footer');
    const administrasieData: HTMLElement = document.getElementById('administrasie-data');
    switch (pageName) {
      case 'default-data':
        let fadeLoader = () => {
          $('#loading-screen').fadeTo('slow', 0);
          var removeLoader = () => {
            administrasieBody.querySelector('#loading-screen').remove();
          };
          setTimeout(removeLoader, 2000);
        };
        setTimeout(fadeLoader, 3000);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
