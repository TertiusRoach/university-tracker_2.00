import { GetDesign } from 'code/utilities/GetDesign';
import { GetArray } from 'code/utilities/GetArray';
export namespace AkademiciOverlay {
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
      case 'sidebar-overlay':
        let language: String = 'afr';

        //--|▼| Highlights the present month inside the sidebar |▼|--//
        const sidebarOverlayHightlight = (akademiciMain: HTMLElement, akademiciOverlay: HTMLElement) => {
          let date: String = `${new Date()}`;
          let dateArray: Array<string> = date.split(' ');
          let month: string = dateArray[1];

          function toggleClass(container: HTMLElement) {
            container.classList.remove('false');
            container.classList.add('true');
          }

          switch (month) {
            case 'Jan':
              toggleClass(akademiciOverlay.querySelector('#january'));
              break;
            case 'Feb':
              toggleClass(akademiciOverlay.querySelector('#february'));
              break;
            case 'Mar':
              toggleClass(akademiciOverlay.querySelector('#march'));
              break;
            case 'Apr':
              toggleClass(akademiciOverlay.querySelector('#april'));
              break;
            case 'May':
              toggleClass(akademiciOverlay.querySelector('#may'));
              break;
            case 'Jun':
              toggleClass(akademiciOverlay.querySelector('#june'));
              break;
            case 'Jul':
              toggleClass(akademiciOverlay.querySelector('#july'));
              break;
            case 'Aug':
              toggleClass(akademiciOverlay.querySelector('#august'));
              break;
            case 'Sep':
              toggleClass(akademiciOverlay.querySelector('#september'));
              break;
            case 'Oct':
              toggleClass(akademiciOverlay.querySelector('#october'));
              break;
            case 'Nov':
              toggleClass(akademiciOverlay.querySelector('#november'));
              break;
            case 'Dec':
              toggleClass(akademiciOverlay.querySelector('#december'));
              break;
          }
        };
        sidebarOverlayHightlight(akademiciMain, akademiciOverlay);

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
            akademiciMain.classList.remove('blur');
            resetOverlay(container, language);
          });
        };
        sidebarOverlayHide(pageName, akademiciOverlay, language);

        //--|▼| Resets banner text to default month |▼|--//
        const sidebarOverlayReset = (pageName: String, akademiciMain: HTMLElement, akademiciOverlay: HTMLElement, language: String | 'afr' | 'eng') => {
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
            akademiciOverlay.style.display = 'none';
            akademiciMain.classList.remove('blur');
          });

          //--▼ February ▼--//
          $(`.${pageName} #february main`).on('mouseenter', () => {
            document.querySelector('#february main h1').textContent = `${months[1]}`;
          });
          $(`.${pageName} #february .trigger`).on('mouseenter', () => {
            document.querySelector('#february main h1').textContent = `${months[1]}`;
            akademiciOverlay.style.display = 'none';
            akademiciMain.classList.remove('blur');
          });

          //--▼ March ▼--//
          $(`.${pageName} #march main`).on('mouseenter', () => {
            document.querySelector('#march main h1').textContent = `${months[2]}`;
          });
          $(`.${pageName} #march .trigger`).on('mouseenter', () => {
            document.querySelector('#march main h1').textContent = `${months[2]}`;
            akademiciOverlay.style.display = 'none';
            akademiciMain.classList.remove('blur');
          });

          //--▼ April ▼--//
          $(`.${pageName} #april main`).on('mouseenter', () => {
            document.querySelector('#april main h1').textContent = `${months[3]}`;
          });
          $(`.${pageName} #april .trigger`).on('mouseenter', () => {
            document.querySelector('#april main h1').textContent = `${months[3]}`;
            akademiciOverlay.style.display = 'none';
            akademiciMain.classList.remove('blur');
          });

          //--▼ June ▼--//
          $(`.${pageName} #may main`).on('mouseenter', () => {
            document.querySelector('#may main h1').textContent = `${months[4]}`;
          });
          $(`.${pageName} #may .trigger`).on('mouseenter', () => {
            document.querySelector('#may main h1').textContent = `${months[4]}`;
            akademiciOverlay.style.display = 'none';
            akademiciMain.classList.remove('blur');
          });

          //--▼ July ▼--//
          $(`.${pageName} #june main`).on('mouseenter', () => {
            document.querySelector('#june main h1').textContent = `${months[5]}`;
          });
          $(`.${pageName} #june .trigger`).on('mouseenter', () => {
            document.querySelector('#june main h1').textContent = `${months[5]}`;
            akademiciOverlay.style.display = 'none';
            akademiciMain.classList.remove('blur');
          });

          //--▼ August ▼--//
          $(`.${pageName} #july main`).on('mouseenter', () => {
            document.querySelector('#july main h1').textContent = `${months[6]}`;
          });
          $(`.${pageName} #july .trigger`).on('mouseenter', () => {
            document.querySelector('#july main h1').textContent = `${months[6]}`;
            akademiciOverlay.style.display = 'none';
            akademiciMain.classList.remove('blur');
          });

          //--▼ September ▼--//
          $(`.${pageName} #august main`).on('mouseenter', () => {
            document.querySelector('#august main h1').textContent = `${months[7]}`;
          });
          $(`.${pageName} #august .trigger`).on('mouseenter', () => {
            document.querySelector('#august main h1').textContent = `${months[7]}`;
            akademiciOverlay.style.display = 'none';
            akademiciMain.classList.remove('blur');
          });

          //--▼ September ▼--//
          $(`.${pageName} #september main`).on('mouseenter', () => {
            document.querySelector('#september main h1').textContent = `${months[8]}`;
          });
          $(`.${pageName} #september .trigger`).on('mouseenter', () => {
            document.querySelector('#september main h1').textContent = `${months[8]}`;
            akademiciOverlay.style.display = 'none';
            akademiciMain.classList.remove('blur');
          });

          //--▼ October ▼--//
          $(`.${pageName} #october main`).on('mouseenter', () => {
            document.querySelector('#october main h1').textContent = `${months[9]}`;
          });
          $(`.${pageName} #october .trigger`).on('mouseenter', () => {
            document.querySelector('#october main h1').textContent = `${months[9]}`;
            akademiciOverlay.style.display = 'none';
            akademiciMain.classList.remove('blur');
          });

          //--▼ November ▼--//
          $(`.${pageName} #november main`).on('mouseenter', () => {
            document.querySelector('#november main h1').textContent = `${months[10]}`;
          });
          $(`.${pageName} #november .trigger`).on('mouseenter', () => {
            document.querySelector('#november main h1').textContent = `${months[10]}`;
            akademiciOverlay.style.display = 'none';
            akademiciMain.classList.remove('blur');
          });

          //--▼ December ▼--//
          $(`.${pageName} #december main`).on('mouseenter', () => {
            document.querySelector('#december main h1').textContent = `${months[11]}`;
          });
          $(`.${pageName} #december .trigger`).on('mouseenter', () => {
            document.querySelector('#december main h1').textContent = `${months[11]}`;
            akademiciOverlay.style.display = 'none';
            akademiciMain.classList.remove('blur');
          });
        };
        sidebarOverlayReset(pageName, akademiciMain, akademiciOverlay, language);

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
        };
        sidebarOverlayInformation(pageName);

        //--|▼| Displays the navigation for the month the cursor is hovering on |▼|--//
        const defaultSidebarButtons = (pageName: String, akademiciMain: HTMLElement) => {
          let sidebarButtons: Object = document.querySelectorAll('#akademici-sidebar > div > button > a > h1');
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
            akademiciMain.classList.add('blur');
            akademiciOverlay.style.display = 'grid';
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
        defaultSidebarButtons(pageName, akademiciMain);

        //--|▼| Replace links for sidebar overlay |▼|--//
        const sidebarOverlayLinks = () => {
          let month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

          for (let i = 0; i < month.length; i++) {
            $(`#gr-book-${month[i]}`).attr('href', new GetArray.Akademici('overlay')[i].greenBookings);
            $(`#gr-edit-${month[i]}`).attr('href', new GetArray.Akademici('overlay')[i].greenInformation);

            $(`#pi-book-${month[i]}`).attr('href', new GetArray.Akademici('overlay')[i].pinkBookings);
            $(`#pi-edit-${month[i]}`).attr('href', new GetArray.Akademici('overlay')[i].pinkInformation);

            $(`#ye-book-${month[i]}`).attr('href', new GetArray.Akademici('overlay')[i].yellowBookings);
            $(`#ye-edit-${month[i]}`).attr('href', new GetArray.Akademici('overlay')[i].yellowInformation);

            $(`#or-book-${month[i]}`).attr('href', new GetArray.Akademici('overlay')[i].orangeBookings);
            $(`#or-edit-${month[i]}`).attr('href', new GetArray.Akademici('overlay')[i].orangeInformation);

            $(`#bl-book-${month[i]}`).attr('href', new GetArray.Akademici('overlay')[i].homeRecordings);
            $(`#bl-edit-${month[i]}`).attr('href', new GetArray.Akademici('overlay')[i].blueInformation);
          }
        };
        sidebarOverlayLinks();
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
}
