export namespace UitsendingsData {
  const uitsendingsBody: HTMLElement = document.getElementById('uitsendings-body');
  const uitsendingsHeader: HTMLElement = document.getElementById('uitsendings-header');
  const uitsendingsMain: HTMLElement = document.getElementById('uitsendings-main');
  const uitsendingsSidebar: HTMLElement = document.getElementById('uitsendings-sidebar');
  const uitsendingsOverlay: HTMLElement = document.getElementById('uitsendings-overlay');
  const uitsendingsFooter: HTMLElement = document.getElementById('uitsendings-footer');
  const uitsendingsData: HTMLElement = document.getElementById('uitsendings-data');
  export function eventsFor(pageName: String | 'default-data') {
    switch (pageName) {
      case 'default-data':
        let fadeLoader = () => {
          $('#loading-screen').fadeTo('slow', 0);
          var removeLoader = () => {
            uitsendingsBody.querySelector('#loading-screen').remove();
          };
          setTimeout(removeLoader, 2000);
        };
        setTimeout(fadeLoader, 3000);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
