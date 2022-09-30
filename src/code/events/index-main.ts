export namespace IndexMain {
  export function eventsFor(pageName: String | 'default-main' | 'login-main' | 'opdatering-main' | 'rooster-main' | 'statistieke-main') {
    switch (pageName) {
      case 'default-main':
        break;
      case 'login-main':
        console.log(`--${pageName} Loaded`);
        break;
      case 'opdatering-main':
        console.log(`--${pageName} Loaded`);
        break;
      case 'rooster-main':
        break;
      case 'statistieke-main':
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
