import { GetDesign } from 'code/utilities/GetDesign';
import { GetArray } from 'code/utilities/GetArray';
export namespace AkademiciSidebar {
  export function eventsFor(pageName: String | 'default-sidebar') {
    const akademiciBody: HTMLElement = document.getElementById('akademici-body');
    const akademiciHeader: HTMLElement = document.getElementById('akademici-header');
    const akademiciMain: HTMLElement = document.getElementById('akademici-main');
    const akademiciSidebar: HTMLElement = document.getElementById('akademici-sidebar');
    const akademiciOverlay: HTMLElement = document.getElementById('akademici-overlay');
    const akademiciFooter: HTMLElement = document.getElementById('akademici-footer');
    const akademiciData: HTMLElement = document.getElementById('akademici-data');
    switch (pageName) {
      case 'default-sidebar':
        //--|▼| Highlights the present month |▼|--//
        const defaultSidebarHighlight = (pageName: String, akademiciSidebar: HTMLElement) => {
          let date: String = `${new Date()}`;
          let dateArray: Array<string> = date.split(' ');
          let month: string = dateArray[1];
          switch (month) {
            case 'Jan':
              akademiciSidebar.querySelector(`.${pageName} #january-button button`).classList.add('active');
              break;
            case 'Feb':
              akademiciSidebar.querySelector(`.${pageName} #february-button button`).classList.add('active');
              break;
            case 'Mar':
              akademiciSidebar.querySelector(`.${pageName} #march-button button`).classList.add('active');
              break;
            case 'Apr':
              akademiciSidebar.querySelector(`.${pageName} #april-button button`).classList.add('active');
              break;
            case 'May':
              akademiciSidebar.querySelector(`.${pageName} #may-button button`).classList.add('active');
              break;
            case 'Jun':
              akademiciSidebar.querySelector(`.${pageName} #june-button button`).classList.add('active');
              break;
            case 'Jul':
              akademiciSidebar.querySelector(`.${pageName} #july-button button`).classList.add('active');
              break;
            case 'Aug':
              akademiciSidebar.querySelector(`.${pageName} #august-button button`).classList.add('active');
              break;
            case 'Sep':
              akademiciSidebar.querySelector(`.${pageName} #september-button button`).classList.add('active');
              break;
            case 'Oct':
              akademiciSidebar.querySelector(`.${pageName} #october-button button`).classList.add('active');
              break;
            case 'Nov':
              akademiciSidebar.querySelector(`.${pageName} #november-button button`).classList.add('active');
              break;
            case 'Dec':
              akademiciSidebar.querySelector(`.${pageName} #december-button button`).classList.add('active');
              break;
          }
        };
        defaultSidebarHighlight(pageName, akademiciSidebar);

        //--|▼| Retrieves the overlay for the sidebar buttons |▼|--//
        const sidebarOverlayRetrieve = (akademiciHeader: HTMLElement, akademiciSidebar: HTMLElement, akademiciOverlay: HTMLElement) => {
          $(akademiciSidebar).on('mouseenter', () => {
            if (akademiciOverlay.className !== 'sidebar-overlay') {
              new GetDesign.forPage(`sidebar-overlay`);
            }

            //--▼ Removes highlighted buttons from inside the header ▼--//
            let headerButtons: Object = akademiciHeader.querySelectorAll('nav[id*="button"] div');
            for (let i = 0; i < Object.keys(headerButtons).length; i++) {
              headerButtons[i].className = '';
            }
          });
        };
        sidebarOverlayRetrieve(akademiciHeader, akademiciSidebar, akademiciOverlay);

        //--|▼| Replace links of sidebar for each month to Google Drive |▼|--//
        const defaultSidebarLinks = () => {
          $('#january-button button a').attr('href', new GetArray.Akademici('sidebar')[0].jan);
          $('#february-button button a').attr('href', new GetArray.Akademici('sidebar')[0].feb);
          $('#march-button button a').attr('href', new GetArray.Akademici('sidebar')[0].mar);
          $('#april-button button a').attr('href', new GetArray.Akademici('sidebar')[0].apr);
          $('#may-button button a').attr('href', new GetArray.Akademici('sidebar')[0].may);
          $('#june-button button a').attr('href', new GetArray.Akademici('sidebar')[0].jun);
          $('#july-button button a').attr('href', new GetArray.Akademici('sidebar')[0].jul);
          $('#august-button button a').attr('href', new GetArray.Akademici('sidebar')[0].aug);
          $('#september-button button a').attr('href', new GetArray.Akademici('sidebar')[0].sep);
          $('#october-button button a').attr('href', new GetArray.Akademici('sidebar')[0].oct);
          $('#november-button button a').attr('href', new GetArray.Akademici('sidebar')[0].nov);
          $('#december-button button a').attr('href', new GetArray.Akademici('sidebar')[0].dec);
        };
        defaultSidebarLinks();
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
