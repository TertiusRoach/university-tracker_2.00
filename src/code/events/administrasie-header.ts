import { GetDesign } from 'code/utilities/GetDesign';
export namespace AdministrasieHeader {
  export function eventsFor(pageName: String | 'default-header') {
    const administrasieBody: HTMLElement = document.getElementById('administrasie-body');
    const administrasieHeader: HTMLElement = document.getElementById('administrasie-header');
    const administrasieMain: HTMLElement = document.getElementById('administrasie-main');
    const administrasieSidebar: HTMLElement = document.getElementById('administrasie-sidebar');
    const administrasieOverlay: HTMLElement = document.getElementById('administrasie-overlay');
    const administrasieFooter: HTMLElement = document.getElementById('administrasie-footer');
    const administrasieData: HTMLElement = document.getElementById('administrasie-data');
    switch (pageName) {
      case 'default-header':
        //--|▼| Gets the overlay for the header dropdowns |▼|--//
        const showDropdown = (administrasieHeader: HTMLElement, administrasieMain: HTMLElement, administrasieOverlay: HTMLElement) => {
          let administrasieButton: HTMLDivElement = administrasieHeader.querySelector('#administrasie-button div');
          let departementeButton: HTMLDivElement = administrasieHeader.querySelector('#departemente-button div');

          console.log(administrasieButton);
          //--▼ Used jQuery to append dropdowns within the overlay container ▼--//
          function toggleDropdowns(administrasieMain: HTMLElement, administrasieOverlay: HTMLElement, enable: HTMLElement, disable: HTMLElement) {
            disable.className = '';
            administrasieOverlay.innerHTML = '';
            enable.className = 'active';
            administrasieMain.classList.add('blur');
            administrasieOverlay.style.display = 'grid';
            administrasieOverlay.className = 'header-overlay';

            let dropdown: String = enable.parentElement.id.split('-')[0];
            switch (dropdown) {
              case 'administrasie':
                $(administrasieOverlay).append(`
                  <nav id="administrasie-dropdown">
                    <div id="registers">
                      <button>
                        <a href="#" target="_blank">
                          <i class="fas fa-clipboard-user"></i>
                          <i class="fad fa-clipboard-user"></i>
                          <h2>Registers</h2>
                        </a>
                      </button>
                    </div>
                  
                    <div id="beplanning">
                      <button>
                        <a href="#" target="_blank">
                          <i class="fas fa-users"></i>
                          <i class="fad fa-users"></i>
                          <h2>Beplanning</h2>
                        </a>
                      </button>
                    </div>
                  </nav>

                  <div class="background"></div>
                `);
                //--► console.log('Show Uitsendings'); ◄--//
                break;
              case 'departemente':
                $(administrasieOverlay).append(`
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
                  
                    <div id="uitsendings">
                      <button>
                        <a href="#" target="_self">
                          <img src="images/svg/akademia/av-white.svg" alt="AV Logo" />
                          <img src="images/svg/akademia/av-bronze.svg" alt="AV Logo" />
                          <h2>Uitsendings</h2>
                        </a>
                      </button>
                    </div>
                  
                    <div id="operasioneel">
                      <button>
                        <a href="#" target="_self">
                          <i class="fas fa-chart-network"></i>
                          <i class="fad fa-chart-network"></i>
                          <h2>Operasioneel</h2>
                        </a>
                      </button>
                    </div>
                  </nav>

                  <div class="background"></div>
                `);
                //--► console.log('Show Departemente'); ◄--//
                break;
            }

            $('#administrasie-overlay .background').on('mouseenter', () => {
              enable.className = '';
              administrasieMain.classList.remove('blur');
              administrasieOverlay.style.display = 'none';
            });
          }

          $(administrasieButton).on('mouseenter', () => {
            toggleDropdowns(administrasieMain, administrasieOverlay, administrasieButton, departementeButton);
          });
          $(departementeButton).on('mouseenter', () => {
            toggleDropdowns(administrasieMain, administrasieOverlay, departementeButton, administrasieButton);
          });
        };
        showDropdown(administrasieHeader, administrasieMain, administrasieOverlay);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
