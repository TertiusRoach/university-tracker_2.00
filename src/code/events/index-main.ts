export namespace IndexMain {
  export function eventsFor(pageName: String | 'default-main' | 'opdatering-main' | 'rain-main' | 'rooster-main' | 'statistieke-main') {
    const indexBody: HTMLElement = document.getElementById('index-body');
    const indexHeader: HTMLElement = document.getElementById('index-header');
    const indexMain: HTMLElement = document.getElementById('index-main');
    const indexSidebar: HTMLElement = document.getElementById('index-sidebar');
    const indexOverlay: HTMLElement = document.getElementById('index-overlay');
    const indexFooter: HTMLElement = document.getElementById('index-footer');
    const indexData: HTMLElement = document.getElementById('index-data');

    switch (pageName) {
      case 'default-main':
        break;
      case 'opdatering-main':
        const toggleHeader = (indexMain: HTMLElement) => {
          let button: HTMLDivElement = indexMain.querySelector('#opdatering-date div:nth-child(3)');
          let navigation: HTMLElement = indexMain.querySelector('#opdatering-buttons nav');
          let information: HTMLIFrameElement = indexMain.querySelector('#opdatering-sheets header iframe');
          $(button).on('click', () => {
            switch (information.id) {
              case 'original':
                button.classList.remove('hide-original');
                button.classList.add('hide-additional');

                navigation.classList.remove('show-original');
                navigation.classList.add('show-additional');

                information.id = 'additional';
                break;
              case 'additional':
                button.classList.remove('hide-additional');
                button.classList.add('hide-original');

                navigation.classList.remove('show-additional');
                navigation.classList.add('show-original');

                information.id = 'original';
                break;
            }
          });
        };
        toggleHeader(indexMain);
        break;
      case 'rain-main':
        break;
      case 'rooster-main':
        break;
      case 'statistieke-main':
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
