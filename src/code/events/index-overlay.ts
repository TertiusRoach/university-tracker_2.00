export namespace IndexOverlay {
  export function eventsFor(pageName: String | 'default-overlay' | 'sidebar-overlay') {
    switch (pageName) {
      case 'default-overlay':
        break;
      case 'sidebar-overlay':
        console.log(`--${pageName} Loaded`);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
