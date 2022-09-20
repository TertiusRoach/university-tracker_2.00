export namespace IndexSidebar {
  export function eventsFor(pageName: String | 'default-sidebar') {
    const indexBody = document.getElementById('index-body');
    const indexHeader = document.getElementById('index-header');
    const indexMain = document.getElementById('index-main');
    const indexSidebar = document.getElementById('index-sidebar');
    let sidebarButtons = document.querySelectorAll('#index-sidebar > div > button > a > h1');
    const indexOverlay = document.getElementById('index-overlay');
    const indexFooter = document.getElementById('index-footer');
    const indexData = document.getElementById('index-data');
    switch (pageName) {
      case 'default-sidebar':
        // Mark the current month as selected
        IndexSidebar.monthHighlight(indexSidebar);
        console.log(`--${pageName} Loaded`);
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
