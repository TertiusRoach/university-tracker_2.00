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

    let toggleButtons = (visible: HTMLElement, hidden: HTMLElement) => {
      indexOverlay.style.display = 'grid';
      hidden.parentElement.className = '';
      visible.parentElement.className = 'active';

      headerToggle(indexOverlay);
    };
    switch (pageName) {
      case 'default-header':
        $(indexHeader).on('mouseenter', () => {
          if (indexOverlay.className !== 'header-overlay') {
            new GetDesign.forPage('header-overlay');
          }
        });
        $(headerUitsendings).on('mouseenter', () => {
          toggleButtons(headerUitsendings, headerDepartemente);
        });
        $(headerDepartemente).on('mouseenter', () => {
          toggleButtons(headerDepartemente, headerUitsendings);
        });
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
  export function headerToggle(indexOverlay: HTMLElement) {
    let activeButton = document.querySelector('#index-header nav .active').parentElement.id.split('-')[0];
    var uitsendingsDropdown: HTMLElement = indexOverlay.querySelector('#uitsendings-dropdown');
    var departementeDropdown: HTMLElement = indexOverlay.querySelector('#departemente-dropdown');
    switch (activeButton) {
      case 'uitsendings':
        uitsendingsDropdown.style.display = 'grid';
        departementeDropdown.style.display = 'none';
        break;
      case 'departemente':
        departementeDropdown.style.display = 'grid';
        uitsendingsDropdown.style.display = 'none';
        break;
      default:
        indexOverlay.style.display = 'none';
    }
  }
}
