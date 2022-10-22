import { GetDesign } from 'code/utilities/GetDesign';
export namespace OperasioneelHeader {
  export function eventsFor(pageName: String | 'default-header') {
    const operasioneelBody: HTMLElement = document.getElementById('operasioneel-body');
    const operasioneelHeader: HTMLElement = document.getElementById('operasioneel-header');
    const operasioneelMain: HTMLElement = document.getElementById('operasioneel-main');
    const operasioneelSidebar: HTMLElement = document.getElementById('operasioneel-sidebar');
    const operasioneelOverlay: HTMLElement = document.getElementById('operasioneel-overlay');
    const operasioneelFooter: HTMLElement = document.getElementById('operasioneel-footer');
    const operasioneelData: HTMLElement = document.getElementById('operasioneel-data');
    switch (pageName) {
      case 'default-header':
        //--|▼| Gets the overlay for the header dropdowns |▼|--//
        const showDropdown = (operasioneelHeader: HTMLElement, operasioneelMain: HTMLElement, operasioneelOverlay: HTMLElement) => {
          let operasioneelButton: HTMLDivElement = operasioneelHeader.querySelector('#operasioneel-button div');
          let departementeButton: HTMLDivElement = operasioneelHeader.querySelector('#departemente-button div');

          //--▼ Used jQuery to append dropdowns within the overlay container ▼--//
          function toggleDropdowns(operasioneelMain: HTMLElement, operasioneelOverlay: HTMLElement, enable: HTMLElement, disable: HTMLElement) {
            disable.className = '';
            operasioneelOverlay.innerHTML = '';
            enable.className = 'active';
            operasioneelMain.classList.add('blur');
            operasioneelOverlay.style.display = 'grid';
            operasioneelOverlay.className = 'header-overlay';

            let dropdown: String = enable.parentElement.id.split('-')[0];
            switch (dropdown) {
              case 'operasioneel':
                $(operasioneelOverlay).append(`
                  <div class="background"></div>
                `);
                //--► console.log('Show Uitsendings'); ◄--//
                break;
              case 'departemente':
                $(operasioneelOverlay).append(`
                  <nav id="departemente-dropdown">
                    <div id="akademici">
                      <button>
                        <a href="#" target="_self">
                          <i class="fas fa-graduation-cap"></i>
                          <i class="fad fa-graduation-cap"></i>
                          <h2>Akademici</h2>
                        </a>
                      </button>
                    </div>
                  
                    <div id="administrasie">
                      <button>
                        <a href="https://tertiusroach.github.io/workflow-setup/dist/index.html" target="_self">
                          <i class="fas fa-file-alt"></i>
                          <i class="fad fa-file-alt"></i>
                          <h2>Administrasie</h2>
                        </a>
                      </button>
                    </div>
                  
                    <div id="uitsendings">
                      <button>
                        <a href="#" target="_self">
                          <img src="images/svg/akademia/av-white.svg" alt="AV Logo" />
                          <img src="images/svg/akademia/av-bronze.svg" alt="AV Logo" />
                          <h2>Uitsendings</h2>
                        </a>
                      </button>
                    </div>
                  </nav>

                  <div class="background"></div>
                `);
                //--► console.log('Show Departemente'); ◄--//
                break;
            }

            $('#operasioneel-overlay .background').on('mouseenter', () => {
              enable.className = '';
              operasioneelMain.classList.remove('blur');
              operasioneelOverlay.style.display = 'none';
            });
          }

          $(operasioneelButton).on('mouseenter', () => {
            toggleDropdowns(operasioneelMain, operasioneelOverlay, operasioneelButton, departementeButton);
          });
          $(departementeButton).on('mouseenter', () => {
            toggleDropdowns(operasioneelMain, operasioneelOverlay, departementeButton, operasioneelButton);
          });
        };
        showDropdown(operasioneelHeader, operasioneelMain, operasioneelOverlay);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
