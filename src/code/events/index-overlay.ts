import { GetDesign } from 'code/utilities/GetDesign';
export namespace IndexOverlay {
  export function eventsFor(pageName: String | 'default-overlay' | 'header-overlay' | 'sidebar-overlay') {
    const indexBody: HTMLElement = document.getElementById('index-body');
    const indexHeader: HTMLElement = document.getElementById('index-header');
    const indexMain: HTMLElement = document.getElementById('index-main');
    const indexSidebar: HTMLElement = document.getElementById('index-sidebar');
    const indexOverlay: HTMLElement = document.getElementById('index-overlay');
    const indexFooter: HTMLElement = document.getElementById('index-footer');
    const indexData: HTMLElement = document.getElementById('index-data');
    switch (pageName) {
      case 'default-overlay':
        break;
      case 'header-overlay':
        break;
      case 'sidebar-overlay':
        let language: String = 'afr';
        //--|▼| Resets navigation containers to its default info before hiding the overlay container |▼|--//
        const sidebarOverlayHide = (pageName: String, container: HTMLElement, language: String | 'afr' | 'eng') => {
          function resetOverlay(container: HTMLElement, language: String | 'afr' | 'eng') {
            container.style.display = 'none';

            //--► Use 'var' to label functions you want to turn into tools ◄--//
            var months: Array<String>;
            switch (language) {
              case 'afr':
                months = ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'];
                break;
              case 'eng':
                months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                break;
            }

            let monthNavigation: Array<String> = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
            for (let i = 0; i < monthNavigation.length; i++) {
              container.querySelector(`.${pageName} #${monthNavigation[i]} main h1`).textContent = `${months[i]}`;
              let element: HTMLElement = container.querySelector(`#${monthNavigation[i]}`);
              element.style.display = 'none';
            }
          }
          $(`.${pageName} .background`).on('mouseenter', () => {
            resetOverlay(container, language);
          });
        };
        sidebarOverlayHide(pageName, indexOverlay, language);

        //--|▼| Resets banner text to selected month when cursor enters container |▼|--//
        const sidebarOverlayReset = (pageName: String, indexOverlay: HTMLElement, language: String | 'afr' | 'eng') => {
          //--► Use 'var' to label functions you want to turn into tools ◄--//
          var months: Array<String>;
          switch (language) {
            case 'afr':
              months = ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'];
              break;
            case 'eng':
              months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
              break;
          }

          //--▼ January ▼--//
          $(`.${pageName} #january main`).on('mouseenter', () => {
            document.querySelector('#january main h1').textContent = `${months[0]}`;
          });
          $(`.${pageName} #january .trigger`).on('mouseenter', () => {
            document.querySelector('#january main h1').textContent = `${months[0]}`;
            indexOverlay.style.display = 'none';
          });

          //--▼ February ▼--//
          $(`.${pageName} #february main`).on('mouseenter', () => {
            document.querySelector('#february main h1').textContent = `${months[1]}`;
          });
          $(`.${pageName} #february .trigger`).on('mouseenter', () => {
            document.querySelector('#february main h1').textContent = `${months[1]}`;
            indexOverlay.style.display = 'none';
          });

          //--▼ March ▼--//
          $(`.${pageName} #march main`).on('mouseenter', () => {
            document.querySelector('#march main h1').textContent = `${months[2]}`;
          });
          $(`.${pageName} #march .trigger`).on('mouseenter', () => {
            document.querySelector('#march main h1').textContent = `${months[2]}`;
            indexOverlay.style.display = 'none';
          });

          //--▼ April ▼--//
          $(`.${pageName} #april main`).on('mouseenter', () => {
            document.querySelector('#april main h1').textContent = `${months[3]}`;
          });
          $(`.${pageName} #april .trigger`).on('mouseenter', () => {
            document.querySelector('#april main h1').textContent = `${months[3]}`;
            indexOverlay.style.display = 'none';
          });

          //--▼ June ▼--//
          $(`.${pageName} #may main`).on('mouseenter', () => {
            document.querySelector('#may main h1').textContent = `${months[4]}`;
          });
          $(`.${pageName} #may .trigger`).on('mouseenter', () => {
            document.querySelector('#may main h1').textContent = `${months[4]}`;
            indexOverlay.style.display = 'none';
          });

          //--▼ July ▼--//
          $(`.${pageName} #june main`).on('mouseenter', () => {
            document.querySelector('#june main h1').textContent = `${months[5]}`;
          });
          $(`.${pageName} #june .trigger`).on('mouseenter', () => {
            document.querySelector('#june main h1').textContent = `${months[5]}`;
            indexOverlay.style.display = 'none';
          });

          //--▼ August ▼--//
          $(`.${pageName} #july main`).on('mouseenter', () => {
            document.querySelector('#july main h1').textContent = `${months[6]}`;
          });
          $(`.${pageName} #july .trigger`).on('mouseenter', () => {
            document.querySelector('#july main h1').textContent = `${months[6]}`;
            indexOverlay.style.display = 'none';
          });

          //--▼ September ▼--//
          $(`.${pageName} #august main`).on('mouseenter', () => {
            document.querySelector('#august main h1').textContent = `${months[7]}`;
          });
          $(`.${pageName} #august .trigger`).on('mouseenter', () => {
            document.querySelector('#august main h1').textContent = `${months[7]}`;
            indexOverlay.style.display = 'none';
          });

          //--▼ September ▼--//
          $(`.${pageName} #september main`).on('mouseenter', () => {
            document.querySelector('#september main h1').textContent = `${months[8]}`;
          });
          $(`.${pageName} #september .trigger`).on('mouseenter', () => {
            document.querySelector('#september main h1').textContent = `${months[8]}`;
            indexOverlay.style.display = 'none';
          });

          //--▼ October ▼--//
          $(`.${pageName} #october main`).on('mouseenter', () => {
            document.querySelector('#october main h1').textContent = `${months[9]}`;
          });
          $(`.${pageName} #october .trigger`).on('mouseenter', () => {
            document.querySelector('#october main h1').textContent = `${months[9]}`;
            indexOverlay.style.display = 'none';
          });

          //--▼ November ▼--//
          $(`.${pageName} #november main`).on('mouseenter', () => {
            document.querySelector('#november main h1').textContent = `${months[10]}`;
          });
          $(`.${pageName} #november .trigger`).on('mouseenter', () => {
            document.querySelector('#november main h1').textContent = `${months[10]}`;
            indexOverlay.style.display = 'none';
          });

          //--▼ December ▼--//
          $(`.${pageName} #december main`).on('mouseenter', () => {
            document.querySelector('#december main h1').textContent = `${months[11]}`;
          });
          $(`.${pageName} #december .trigger`).on('mouseenter', () => {
            document.querySelector('#december main h1').textContent = `${months[11]}`;
            indexOverlay.style.display = 'none';
          });
        };
        sidebarOverlayReset(pageName, indexOverlay, language);

        //--|▼| Highlights the present month navigation |▼|--//
        const sidebarOverlayHightlight = (indexOverlay: HTMLElement) => {
          let date: String = `${new Date()}`;
          let dateArray: Array<string> = date.split(' ');
          let month: string = dateArray[1];

          function toggleClass(container: HTMLElement) {
            container.classList.remove('false');
            container.classList.add('true');
          }

          switch (month) {
            case 'Jan':
              toggleClass(indexOverlay.querySelector('#january'));
              break;
            case 'Feb':
              toggleClass(indexOverlay.querySelector('#february'));
              break;
            case 'Mar':
              toggleClass(indexOverlay.querySelector('#march'));
              break;
            case 'Apr':
              toggleClass(indexOverlay.querySelector('#april'));
              break;
            case 'May':
              toggleClass(indexOverlay.querySelector('#may'));
              break;
            case 'Jun':
              toggleClass(indexOverlay.querySelector('#june'));
              break;
            case 'Jul':
              toggleClass(indexOverlay.querySelector('#july'));
              break;
            case 'Aug':
              toggleClass(indexOverlay.querySelector('#august'));
              break;
            case 'Sep':
              toggleClass(indexOverlay.querySelector('#september'));
              break;
            case 'Oct':
              toggleClass(indexOverlay.querySelector('#october'));
              break;
            case 'Nov':
              toggleClass(indexOverlay.querySelector('#november'));
              break;
            case 'Dec':
              toggleClass(indexOverlay.querySelector('#december'));
              break;
          }
        };
        sidebarOverlayHightlight(indexOverlay);

        //--|▼| Changes the text of the banner to the selected button |▼|--//
        const sidebarOverlayInformation = (pageName: String) => {
          function changeText(icon: String) {
            let monthsReference = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
            for (let i = 0; i < monthsReference.length; i++) {
              var banner: HTMLHeadElement = document.querySelector(`.${pageName} #${monthsReference[i]} main h1`);
              var buttonInfo: String = document.querySelector(`.${pageName} #${monthsReference[i]} a[id*='${icon}'] div button h1`).textContent;
              banner.textContent = `${buttonInfo}`;
            }
          }

          //--▼ Row #1 ▼--//
          $('a[id*="gr-sheet"]').on('mouseenter', () => {
            changeText('gr-sheet');
          });
          $('a[id*="pi-sheet"]').on('mouseenter', () => {
            changeText('pi-sheet');
            // changeBanner('sheet');
          });
          $('a[id*="ye-sheet"]').on('mouseenter', () => {
            changeText('ye-sheet');
            // changeBanner('sheet');
          });
          $('a[id*="or-sheet"]').on('mouseenter', () => {
            changeText('or-sheet');
            // changeBanner('sheet');
          });
          $('a[id*="bl-sheet"]').on('mouseenter', () => {
            changeText('bl-sheet');
            // changeBanner('sheet');
          });
          $('a[id*="pu-sheet"]').on('mouseenter', () => {
            changeText('pu-sheet');
          });
          $('a[id*="re-sheet"]').on('mouseenter', () => {
            changeText('re-sheet');
          });
          $('a[id*="br-sheet"]').on('mouseenter', () => {
            changeText('br-sheet');
          });
          $('a[id*="gy-sheet"]').on('mouseenter', () => {
            changeText('gy-sheet');
          });
          $('a[id*="tu-sheet"]').on('mouseenter', () => {
            changeText('tu-sheet');
          });

          //--▼ Row #2 ▼--//
          $('a[id*="gr-edit"]').on('mouseenter', () => {
            changeText('gr-edit');
          });
          $('a[id*="pi-edit"]').on('mouseenter', () => {
            changeText('pi-edit');
          });
          $('a[id*="ye-edit"]').on('mouseenter', () => {
            changeText('ye-edit');
          });
          $('a[id*="or-edit"]').on('mouseenter', () => {
            changeText('or-edit');
          });
          $('a[id*="bl-edit"]').on('mouseenter', () => {
            changeText('bl-edit');
          });
          $('a[id*="pu-edit"]').on('mouseenter', () => {
            changeText('pu-edit');
          });
          $('a[id*="re-edit"]').on('mouseenter', () => {
            changeText('re-edit');
          });
          $('a[id*="br-edit"]').on('mouseenter', () => {
            changeText('br-edit');
          });
          $('a[id*="gy-edit"]').on('mouseenter', () => {
            changeText('gy-edit');
          });
          $('a[id*="tu-edit"]').on('mouseenter', () => {
            changeText('tu-edit');
          });

          //--▼ Row #3 ▼--//
          $('a[id*="gr-book"]').on('mouseenter', () => {
            changeText('gr-book');
          });
          $('a[id*="pi-book"]').on('mouseenter', () => {
            changeText('pi-book');
          });
          $('a[id*="ye-book"]').on('mouseenter', () => {
            changeText('ye-book');
          });
          $('a[id*="or-book"]').on('mouseenter', () => {
            changeText('or-book');
          });
          $('a[id*="bl-book"]').on('mouseenter', () => {
            changeText('bl-boo');
          });
          $('a[id*="pu-book"]').on('mouseenter', () => {
            changeText('pu-book');
          });
          $('a[id*="re-book"]').on('mouseenter', () => {
            changeText('re-book');
          });
          $('a[id*="br-book"]').on('mouseenter', () => {
            changeText('br-book');
          });
          $('a[id*="gy-book"]').on('mouseenter', () => {
            changeText('gy-book');
          });
          $('a[id*="tu-book"]').on('mouseenter', () => {
            changeText('tu-boo');
          });

          //--▼ Row #4 ▼--//
          $('a[id*="gr-cloud"]').on('mouseenter', () => {
            changeText('gr-cloud');
          });
          $('a[id*="pi-cloud"]').on('mouseenter', () => {
            changeText('pi-cloud');
          });
          $('a[id*="ye-cloud"]').on('mouseenter', () => {
            changeText('ye-cloud');
          });
          $('a[id*="or-cloud"]').on('mouseenter', () => {
            changeText('or-cloud');
          });
          $('a[id*="bl-cloud"]').on('mouseenter', () => {
            changeText('bl-cloud');
          });
          $('a[id*="pu-cloud"]').on('mouseenter', () => {
            changeText('pu-cloud');
          });
          $('a[id*="re-cloud"]').on('mouseenter', () => {
            changeText('re-cloud');
          });
          $('a[id*="br-cloud"]').on('mouseenter', () => {
            changeText('br-cloud');
          });
          $('a[id*="gy-cloud"]').on('mouseenter', () => {
            changeText('gy-cloud');
          });
          $('a[id*="tu-cloud"]').on('mouseenter', () => {
            changeText('tu-cloud');
          });
        };
        sidebarOverlayInformation(pageName);

        //--|▼| Displays the navigation for the month the cursor selected |▼|--//
        const defaultSidebarButtons = (pageName: String) => {
          let sidebarButtons: Object = document.querySelectorAll('#index-sidebar > div > button > a > h1');
          function displayOverlay(
            pageName: String,
            display: 'january' | 'february' | 'march' | 'april' | 'may' | 'june' | 'july' | 'august' | 'september' | 'october' | 'november' | 'december'
          ) {
            var month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
            for (let i = 0; i < month.length; i++) {
              $(`.${pageName} #${month[i]}`).css('display', 'none');
            }
            $(`.${pageName} #${display}`).css('display', 'grid');
          }

          //--▼ Show Month Overlays: 0 = 'January' ▼--//
          $(sidebarButtons).on('mouseenter', () => {
            indexOverlay.style.display = 'grid';
          });
          $(sidebarButtons[0]).on('mouseenter', () => {
            displayOverlay(pageName, 'january');
          });
          $(sidebarButtons[1]).on('mouseenter', () => {
            displayOverlay(pageName, 'february');
          });
          $(sidebarButtons[2]).on('mouseenter', () => {
            displayOverlay(pageName, 'march');
          });
          $(sidebarButtons[3]).on('mouseenter', () => {
            displayOverlay(pageName, 'april');
          });
          $(sidebarButtons[4]).on('mouseenter', () => {
            displayOverlay(pageName, 'may');
          });
          $(sidebarButtons[5]).on('mouseenter', () => {
            displayOverlay(pageName, 'june');
          });
          $(sidebarButtons[6]).on('mouseenter', () => {
            displayOverlay(pageName, 'july');
          });
          $(sidebarButtons[7]).on('mouseenter', () => {
            displayOverlay(pageName, 'august');
          });
          $(sidebarButtons[8]).on('mouseenter', () => {
            displayOverlay(pageName, 'september');
          });
          $(sidebarButtons[9]).on('mouseenter', () => {
            displayOverlay(pageName, 'october');
          });
          $(sidebarButtons[10]).on('mouseenter', () => {
            displayOverlay(pageName, 'november');
          });
          $(sidebarButtons[11]).on('mouseenter', () => {
            displayOverlay(pageName, 'december');
          });
        };
        defaultSidebarButtons(pageName);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
