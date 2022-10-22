import { GetDesign } from 'code/utilities/GetDesign';
export namespace OperasioneelSidebar {
  export function eventsFor(pageName: String | 'default-sidebar') {
    const operasioneelBody: HTMLElement = document.getElementById('operasioneel-body');
    const operasioneelHeader: HTMLElement = document.getElementById('operasioneel-header');
    const operasioneelMain: HTMLElement = document.getElementById('operasioneel-main');
    const operasioneelSidebar: HTMLElement = document.getElementById('operasioneel-sidebar');
    const operasioneelOverlay: HTMLElement = document.getElementById('operasioneel-overlay');
    const operasioneelFooter: HTMLElement = document.getElementById('operasioneel-footer');
    const operasioneelData: HTMLElement = document.getElementById('operasioneel-data');
    switch (pageName) {
      case 'default-sidebar':
        //--|▼| Highlights the present month |▼|--//
        const defaultSidebarHighlight = (pageName: String, operasioneelSidebar: HTMLElement) => {
          let date: String = `${new Date()}`;
          let dateArray: Array<string> = date.split(' ');
          let month: string = dateArray[1];
          switch (month) {
            case 'Jan':
              operasioneelSidebar.querySelector(`.${pageName} #january-button button`).classList.add('active');
              break;
            case 'Feb':
              operasioneelSidebar.querySelector(`.${pageName} #february-button button`).classList.add('active');
              break;
            case 'Mar':
              operasioneelSidebar.querySelector(`.${pageName} #march-button button`).classList.add('active');
              break;
            case 'Apr':
              operasioneelSidebar.querySelector(`.${pageName} #april-button button`).classList.add('active');
              break;
            case 'May':
              operasioneelSidebar.querySelector(`.${pageName} #may-button button`).classList.add('active');
              break;
            case 'Jun':
              operasioneelSidebar.querySelector(`.${pageName} #june-button button`).classList.add('active');
              break;
            case 'Jul':
              operasioneelSidebar.querySelector(`.${pageName} #july-button button`).classList.add('active');
              break;
            case 'Aug':
              operasioneelSidebar.querySelector(`.${pageName} #august-button button`).classList.add('active');
              break;
            case 'Sep':
              operasioneelSidebar.querySelector(`.${pageName} #september-button button`).classList.add('active');
              break;
            case 'Oct':
              operasioneelSidebar.querySelector(`.${pageName} #october-button button`).classList.add('active');
              break;
            case 'Nov':
              operasioneelSidebar.querySelector(`.${pageName} #november-button button`).classList.add('active');
              break;
            case 'Dec':
              operasioneelSidebar.querySelector(`.${pageName} #december-button button`).classList.add('active');
              break;
          }
        };
        defaultSidebarHighlight(pageName, operasioneelSidebar);

        //--|▼| Retrieves the overlay for the sidebar buttons |▼|--//
        const sidebarOverlayRetrieve = (operasioneelHeader: HTMLElement, operasioneelSidebar: HTMLElement, operasioneelOverlay: HTMLElement) => {
          $(operasioneelSidebar).on('mouseenter', () => {
            if (operasioneelOverlay.className !== 'sidebar-overlay') {
              new GetDesign.forPage(`sidebar-overlay`);
            }

            //--▼ Removes highlighted buttons from inside the header ▼--//
            let headerButtons: Object = operasioneelHeader.querySelectorAll('nav[id*="button"] div');
            for (let i = 0; i < Object.keys(headerButtons).length; i++) {
              headerButtons[i].className = '';
            }
          });
        };
        sidebarOverlayRetrieve(operasioneelHeader, operasioneelSidebar, operasioneelOverlay);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
