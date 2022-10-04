import { GetDesign } from 'code/utilities/GetDesign';
export namespace IndexHeader {
  export function eventsFor(pageName: String | 'default-header') {
    const indexBody: HTMLElement = document.getElementById('index-body');
    const indexHeader: HTMLElement = document.getElementById('index-header');
    let headerUitsendings: HTMLElement = indexHeader.querySelector('#uitsendings-button div button');
    let headerDepartemente: HTMLElement = indexHeader.querySelector('#departemente-button div button');

    const indexMain: HTMLElement = document.getElementById('index-main');
    const indexSidebar: HTMLElement = document.getElementById('index-sidebar');
    const indexOverlay: HTMLElement = document.getElementById('index-overlay');
    let overlayBackground: HTMLElement = indexOverlay.querySelector('.background');
    let uitsendingsDropdown: HTMLElement = indexOverlay.querySelector('#uitsendings-dropdown');
    let departementeDropdown: HTMLElement = indexOverlay.querySelector('#departemente-dropdown');

    const indexFooter: HTMLElement = document.getElementById('index-footer');
    const indexData: HTMLElement = document.getElementById('index-data');

    /*
    let toggleButtons = (visible: HTMLElement, hidden: HTMLElement) => {
      indexOverlay.style.display = 'grid';
      hidden.parentElement.className = '';
      visible.parentElement.className = 'active';

      headerToggle(indexOverlay);
    };
    */
    switch (pageName) {
      case 'default-header':
        //--|▼| Gets the overlay for the header dropdowns |▼|--//
        const headerOverlayRetrieve = (pageName: String, indexHeader: HTMLElement, indexOverlay: HTMLElement) => {
          let uitsendingsButton: HTMLDivElement = indexHeader.querySelector('#uitsendings-button div');
          let departementeButton: HTMLDivElement = indexHeader.querySelector('#departemente-button div');

          //--▼ Toggles between buttons inside header ▼--//
          function toggleButtons(enable: HTMLElement, disable: HTMLElement, indexOverlay: HTMLElement) {
            disable.className = '';
            enable.className = 'active';
            indexOverlay.style.display = 'grid';
          }

          //--▼ 01. Mark active button before fetching the HTML ▼--//
          $(`.${pageName} #uitsendings-button`).on('mouseenter', () => {
            toggleButtons(uitsendingsButton, departementeButton, indexOverlay);
          });
          $(`.${pageName} #departemente-button`).on('mouseenter', () => {
            toggleButtons(departementeButton, uitsendingsButton, indexOverlay);
          });
          //--▼ 02. Dropdown only works if the class is already toggled to 'active' ▼--//
          $(indexHeader).on('mouseenter', () => {
            if (indexOverlay.className !== 'header-overlay') {
              new GetDesign.forPage('header-overlay');
            }
          });
        };
        headerOverlayRetrieve(pageName, indexHeader, indexOverlay);

        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
