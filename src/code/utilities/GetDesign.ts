import { GetEvents } from './GetEvents';
export namespace GetDesign {
  export class forPage {
    constructor(pageName: String) {
      const page: String = window.location.href.split('/').pop().split('.')[0];
      const block: String = pageName.split('-')[1];
      const dist: String = fetchURI(window.location.href);
      const blockElement: HTMLElement = document.querySelector(`#${page}-${block}`);
      $.get(`${dist}/design/html/${blockElement.id}/${pageName}.html`, function (callback) {
        applyStyle(blockElement, pageName);
        $(blockElement).html(callback);

        switch (page) {
          case 'index':
            new GetEvents.forIndex(pageName);
            //--► console.log(`--${pageName} Loaded`); ◄--//
            break;
          case 'uitsendings':
            new GetEvents.forUitsendings(pageName);
            //--► console.log(`--${pageName} Loaded`); ◄--//
            break;
          case 'akademici':
            new GetEvents.forAkademici(pageName);
            //--► console.log(`--${pageName} Loaded`); ◄--//
            break;
          case 'administrasie':
            new GetEvents.forAdministrasie(pageName);
            //--► console.log(`--${pageName} Loaded`); ◄--//
            break;
          case 'operasioneel':
            new GetEvents.forOperasioneel(pageName);
            //--► console.log(`--${pageName} Loaded`); ◄--//
            break;
        }
      });
    }
  }

  function applyStyle(block: HTMLElement, pageName: String) {
    block.className = '';
    block.className = `${pageName}`;
  }
  function fetchURI(url: String) {
    //--|►| Online URI = Uniform Resource Identifier |◄|--//
    switch (url.slice(0, 5)) {
      case 'https':
        let href = url.split('/');
        //--► console.log('This page is Online'); ◄--//
        return `${href[0]}//${href[2]}/${href[3]}/dist`;
      case 'http:':
        //--► console.log('This page is Local'); ◄--//
        return '../../../dist';
    }
  }
}
