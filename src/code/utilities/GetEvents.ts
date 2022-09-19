import { IndexBody } from 'code/events/index-body';
import { IndexHeader } from 'code/events/index-header';
import { IndexMain } from 'code/events/index-main';
import { IndexSidebar } from 'code/events/index-sidebar';
import { IndexFooter } from 'code/events/index-footer';
import { IndexOverlay } from 'code/events/index-overlay';
import { IndexData } from 'code/events/index-data';

import { UitsendingsBody } from 'code/events/uitsendings-body';
import { UitsendingsHeader } from 'code/events/uitsendings-header';
import { UitsendingsMain } from 'code/events/uitsendings-main';
import { UitsendingsSidebar } from 'code/events/uitsendings-sidebar';
import { UitsendingsFooter } from 'code/events/uitsendings-footer';
import { UitsendingsOverlay } from 'code/events/uitsendings-overlay';
import { UitsendingsData } from 'code/events/uitsendings-data';

import { AkademiciBody } from 'code/events/akademici-body';
import { AkademiciHeader } from 'code/events/akademici-header';
import { AkademiciMain } from 'code/events/akademici-main';
import { AkademiciSidebar } from 'code/events/akademici-sidebar';
import { AkademiciFooter } from 'code/events/akademici-footer';
import { AkademiciOverlay } from 'code/events/akademici-overlay';
import { AkademiciData } from 'code/events/akademici-data';

import { AdministrasieBody } from 'code/events/administrasie-body';
import { AdministrasieHeader } from 'code/events/administrasie-header';
import { AdministrasieMain } from 'code/events/administrasie-main';
import { AdministrasieSidebar } from 'code/events/administrasie-sidebar';
import { AdministrasieFooter } from 'code/events/administrasie-footer';
import { AdministrasieOverlay } from 'code/events/administrasie-overlay';
import { AdministrasieData } from 'code/events/administrasie-data';

import { OperasioneelBody } from 'code/events/operasioneel-body';
import { OperasioneelHeader } from 'code/events/operasioneel-header';
import { OperasioneelMain } from 'code/events/operasioneel-main';
import { OperasioneelSidebar } from 'code/events/operasioneel-sidebar';
import { OperasioneelFooter } from 'code/events/operasioneel-footer';
import { OperasioneelOverlay } from 'code/events/operasioneel-overlay';
import { OperasioneelData } from 'code/events/operasioneel-data';

export namespace GetEvents {
  export class forIndex {
    constructor(pageName: String) {
      const block: String = pageName.split('-')[1];
      switch (block) {
        case 'body':
          IndexBody.eventsFor(pageName);
          break;
        case 'header':
          IndexHeader.eventsFor(pageName);
          break;
        case 'main':
          IndexMain.eventsFor(pageName);
          break;
        case 'sidebar':
          IndexSidebar.eventsFor(pageName);
          break;
        case 'footer':
          IndexFooter.eventsFor(pageName);
          break;
        case 'overlay':
          IndexOverlay.eventsFor(pageName);
          break;
        case 'data':
          IndexData.eventsFor(pageName);
          break;
      }
      //--► console.log(`--${pageName} Loaded`); ◄--//
    }
  }
  export class forUitsendings {
    constructor(pageName: String) {
      const block: String = pageName.split('-')[1];
      switch (block) {
        case 'body':
          UitsendingsBody.eventsFor(pageName);
          break;
        case 'header':
          UitsendingsHeader.eventsFor(pageName);
          break;
        case 'main':
          UitsendingsMain.eventsFor(pageName);
          break;
        case 'sidebar':
          UitsendingsSidebar.eventsFor(pageName);
          break;
        case 'footer':
          UitsendingsFooter.eventsFor(pageName);
          break;
        case 'overlay':
          UitsendingsOverlay.eventsFor(pageName);
          break;
        case 'data':
          UitsendingsData.eventsFor(pageName);
          break;
      }
      //--► console.log(`--${pageName} Loaded`); ◄--//
    }
  }
  export class forAkademici {
    constructor(pageName: String) {
      const block: String = pageName.split('-')[1];
      switch (block) {
        case 'body':
          AkademiciBody.eventsFor(pageName);
          break;
        case 'header':
          AkademiciHeader.eventsFor(pageName);
          break;
        case 'main':
          AkademiciMain.eventsFor(pageName);
          break;
        case 'sidebar':
          AkademiciSidebar.eventsFor(pageName);
          break;
        case 'footer':
          AkademiciFooter.eventsFor(pageName);
          break;
        case 'overlay':
          AkademiciOverlay.eventsFor(pageName);
          break;
        case 'data':
          AkademiciData.eventsFor(pageName);
          break;
      }
      //--► console.log(`--${pageName} Loaded`); ◄--//
    }
  }
  export class forAdministrasie {
    constructor(pageName: String) {
      const block: String = pageName.split('-')[1];
      switch (block) {
        case 'body':
          AdministrasieBody.eventsFor(pageName);
          break;
        case 'header':
          AdministrasieHeader.eventsFor(pageName);
          break;
        case 'main':
          AdministrasieMain.eventsFor(pageName);
          break;
        case 'sidebar':
          AdministrasieSidebar.eventsFor(pageName);
          break;
        case 'footer':
          AdministrasieFooter.eventsFor(pageName);
          break;
        case 'overlay':
          AdministrasieOverlay.eventsFor(pageName);
          break;
        case 'data':
          AdministrasieData.eventsFor(pageName);
          break;
      }
      //--► console.log(`--${pageName} Loaded`); ◄--//
    }
  }
  export class forOperasioneel {
    constructor(pageName: String) {
      const block: String = pageName.split('-')[1];
      switch (block) {
        case 'body':
          OperasioneelBody.eventsFor(pageName);
          break;
        case 'header':
          OperasioneelHeader.eventsFor(pageName);
          break;
        case 'main':
          OperasioneelMain.eventsFor(pageName);
          break;
        case 'sidebar':
          OperasioneelSidebar.eventsFor(pageName);
          break;
        case 'footer':
          OperasioneelFooter.eventsFor(pageName);
          break;
        case 'overlay':
          OperasioneelOverlay.eventsFor(pageName);
          break;
        case 'data':
          OperasioneelData.eventsFor(pageName);
          break;
      }
      //--► console.log(`--${pageName} Loaded`); ◄--//
    }
  }
}
