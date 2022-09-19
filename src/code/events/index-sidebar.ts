export namespace IndexSidebar {
  export function eventsFor(pageName: String | 'default-sidebar') {
    switch (pageName) {
      case 'default-sidebar':
        const defaultSidebar = document.querySelector(`.${pageName}`);

        const januaryButton = document.getElementById('january-button');

        const indexOverlay = document.getElementById('index-overlay');
        $(`.${pageName}`).on('mouseenter', () => {
          indexOverlay.style.display = 'grid';
        });
        console.log(`--${pageName} Loaded`);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
