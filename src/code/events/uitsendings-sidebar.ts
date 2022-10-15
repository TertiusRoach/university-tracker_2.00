import { GetDesign } from 'code/utilities/GetDesign';
export namespace UitsendingsSidebar {
  export function eventsFor(pageName: String | 'default-sidebar') {
    const uitsendingsBody: HTMLElement = document.getElementById('uitsendings-body');
    const uitsendingsHeader: HTMLElement = document.getElementById('uitsendings-header');
    const uitsendingsMain: HTMLElement = document.getElementById('uitsendings-main');
    const uitsendingsSidebar: HTMLElement = document.getElementById('uitsendings-sidebar');
    const uitsendingsOverlay: HTMLElement = document.getElementById('uitsendings-overlay');
    const uitsendingsFooter: HTMLElement = document.getElementById('uitsendings-footer');
    const uitsendingsData: HTMLElement = document.getElementById('uitsendings-data');
    switch (pageName) {
      case 'default-sidebar':
        //--|▼| Highlights the present month |▼|--//
        const defaultSidebarHighlight = (pageName: String, uitsendingsSidebar: HTMLElement) => {
          let date: String = `${new Date()}`;
          let dateArray: Array<string> = date.split(' ');
          let month: string = dateArray[1];
          switch (month) {
            case 'Jan':
              uitsendingsSidebar.querySelector(`.${pageName} #january-button button`).classList.add('active');
              break;
            case 'Feb':
              uitsendingsSidebar.querySelector(`.${pageName} #february-button button`).classList.add('active');
              break;
            case 'Mar':
              uitsendingsSidebar.querySelector(`.${pageName} #march-button button`).classList.add('active');
              break;
            case 'Apr':
              uitsendingsSidebar.querySelector(`.${pageName} #april-button button`).classList.add('active');
              break;
            case 'May':
              uitsendingsSidebar.querySelector(`.${pageName} #may-button button`).classList.add('active');
              break;
            case 'Jun':
              uitsendingsSidebar.querySelector(`.${pageName} #june-button button`).classList.add('active');
              break;
            case 'Jul':
              uitsendingsSidebar.querySelector(`.${pageName} #july-button button`).classList.add('active');
              break;
            case 'Aug':
              uitsendingsSidebar.querySelector(`.${pageName} #august-button button`).classList.add('active');
              break;
            case 'Sep':
              uitsendingsSidebar.querySelector(`.${pageName} #september-button button`).classList.add('active');
              break;
            case 'Oct':
              uitsendingsSidebar.querySelector(`.${pageName} #october-button button`).classList.add('active');
              break;
            case 'Nov':
              uitsendingsSidebar.querySelector(`.${pageName} #november-button button`).classList.add('active');
              break;
            case 'Dec':
              uitsendingsSidebar.querySelector(`.${pageName} #december-button button`).classList.add('active');
              break;
          }
        };
        defaultSidebarHighlight(pageName, uitsendingsSidebar);

        //--|▼| Retrieves the overlay for the sidebar buttons |▼|--//
        const sidebarOverlayRetrieve = (uitsendingsHeader: HTMLElement, uitsendingsSidebar: HTMLElement, uitsendingsOverlay: HTMLElement) => {
          $(uitsendingsSidebar).on('mouseenter', () => {
            if (uitsendingsOverlay.className !== 'sidebar-overlay') {
              new GetDesign.forPage(`sidebar-overlay`);
            }

            //--▼ Removes highlighted buttons from inside the header ▼--//
            let headerButtons: Object = uitsendingsHeader.querySelectorAll('nav[id*="button"] div');
            for (let i = 0; i < Object.keys(headerButtons).length; i++) {
              headerButtons[i].className = '';
            }
          });
        };
        sidebarOverlayRetrieve(uitsendingsHeader, uitsendingsSidebar, uitsendingsOverlay);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
