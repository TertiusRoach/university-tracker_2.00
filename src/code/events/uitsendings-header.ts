export namespace UitsendingsHeader {
  export function eventsFor(pageName: String | 'default-header') {
    const uitsendingsBody: HTMLElement = document.getElementById('uitsendings-body');
    const uitsendingsHeader: HTMLElement = document.getElementById('uitsendings-header');
    const uitsendingsMain: HTMLElement = document.getElementById('uitsendings-main');
    const uitsendingsSidebar: HTMLElement = document.getElementById('uitsendings-sidebar');
    const uitsendingsOverlay: HTMLElement = document.getElementById('uitsendings-overlay');
    const uitsendingsFooter: HTMLElement = document.getElementById('uitsendings-footer');
    const uitsendingsData: HTMLElement = document.getElementById('uitsendings-data');

    switch (pageName) {
      case 'default-header':
        //--|▼| Gets the overlay for the header dropdowns |▼|--//
        const showDropdown = (uitsendingsHeader: HTMLElement, uitsendingsMain: HTMLElement, uitsendingsOverlay: HTMLElement) => {
          let uitsendingsButton: HTMLDivElement = uitsendingsHeader.querySelector('#uitsendings-button div');
          let departementeButton: HTMLDivElement = uitsendingsHeader.querySelector('#departemente-button div');

          //--▼ Used jQuery to append dropdowns within the overlay container ▼--//
          function toggleDropdowns(uitsendingsMain: HTMLElement, uitsendingsOverlay: HTMLElement, enable: HTMLElement, disable: HTMLElement) {
            disable.className = '';
            uitsendingsOverlay.innerHTML = '';
            enable.className = 'active';
            uitsendingsMain.classList.add('blur');
            uitsendingsOverlay.style.display = 'grid';
            uitsendingsOverlay.className = 'header-overlay';

            let dropdown: String = enable.parentElement.id.split('-')[0];
            switch (dropdown) {
              case 'uitsendings':
                $(uitsendingsOverlay).append(`
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
                $(uitsendingsOverlay).append(`
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
                                <a href="https://tertiusroach.github.io/workflow-setup/dist/uitsendings.html" target="_self">
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

            $('#uitsendings-overlay .background').on('mouseenter', () => {
              enable.className = '';
              uitsendingsMain.classList.remove('blur');
              uitsendingsOverlay.style.display = 'none';
            });
          }

          $(uitsendingsButton).on('mouseenter', () => {
            toggleDropdowns(uitsendingsMain, uitsendingsOverlay, uitsendingsButton, departementeButton);
          });
          $(departementeButton).on('mouseenter', () => {
            toggleDropdowns(uitsendingsMain, uitsendingsOverlay, departementeButton, uitsendingsButton);
          });
        };
        showDropdown(uitsendingsHeader, uitsendingsMain, uitsendingsOverlay);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
