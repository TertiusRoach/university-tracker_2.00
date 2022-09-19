export namespace IndexOverlay {
  export function eventsFor(pageName: String | 'default-overlay' | 'sidebar-overlay') {
    switch (pageName) {
      case 'default-overlay':
        break;
      case 'sidebar-overlay':
        let displayOverlay = () => {};
        $('#index-sidebar #january-button a h1').on('mouseenter', () => {
          IndexOverlay.displayOverlay(pageName, 'january');
          // $(`.${pageName} #january`).css('display', 'grid');
        });
        $('#index-sidebar #february-button a h1').on('mouseenter', () => {
          IndexOverlay.displayOverlay(pageName, 'february');
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
