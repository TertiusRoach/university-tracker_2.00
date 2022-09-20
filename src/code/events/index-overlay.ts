export namespace IndexOverlay {
  export function eventsFor(pageName: String | 'default-overlay' | 'sidebar-overlay') {
    const indexBody = document.getElementById('index-body');
    const indexHeader = document.getElementById('index-header');
    const indexMain = document.getElementById('index-main');
    const indexSidebar = document.getElementById('index-sidebar');
    let sidebarButtons = document.querySelectorAll('#index-sidebar > div > button > a > h1');
    let activeButtons = document.querySelectorAll('#index-sidebar > div');
    const indexOverlay = document.getElementById('index-overlay');
    const indexFooter = document.getElementById('index-footer');
    const indexData = document.getElementById('index-data');

    switch (pageName) {
      case 'default-overlay':
        break;
      case 'sidebar-overlay':
        IndexOverlay.monthHighlight(indexOverlay);
        $(sidebarButtons).on('mouseenter', () => {
          indexOverlay.style.display = 'grid';
        });
        $(sidebarButtons[0]).on('mouseenter', () => {
          displayOverlay(pageName, 'january');
        });
        $(sidebarButtons[1]).on('mouseenter', () => {
          displayOverlay(pageName, 'february');
        });
        $(sidebarButtons[2]).on('mouseenter', () => {
          displayOverlay(pageName, 'march');
        });
        $(sidebarButtons[3]).on('mouseenter', () => {
          displayOverlay(pageName, 'april');
        });
        $(sidebarButtons[4]).on('mouseenter', () => {
          displayOverlay(pageName, 'may');
        });
        $(sidebarButtons[5]).on('mouseenter', () => {
          displayOverlay(pageName, 'june');
        });
        $(sidebarButtons[6]).on('mouseenter', () => {
          displayOverlay(pageName, 'july');
        });
        $(sidebarButtons[7]).on('mouseenter', () => {
          displayOverlay(pageName, 'august');
        });
        $(sidebarButtons[8]).on('mouseenter', () => {
          displayOverlay(pageName, 'september');
        });
        $(sidebarButtons[9]).on('mouseenter', () => {
          displayOverlay(pageName, 'october');
        });
        $(sidebarButtons[10]).on('mouseenter', () => {
          displayOverlay(pageName, 'november');
        });
        $(sidebarButtons[11]).on('mouseenter', () => {
          displayOverlay(pageName, 'december');
        });
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }

  export function displayOverlay(
    pageName: String,
    display: 'january' | 'february' | 'march' | 'april' | 'may' | 'june' | 'july' | 'august' | 'september' | 'october' | 'november' | 'december'
  ) {
    var month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    for (let i = 0; i < month.length; i++) {
      $(`.${pageName} #${month[i]}`).css('display', 'none');
    }
    $(`.${pageName} #${display}`).css('display', 'grid');
  }
  export function monthHighlight(indexOverlay: HTMLElement) {
    let januaryButton: HTMLElement = indexOverlay.querySelector('#january');
    let februaryButton: HTMLElement = indexOverlay.querySelector('#february');
    let marchButton: HTMLElement = indexOverlay.querySelector('#march');
    let aprilButton: HTMLElement = indexOverlay.querySelector('#april');
    let mayButton: HTMLElement = indexOverlay.querySelector('#may');
    let juneButton: HTMLElement = indexOverlay.querySelector('#june');
    let julyButton: HTMLElement = indexOverlay.querySelector('#july');
    let augustButton: HTMLElement = indexOverlay.querySelector('#august');
    let septemberButton: HTMLElement = indexOverlay.querySelector('#september');
    let octoberButton: HTMLElement = indexOverlay.querySelector('#october');
    let novemberButton: HTMLElement = indexOverlay.querySelector('#november');
    let decemberButton: HTMLElement = indexOverlay.querySelector('#december');

    const date: String = `${new Date()}`;
    let dateArray: Array<string> = date.split(' ');
    let month: string = dateArray[1];
    switch (month) {
      case 'Jan':
        januaryButton.classList.remove('false');
        januaryButton.classList.add('true');
        break;
      case 'Feb':
        februaryButton.classList.remove('false');
        februaryButton.classList.add('true');
        break;
      case 'Mar':
        marchButton.classList.remove('false');
        marchButton.classList.add('true');
        break;
      case 'Apr':
        aprilButton.classList.remove('false');
        aprilButton.classList.add('true');
        break;
      case 'May':
        mayButton.classList.remove('false');
        mayButton.classList.add('true');
        break;
      case 'Jun':
        juneButton.classList.remove('false');
        juneButton.classList.add('true');
        break;
      case 'Jul':
        julyButton.classList.remove('false');
        julyButton.classList.add('true');
        break;
      case 'Aug':
        augustButton.classList.remove('false');
        augustButton.classList.add('true');
        break;
      case 'Sep':
        septemberButton.classList.remove('false');
        septemberButton.classList.add('true');
        break;
      case 'Oct':
        octoberButton.classList.remove('false');
        octoberButton.classList.add('true');
        break;
      case 'Nov':
        novemberButton.classList.remove('false');
        novemberButton.classList.add('true');
        break;
      case 'Dec':
        decemberButton.classList.remove('false');
        decemberButton.classList.add('true');
        break;
    }
  }
}
