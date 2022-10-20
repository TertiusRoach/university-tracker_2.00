import { GetDesign } from 'code/utilities/GetDesign';
export namespace AkademiciHeader {
  export function eventsFor(pageName: String | 'default-header') {
    const akademiciBody: HTMLElement = document.getElementById('akademici-body');
    const akademiciHeader: HTMLElement = document.getElementById('akademici-header');
    const akademiciMain: HTMLElement = document.getElementById('akademici-main');
    const akademiciSidebar: HTMLElement = document.getElementById('akademici-sidebar');
    const akademiciOverlay: HTMLElement = document.getElementById('akademici-overlay');
    const akademiciFooter: HTMLElement = document.getElementById('akademici-footer');
    const akademiciData: HTMLElement = document.getElementById('akademici-data');
    switch (pageName) {
      case 'default-header':
        //--|▼| Gets the overlay for the header dropdowns |▼|--//
        const showDropdown = (akademiciHeader: HTMLElement, akademiciMain: HTMLElement, akademiciOverlay: HTMLElement) => {
          let akademiciButton: HTMLDivElement = akademiciHeader.querySelector('#akademici-button div');
          let departementeButton: HTMLDivElement = akademiciHeader.querySelector('#departemente-button div');

          console.log(akademiciButton);
          //--▼ Used jQuery to append dropdowns within the overlay container ▼--//
          function toggleDropdowns(akademiciMain: HTMLElement, akademiciOverlay: HTMLElement, enable: HTMLElement, disable: HTMLElement) {
            disable.className = '';
            akademiciOverlay.innerHTML = '';
            enable.className = 'active';
            akademiciMain.classList.add('blur');
            akademiciOverlay.style.display = 'grid';
            akademiciOverlay.className = 'header-overlay';

            let dropdown: String = enable.parentElement.id.split('-')[0];
            switch (dropdown) {
              case 'akademici':
                $(akademiciOverlay).append(`
                  <nav id="akademici-dropdown">
                    <div id="argief">
                      <button>
                        <a href="#" target="_blank">
                          <i class="fas fa-archive"></i>
                          <i class="fad fa-archive"></i>
                          <h2>Argief</h2>
                        </a>
                      </button>
                    </div>
                  
                    <div id="epos">
                      <button>
                        <a href="#" target="_blank">
                          <i class="fas fa-envelope-open-text"></i>
                          <i class="fad fa-envelope-open-text"></i>
                          <h2>E-pos</h2>
                        </a>
                      </button>
                    </div>
                  
                    <div id="kalender">
                      <button>
                        <a href="#" target="_blank">
                          <i class="fas fa-users-class"></i>
                          <i class="fad fa-users-class"></i>
                          <h2>Kalender</h2>
                        </a>
                      </button>
                    </div>
                  </nav>

                  <div class="background"></div>
                `);
                //--► console.log('Show Uitsendings'); ◄--//
                break;
              case 'departemente':
                $(akademiciOverlay).append(`
                  <nav id="departemente-dropdown">
                    <div id="uitsendings">
                      <button>
                        <a href="#" target="_self">
                          <img src="images/svg/akademia/av-white.svg" alt="AV Logo" />
                          <img src="images/svg/akademia/av-bronze.svg" alt="AV Logo" />
                          <h2>Uitsendings</h2>
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

            $('#akademici-overlay .background').on('mouseenter', () => {
              enable.className = '';
              akademiciMain.classList.remove('blur');
              akademiciOverlay.style.display = 'none';
            });
          }

          $(akademiciButton).on('mouseenter', () => {
            toggleDropdowns(akademiciMain, akademiciOverlay, akademiciButton, departementeButton);
          });
          $(departementeButton).on('mouseenter', () => {
            toggleDropdowns(akademiciMain, akademiciOverlay, departementeButton, akademiciButton);
          });
        };
        showDropdown(akademiciHeader, akademiciMain, akademiciOverlay);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
