import { GetDesign } from 'code/utilities/GetDesign';
export namespace AdministrasieOverlay {
  export function eventsFor(pageName: String | 'default-overlay' | 'header-overlay' | 'sidebar-overlay') {
    const akademiciBody: HTMLElement = document.getElementById('akademici-body');
    const akademiciHeader: HTMLElement = document.getElementById('akademici-header');
    const akademiciMain: HTMLElement = document.getElementById('akademici-main');
    const akademiciSidebar: HTMLElement = document.getElementById('akademici-sidebar');
    const akademiciOverlay: HTMLElement = document.getElementById('akademici-overlay');
    const akademiciFooter: HTMLElement = document.getElementById('akademici-footer');
    const akademiciData: HTMLElement = document.getElementById('akademici-data');
    switch (pageName) {
      case 'default-overlay':
        break;
      case 'header-overlay':
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
