export namespace IndexOverlay {
  export function eventsFor(pageName: String | 'default-overlay' | 'sidebar-overlay') {
    switch (pageName) {
      case 'default-overlay':
        break;
      case 'sidebar-overlay':
        let indexSidebar = {
          januaryButton: document.querySelector('#index-sidebar #january-button a h1'),
          februaryButton: document.querySelector('#index-sidebar #february-button a h1'),
          marchButton: document.querySelector('#index-sidebar #march-button a h1'),
          aprilButton: document.querySelector('#index-sidebar #april-button a h1'),
          mayButton: document.querySelector('#index-sidebar #may-button a h1'),
          juneButton: document.querySelector('#index-sidebar #june-button a h1'),
        };

        $(indexSidebar.januaryButton).on('mouseenter', () => {
          IndexOverlay.displayOverlay(pageName, 'january');
        });
        $(indexSidebar.februaryButton).on('mouseenter', () => {
          IndexOverlay.displayOverlay(pageName, 'february');
        });
        $(indexSidebar.marchButton).on('mouseenter', () => {
          IndexOverlay.displayOverlay(pageName, 'march');
        });
        console.log(`--${pageName} Loaded`);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }

  export function displayOverlay(
    pageName: String,
    display: 'january' | 'february' | 'march' | 'april' | 'may' | 'june' | 'july' | 'august' | 'september' | 'october' | 'november' | 'december'
  ) {
    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    for (let i = 0; i < months.length; i++) {
      if (months[i] === display) {
        $(`.${pageName} #${display}`).css('display', 'grid');
      } else {
        $(`.${pageName} #${months[i]}`).css('display', 'none');
      }
    }
  }
}
