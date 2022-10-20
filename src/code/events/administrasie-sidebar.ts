import { GetDesign } from 'code/utilities/GetDesign';
export namespace AdministrasieSidebar {
  export function eventsFor(pageName: String | 'default-sidebar') {
    const administrasieBody: HTMLElement = document.getElementById('administrasie-body');
    const administrasieHeader: HTMLElement = document.getElementById('administrasie-header');
    const administrasieMain: HTMLElement = document.getElementById('administrasie-main');
    const administrasieSidebar: HTMLElement = document.getElementById('administrasie-sidebar');
    const administrasieOverlay: HTMLElement = document.getElementById('administrasie-overlay');
    const administrasieFooter: HTMLElement = document.getElementById('administrasie-footer');
    const administrasieData: HTMLElement = document.getElementById('administrasie-data');
    switch (pageName) {
      case 'default-sidebar':
        //--|▼| Highlights the present month |▼|--//
        const defaultSidebarHighlight = (pageName: String, administrasieSidebar: HTMLElement) => {
          let date: String = `${new Date()}`;
          let dateArray: Array<string> = date.split(' ');
          let month: string = dateArray[1];
          switch (month) {
            case 'Jan':
              administrasieSidebar.querySelector(`.${pageName} #january-button button`).classList.add('active');
              break;
            case 'Feb':
              administrasieSidebar.querySelector(`.${pageName} #february-button button`).classList.add('active');
              break;
            case 'Mar':
              administrasieSidebar.querySelector(`.${pageName} #march-button button`).classList.add('active');
              break;
            case 'Apr':
              administrasieSidebar.querySelector(`.${pageName} #april-button button`).classList.add('active');
              break;
            case 'May':
              administrasieSidebar.querySelector(`.${pageName} #may-button button`).classList.add('active');
              break;
            case 'Jun':
              administrasieSidebar.querySelector(`.${pageName} #june-button button`).classList.add('active');
              break;
            case 'Jul':
              administrasieSidebar.querySelector(`.${pageName} #july-button button`).classList.add('active');
              break;
            case 'Aug':
              administrasieSidebar.querySelector(`.${pageName} #august-button button`).classList.add('active');
              break;
            case 'Sep':
              administrasieSidebar.querySelector(`.${pageName} #september-button button`).classList.add('active');
              break;
            case 'Oct':
              administrasieSidebar.querySelector(`.${pageName} #october-button button`).classList.add('active');
              break;
            case 'Nov':
              administrasieSidebar.querySelector(`.${pageName} #november-button button`).classList.add('active');
              break;
            case 'Dec':
              administrasieSidebar.querySelector(`.${pageName} #december-button button`).classList.add('active');
              break;
          }
        };
        defaultSidebarHighlight(pageName, administrasieSidebar);

        //--|▼| Retrieves the overlay for the sidebar buttons |▼|--//
        const sidebarOverlayRetrieve = (administrasieHeader: HTMLElement, administrasieSidebar: HTMLElement, administrasieOverlay: HTMLElement) => {
          $(administrasieSidebar).on('mouseenter', () => {
            if (administrasieOverlay.className !== 'sidebar-overlay') {
              new GetDesign.forPage(`sidebar-overlay`);
            }

            //--▼ Removes highlighted buttons from inside the header ▼--//
            let headerButtons: Object = administrasieHeader.querySelectorAll('nav[id*="button"] div');
            for (let i = 0; i < Object.keys(headerButtons).length; i++) {
              headerButtons[i].className = '';
            }
          });
        };
        sidebarOverlayRetrieve(administrasieHeader, administrasieSidebar, administrasieOverlay);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
