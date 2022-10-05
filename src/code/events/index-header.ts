import { GetDesign } from 'code/utilities/GetDesign';
export namespace IndexHeader {
  export function eventsFor(pageName: String | 'default-header') {
    const indexBody: HTMLElement = document.getElementById('index-body');
    const indexHeader: HTMLElement = document.getElementById('index-header');
    const indexMain: HTMLElement = document.getElementById('index-main');
    const indexSidebar: HTMLElement = document.getElementById('index-sidebar');
    const indexOverlay: HTMLElement = document.getElementById('index-overlay');
    const indexFooter: HTMLElement = document.getElementById('index-footer');
    const indexData: HTMLElement = document.getElementById('index-data');
    switch (pageName) {
      case 'default-header':
        //--|▼| Gets the overlay for the header dropdowns |▼|--//
        const showDropdown = (indexHeader: HTMLElement, indexOverlay: HTMLElement) => {
          let uitsendingsButton: HTMLDivElement = indexHeader.querySelector('#uitsendings-button div');
          let departementeButton: HTMLDivElement = indexHeader.querySelector('#departemente-button div');

          $(indexHeader).on('mouseenter', () => {
            indexOverlay.className = 'header-overlay';
          });

          //--▼ Used jQuery to append dropdowns within the overlay container ▼--//
          function toggleDropdowns(enable: HTMLElement, disable: HTMLElement, container: HTMLElement) {
            const dropdown: String = enable.parentElement.id.split('-')[0];

            disable.className = '';
            container.innerHTML = '';
            enable.className = 'active';
            container.style.display = 'grid';
            switch (dropdown) {
              case 'uitsendings':
                $(container).append(`
                  <nav id="uitsendings-dropdown">
                    <div id="skofte">
                      <button>
                        <a href="#" target="_blank">
                          <i class="fas fa-clock"></i>
                          <i class="fad fa-clock"></i>
                          <h2>Skofte</h2>
                        </a>
                      </button>
                    </div>

                    <div id="soek">
                      <button>
                        <a href="#" target="_blank">
                          <i class="fas fa-search"></i>
                          <i class="fad fa-search"></i>
                          <h2>Soek</h2>
                        </a>
                      </button>
                    </div>

                    <div id="kalender">
                      <button>
                        <a href="#" target="_blank">
                          <i class="fas fa-calendar-edit"></i>
                          <i class="fad fa-calendar-edit"></i>
                          <h2>Kalender</h2>
                        </a>
                      </button>
                    </div>

                    <div id="aflaai">
                      <button>
                        <a href="#" target="_blank">
                          <i class="fas fa-comment-alt-lines"></i>
                          <i class="fad fa-comment-alt-lines"></i>
                          <h2>Aflaai</h2>
                        </a>
                      </button>
                    </div>

                    <div id="inligtingsblad">
                      <button>
                        <a href="#" target="_blank">
                          <i class="fas fa-sitemap"></i>
                          <i class="fad fa-sitemap"></i>
                          <h2>Inligtingsblad</h2>
                        </a>
                      </button>
                    </div>
                  </nav>

                  <div class="background"></div>
                `);
                //--► console.log('Show Uitsendings'); ◄--//
                break;
              case 'departemente':
                $(container).append(`
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
            $('#index-overlay .background').on('mouseenter', () => {
              enable.className = '';
              container.style.display = 'none';
            });
          }

          $(uitsendingsButton).on('mouseenter', () => {
            toggleDropdowns(uitsendingsButton, departementeButton, indexOverlay);
          });
          $(departementeButton).on('mouseenter', () => {
            toggleDropdowns(departementeButton, uitsendingsButton, indexOverlay);
          });
        };
        showDropdown(indexHeader, indexOverlay);

        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
