import { GetDesign } from 'code/utilities/GetDesign';
export namespace OperasioneelOverlay {
  export function eventsFor(pageName: String | 'default-overlay' | 'header-overlay' | 'sidebar-overlay') {
    const operasioneelBody: HTMLElement = document.getElementById('operasioneel-body');
    const operasioneelHeader: HTMLElement = document.getElementById('operasioneel-header');
    const operasioneelMain: HTMLElement = document.getElementById('operasioneel-main');
    const operasioneelSidebar: HTMLElement = document.getElementById('operasioneel-sidebar');
    const operasioneelOverlay: HTMLElement = document.getElementById('operasioneel-overlay');
    const operasioneelFooter: HTMLElement = document.getElementById('operasioneel-footer');
    const operasioneelData: HTMLElement = document.getElementById('operasioneel-data');
    switch (pageName) {
      case 'default-overlay':
        break;
      case 'header-overlay':
        break;
      case 'sidebar-overlay':
        let language: String = 'afr';

        //--|▼| Highlights the present month inside the sidebar |▼|--//
        const sidebarOverlayHightlight = (operasioneelMain: HTMLElement, operasioneelOverlay: HTMLElement) => {
          let date: String = `${new Date()}`;
          let dateArray: Array<string> = date.split(' ');
          let month: string = dateArray[1];

          function toggleClass(container: HTMLElement) {
            container.classList.remove('false');
            container.classList.add('true');
          }

          switch (month) {
            case 'Jan':
              toggleClass(operasioneelOverlay.querySelector('#january'));
              break;
            case 'Feb':
              toggleClass(operasioneelOverlay.querySelector('#february'));
              break;
            case 'Mar':
              toggleClass(operasioneelOverlay.querySelector('#march'));
              break;
            case 'Apr':
              toggleClass(operasioneelOverlay.querySelector('#april'));
              break;
            case 'May':
              toggleClass(operasioneelOverlay.querySelector('#may'));
              break;
            case 'Jun':
              toggleClass(operasioneelOverlay.querySelector('#june'));
              break;
            case 'Jul':
              toggleClass(operasioneelOverlay.querySelector('#july'));
              break;
            case 'Aug':
              toggleClass(operasioneelOverlay.querySelector('#august'));
              break;
            case 'Sep':
              toggleClass(operasioneelOverlay.querySelector('#september'));
              break;
            case 'Oct':
              toggleClass(operasioneelOverlay.querySelector('#october'));
              break;
            case 'Nov':
              toggleClass(operasioneelOverlay.querySelector('#november'));
              break;
            case 'Dec':
              toggleClass(operasioneelOverlay.querySelector('#december'));
              break;
          }
        };
        sidebarOverlayHightlight(operasioneelMain, operasioneelOverlay);

        //--|▼| Resets navigation containers to its default info |▼|--//
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
            operasioneelMain.classList.remove('blur');
            resetOverlay(container, language);
          });
        };
        sidebarOverlayHide(pageName, operasioneelOverlay, language);

        //--|▼| Resets banner text to default month |▼|--//
        const sidebarOverlayReset = (pageName: String, operasioneelMain: HTMLElement, operasioneelOverlay: HTMLElement, language: String | 'afr' | 'eng') => {
          function resetBanner(pageName: String, language: Array<String>) {
            let monthNavigation: Array<String> = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
            for (let i = 0; i < monthNavigation.length; i++) {
              let container = document.querySelector(`.${pageName} #${monthNavigation[i]}`);
              container.querySelector('main h1').textContent = `${language[i]}`;
            }
          }

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

          //--▼ Resets all navigation banners to its default state ▼--//
          $(`.${pageName} nav`).on('mouseleave', () => {
            resetBanner(pageName, months);
          });

          //--▼ January ▼--//
          $(`.${pageName} #january main`).on('mouseenter', () => {
            document.querySelector('#january main h1').textContent = `${months[0]}`;
          });
          $(`.${pageName} #january .trigger`).on('mouseenter', () => {
            document.querySelector('#january main h1').textContent = `${months[0]}`;
            operasioneelOverlay.style.display = 'none';
            operasioneelMain.classList.remove('blur');
          });

          //--▼ February ▼--//
          $(`.${pageName} #february main`).on('mouseenter', () => {
            document.querySelector('#february main h1').textContent = `${months[1]}`;
          });
          $(`.${pageName} #february .trigger`).on('mouseenter', () => {
            document.querySelector('#february main h1').textContent = `${months[1]}`;
            operasioneelOverlay.style.display = 'none';
            operasioneelMain.classList.remove('blur');
          });

          //--▼ March ▼--//
          $(`.${pageName} #march main`).on('mouseenter', () => {
            document.querySelector('#march main h1').textContent = `${months[2]}`;
          });
          $(`.${pageName} #march .trigger`).on('mouseenter', () => {
            document.querySelector('#march main h1').textContent = `${months[2]}`;
            operasioneelOverlay.style.display = 'none';
            operasioneelMain.classList.remove('blur');
          });

          //--▼ April ▼--//
          $(`.${pageName} #april main`).on('mouseenter', () => {
            document.querySelector('#april main h1').textContent = `${months[3]}`;
          });
          $(`.${pageName} #april .trigger`).on('mouseenter', () => {
            document.querySelector('#april main h1').textContent = `${months[3]}`;
            operasioneelOverlay.style.display = 'none';
            operasioneelMain.classList.remove('blur');
          });

          //--▼ June ▼--//
          $(`.${pageName} #may main`).on('mouseenter', () => {
            document.querySelector('#may main h1').textContent = `${months[4]}`;
          });
          $(`.${pageName} #may .trigger`).on('mouseenter', () => {
            document.querySelector('#may main h1').textContent = `${months[4]}`;
            operasioneelOverlay.style.display = 'none';
            operasioneelMain.classList.remove('blur');
          });

          //--▼ July ▼--//
          $(`.${pageName} #june main`).on('mouseenter', () => {
            document.querySelector('#june main h1').textContent = `${months[5]}`;
          });
          $(`.${pageName} #june .trigger`).on('mouseenter', () => {
            document.querySelector('#june main h1').textContent = `${months[5]}`;
            operasioneelOverlay.style.display = 'none';
            operasioneelMain.classList.remove('blur');
          });

          //--▼ August ▼--//
          $(`.${pageName} #july main`).on('mouseenter', () => {
            document.querySelector('#july main h1').textContent = `${months[6]}`;
          });
          $(`.${pageName} #july .trigger`).on('mouseenter', () => {
            document.querySelector('#july main h1').textContent = `${months[6]}`;
            operasioneelOverlay.style.display = 'none';
            operasioneelMain.classList.remove('blur');
          });

          //--▼ September ▼--//
          $(`.${pageName} #august main`).on('mouseenter', () => {
            document.querySelector('#august main h1').textContent = `${months[7]}`;
          });
          $(`.${pageName} #august .trigger`).on('mouseenter', () => {
            document.querySelector('#august main h1').textContent = `${months[7]}`;
            operasioneelOverlay.style.display = 'none';
            operasioneelMain.classList.remove('blur');
          });

          //--▼ September ▼--//
          $(`.${pageName} #september main`).on('mouseenter', () => {
            document.querySelector('#september main h1').textContent = `${months[8]}`;
          });
          $(`.${pageName} #september .trigger`).on('mouseenter', () => {
            document.querySelector('#september main h1').textContent = `${months[8]}`;
            operasioneelOverlay.style.display = 'none';
            operasioneelMain.classList.remove('blur');
          });

          //--▼ October ▼--//
          $(`.${pageName} #october main`).on('mouseenter', () => {
            document.querySelector('#october main h1').textContent = `${months[9]}`;
          });
          $(`.${pageName} #october .trigger`).on('mouseenter', () => {
            document.querySelector('#october main h1').textContent = `${months[9]}`;
            operasioneelOverlay.style.display = 'none';
            operasioneelMain.classList.remove('blur');
          });

          //--▼ November ▼--//
          $(`.${pageName} #november main`).on('mouseenter', () => {
            document.querySelector('#november main h1').textContent = `${months[10]}`;
          });
          $(`.${pageName} #november .trigger`).on('mouseenter', () => {
            document.querySelector('#november main h1').textContent = `${months[10]}`;
            operasioneelOverlay.style.display = 'none';
            operasioneelMain.classList.remove('blur');
          });

          //--▼ December ▼--//
          $(`.${pageName} #december main`).on('mouseenter', () => {
            document.querySelector('#december main h1').textContent = `${months[11]}`;
          });
          $(`.${pageName} #december .trigger`).on('mouseenter', () => {
            document.querySelector('#december main h1').textContent = `${months[11]}`;
            operasioneelOverlay.style.display = 'none';
            operasioneelMain.classList.remove('blur');
          });
        };
        sidebarOverlayReset(pageName, operasioneelMain, operasioneelOverlay, language);

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

        //--|▼| Displays the navigation for the month the cursor is hovering on |▼|--//
        const defaultSidebarButtons = (pageName: String, operasioneelMain: HTMLElement) => {
          let sidebarButtons: Object = document.querySelectorAll('#operasioneel-sidebar > div > button > a > h1');
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

          //--▼ Toggle sidebar-overlay display from 'none' to 'grid' ▼--//
          $(sidebarButtons).on('mouseenter', () => {
            operasioneelMain.classList.add('blur');
            operasioneelOverlay.style.display = 'grid';
          });
          //--▼ January ▼--//
          $(sidebarButtons[0]).on('mouseenter', () => {
            displayOverlay(pageName, 'january');
          });
          //--▼ February ▼--//
          $(sidebarButtons[1]).on('mouseenter', () => {
            displayOverlay(pageName, 'february');
          });
          //--▼ March ▼--//
          $(sidebarButtons[2]).on('mouseenter', () => {
            displayOverlay(pageName, 'march');
          });
          //--▼ April ▼--//
          $(sidebarButtons[3]).on('mouseenter', () => {
            displayOverlay(pageName, 'april');
          });
          //--▼ May ▼--//
          $(sidebarButtons[4]).on('mouseenter', () => {
            displayOverlay(pageName, 'may');
          });
          //--▼ June ▼--//
          $(sidebarButtons[5]).on('mouseenter', () => {
            displayOverlay(pageName, 'june');
          });
          //--▼ July ▼--//
          $(sidebarButtons[6]).on('mouseenter', () => {
            displayOverlay(pageName, 'july');
          });
          //--▼ August ▼--//
          $(sidebarButtons[7]).on('mouseenter', () => {
            displayOverlay(pageName, 'august');
          });
          //--▼ September ▼--//
          $(sidebarButtons[8]).on('mouseenter', () => {
            displayOverlay(pageName, 'september');
          });
          //--▼ October ▼--//
          $(sidebarButtons[9]).on('mouseenter', () => {
            displayOverlay(pageName, 'october');
          });
          //--▼ November ▼--//
          $(sidebarButtons[10]).on('mouseenter', () => {
            displayOverlay(pageName, 'november');
          });
          //--▼ December ▼--//
          $(sidebarButtons[11]).on('mouseenter', () => {
            displayOverlay(pageName, 'december');
          });
        };
        defaultSidebarButtons(pageName, operasioneelMain);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
