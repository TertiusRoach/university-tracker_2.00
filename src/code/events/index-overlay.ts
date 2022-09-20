export namespace IndexOverlay {
  export function eventsFor(pageName: String | 'default-overlay' | 'sidebar-overlay') {
    const indexBody = document.getElementById('index-body');
    const indexHeader = document.getElementById('index-header');
    const indexMain = document.getElementById('index-main');
    const indexSidebar = document.getElementById('index-sidebar');
    let sidebarButtons = document.querySelectorAll('#index-sidebar > div > button > a > h1');
    const indexOverlay = document.getElementById('index-overlay');
    const indexFooter = document.getElementById('index-footer');
    const indexData = document.getElementById('index-data');

    switch (pageName) {
      case 'default-overlay':
        break;
      case 'sidebar-overlay':
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
}
