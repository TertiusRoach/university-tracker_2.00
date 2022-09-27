import { GetDesign } from 'code/utilities/GetDesign';
export namespace IndexSidebar {
  export function eventsFor(pageName: String | 'default-sidebar') {
    const indexBody: HTMLElement = document.getElementById('index-body');
    const indexHeader: HTMLElement = document.getElementById('index-header');

    let headerButtons: Object = indexHeader.querySelectorAll('nav[id*="button"] div');
    const indexMain: HTMLElement = document.getElementById('index-main');

    const indexSidebar: HTMLElement = document.getElementById('index-sidebar');
    let sidebarButtons: Object = document.querySelectorAll('#index-sidebar > div > button > a > h1');

    const indexOverlay: HTMLElement = document.getElementById('index-overlay');
    let overlayBackground: HTMLElement = indexOverlay.querySelector('.background');

    const indexFooter: HTMLElement = document.getElementById('index-footer');
    const indexData: HTMLElement = document.getElementById('index-data');

    let deactivateButtons = (buttons: Object, container: HTMLElement) => {
      //--|▼| Deactivate header buttons |▼|--//
      for (let i = 0; i < Object.keys(buttons).length; i++) {
        buttons[i].className = '';
      }
      container.style.display = 'none';
    };

    switch (pageName) {
      case 'default-sidebar':
        IndexSidebar.monthHighlight(indexSidebar);
        $(indexSidebar).on('mouseenter', () => {
          deactivateButtons(headerButtons, indexOverlay);
          if (indexOverlay.className !== 'sidebar-overlay') {
            new GetDesign.forPage(`sidebar-overlay`);
          }
        });
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
  export function monthHighlight(indexSidebar: HTMLElement) {
    let januaryButton: HTMLElement = indexSidebar.querySelector('#january-button button');
    let februaryButton: HTMLElement = indexSidebar.querySelector('#february-button button');
    let marchButton: HTMLElement = indexSidebar.querySelector('#march-button button');
    let aprilButton: HTMLElement = indexSidebar.querySelector('#april-button button');
    let mayButton: HTMLElement = indexSidebar.querySelector('#may-button button');
    let juneButton: HTMLElement = indexSidebar.querySelector('#june-button button');
    let julyButton: HTMLElement = indexSidebar.querySelector('#july-button button');
    let augustButton: HTMLElement = indexSidebar.querySelector('#august-button button');
    let septemberButton: HTMLElement = indexSidebar.querySelector('#september-button button');
    let octoberButton: HTMLElement = indexSidebar.querySelector('#october-button button');
    let novemberButton: HTMLElement = indexSidebar.querySelector('#november-button button');
    let decemberButton: HTMLElement = indexSidebar.querySelector('#december-button button');

    const date: String = `${new Date()}`;
    let dateArray: Array<string> = date.split(' ');
    let month: string = dateArray[1];
    switch (month) {
      case 'Jan':
        januaryButton.classList.add('active');
        break;
      case 'Feb':
        februaryButton.classList.add('active');
        break;
      case 'Mar':
        marchButton.classList.add('active');
        break;
      case 'Apr':
        aprilButton.classList.add('active');
        break;
      case 'May':
        mayButton.classList.add('active');
        break;
      case 'Jun':
        juneButton.classList.add('active');
        break;
      case 'Jul':
        julyButton.classList.add('active');
        break;
      case 'Aug':
        augustButton.classList.add('active');
        break;
      case 'Sep':
        septemberButton.classList.add('active');
        break;
      case 'Oct':
        octoberButton.classList.add('active');
        break;
      case 'Nov':
        novemberButton.classList.add('active');
        break;
      case 'Dec':
        decemberButton.classList.add('active');
        break;
    }
  }
}
