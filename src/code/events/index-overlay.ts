import { GetDesign } from 'code/utilities/GetDesign';
export namespace IndexOverlay {
  export function eventsFor(pageName: String | 'default-overlay' | 'header-overlay' | 'sidebar-overlay') {
    const indexBody: HTMLElement = document.getElementById('index-body');

    const indexHeader: HTMLElement = document.getElementById('index-header');
    let headerButtons: Object = indexHeader.querySelectorAll('nav[id*="button"] div');
    let headerUitsendings: HTMLElement = indexHeader.querySelector('#uitsendings-button div button');
    let headerDepartemente: HTMLElement = indexHeader.querySelector('#departemente-button div button');

    const indexMain: HTMLElement = document.getElementById('index-main');

    const indexSidebar: HTMLElement = document.getElementById('index-sidebar');
    let sidebarButtons: Object = document.querySelectorAll('#index-sidebar > div > button > a > h1');
    let activeButtons: Object = document.querySelectorAll('#index-sidebar > div');

    const indexOverlay: HTMLElement = document.getElementById('index-overlay');
    let overlayBackground: HTMLElement = indexOverlay.querySelector('.background');
    let monthContainers: Object = indexOverlay.querySelectorAll('nav');
    let uitsendingsDropdown: HTMLElement = indexOverlay.querySelector('#uitsendings-dropdown');
    let departementeDropdown: HTMLElement = indexOverlay.querySelector('#departemente-dropdown');

    let januaryBanner: HTMLElement = indexOverlay.querySelector('#january main');
    let februaryBanner: HTMLElement = indexOverlay.querySelector('#february main');
    let marchBanner: HTMLElement = indexOverlay.querySelector('#march main');
    let aprilBanner: HTMLElement = indexOverlay.querySelector('#april main');
    let mayBanner: HTMLElement = indexOverlay.querySelector('#may main');
    let juneBanner: HTMLElement = indexOverlay.querySelector('#june main');
    let julyBanner: HTMLElement = indexOverlay.querySelector('#july main');
    let augustBanner: HTMLElement = indexOverlay.querySelector('#august main');
    let septemberBanner: HTMLElement = indexOverlay.querySelector('#september main');
    let octoberBanner: HTMLElement = indexOverlay.querySelector('#october main');
    let novemberBanner: HTMLElement = indexOverlay.querySelector('#november main');
    let decemberBanner: HTMLElement = indexOverlay.querySelector('#december main');
    let overlayBanners: Object = document.querySelectorAll('nav main h1');

    const indexFooter: HTMLElement = document.getElementById('index-footer');

    const indexData: HTMLElement = document.getElementById('index-data');

    let toggleButtons = (visible: HTMLElement, hidden: HTMLElement) => {
      indexOverlay.style.display = 'grid';
      hidden.parentElement.className = '';
      visible.parentElement.className = 'active';
    };
    let toggleDropdowns = (visible: HTMLElement, hidden: HTMLElement, container: HTMLElement) => {
      hidden.style.display = 'none';
      visible.style.display = 'grid';
      container.style.display = 'grid';
    };
    let deactivateButtons = (buttons: Object, container: HTMLElement) => {
      //--|▼| Deactivate header buttons |▼|--//
      for (let i = 0; i < Object.keys(buttons).length; i++) {
        buttons[i].className = '';
      }
      container.style.display = 'none';
    };

    switch (pageName) {
      case 'default-overlay':
        break;
      case 'header-overlay':
        headerToggle(indexOverlay);
        $(headerUitsendings).on('mouseenter', () => {
          toggleDropdowns(uitsendingsDropdown, departementeDropdown, indexOverlay);
        });
        $(headerDepartemente).on('mouseenter', () => {
          toggleDropdowns(departementeDropdown, uitsendingsDropdown, indexOverlay);
        });
        $(overlayBackground).on('mouseenter', () => {
          deactivateButtons(headerButtons, indexOverlay);
        });
        break;
      case 'sidebar-overlay':
        IndexOverlay.monthHighlight(indexOverlay);
        // $(indexSidebar).on('mouseenter', () => {
        //   overlayBackground.style.opacity = '100';
        //   deactivateButtons(headerButtons, indexOverlay);
        // });
        $(sidebarButtons).on('mouseenter', () => {
          indexOverlay.style.display = 'grid';
        });
        $(overlayBackground).on('mouseenter', () => {
          resetNavigation(indexOverlay);
          indexOverlay.style.display = 'none';
          overlayBackground.style.opacity = '0';
        });
        //--|▼| Column #1 |▼|--//
        $('a[id*="gr-sheet"]').on('mouseenter', () => {
          bannerText('gr-sheet');
        });
        $('a[id*="pi-sheet"]').on('mouseenter', () => {
          bannerText('pi-sheet');
          // changeBanner('sheet');
        });
        $('a[id*="ye-sheet"]').on('mouseenter', () => {
          bannerText('ye-sheet');
          // changeBanner('sheet');
        });
        $('a[id*="or-sheet"]').on('mouseenter', () => {
          bannerText('or-sheet');
          // changeBanner('sheet');
        });
        $('a[id*="bl-sheet"]').on('mouseenter', () => {
          bannerText('bl-sheet');
          // changeBanner('sheet');
        });
        //--|▼| Column #2 |▼|--//
        $('a[id*="gr-edit"]').on('mouseenter', () => {
          bannerText('gr-edit');
        });
        $('a[id*="pi-edit"]').on('mouseenter', () => {
          bannerText('pi-edit');
        });
        $('a[id*="ye-edit"]').on('mouseenter', () => {
          bannerText('ye-edit');
        });
        $('a[id*="or-edit"]').on('mouseenter', () => {
          bannerText('or-edit');
        });
        $('a[id*="bl-edit"]').on('mouseenter', () => {
          bannerText('bl-edit');
        });
        //--|▼| Column #3 |▼|--//
        $('a[id*="gr-book"]').on('mouseenter', () => {
          bannerText('gr-book');
        });
        $('a[id*="pi-book"]').on('mouseenter', () => {
          bannerText('pi-book');
        });
        $('a[id*="ye-book"]').on('mouseenter', () => {
          bannerText('ye-book');
        });
        $('a[id*="or-book"]').on('mouseenter', () => {
          bannerText('or-book');
        });
        $('a[id*="bl-book"]').on('mouseenter', () => {
          bannerText('bl-boo');
        });
        //--|▼| Column #4 |▼|--//
        $('a[id*="gr-cloud"]').on('mouseenter', () => {
          bannerText('gr-cloud');
        });
        $('a[id*="pi-cloud"]').on('mouseenter', () => {
          bannerText('pi-cloud');
        });
        $('a[id*="ye-cloud"]').on('mouseenter', () => {
          bannerText('ye-cloud');
        });
        $('a[id*="or-cloud"]').on('mouseenter', () => {
          bannerText('or-cloud');
        });
        $('a[id*="bl-cloud"]').on('mouseenter', () => {
          bannerText('bl-cloud');
        });

        //--|▼| Show Month Overlays: 0 = 'January' |▼|--//
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
        //--|▼| When mouse leaves containe, reset banner |▼|--//
        $(januaryBanner).on('mouseenter', () => {
          document.querySelector('#january main h1').textContent = 'January';
        });
        $(februaryBanner).on('mouseenter', () => {
          document.querySelector('#february main h1').textContent = 'February';
        });
        $(marchBanner).on('mouseenter', () => {
          document.querySelector('#march main h1').textContent = 'March';
        });
        $(aprilBanner).on('mouseenter', () => {
          document.querySelector('#april main h1').textContent = 'April';
        });
        $(mayBanner).on('mouseenter', () => {
          document.querySelector('#may main h1').textContent = 'May';
        });
        $(juneBanner).on('mouseenter', () => {
          document.querySelector('#june main h1').textContent = 'June';
        });
        $(julyBanner).on('mouseenter', () => {
          document.querySelector('#july main h1').textContent = 'July';
        });
        $(augustBanner).on('mouseenter', () => {
          document.querySelector('#august main h1').textContent = 'August';
        });
        $(septemberBanner).on('mouseenter', () => {
          document.querySelector('#september main h1').textContent = 'September';
        });
        $(octoberBanner).on('mouseenter', () => {
          document.querySelector('#october main h1').textContent = 'October';
        });
        $(novemberBanner).on('mouseenter', () => {
          document.querySelector('#november main h1').textContent = 'November';
        });
        $(decemberBanner).on('mouseenter', () => {
          document.querySelector('#december main h1').textContent = 'December';
        });
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }

  export function headerToggle(indexOverlay: HTMLElement) {
    let activeButton = document.querySelector('#index-header nav .active').parentElement.id.split('-')[0];
    var uitsendingsDropdown: HTMLElement = indexOverlay.querySelector('#uitsendings-dropdown');
    var departementeDropdown: HTMLElement = indexOverlay.querySelector('#departemente-dropdown');
    switch (activeButton) {
      case 'uitsendings':
        uitsendingsDropdown.style.display = 'grid';
        departementeDropdown.style.display = 'none';
        break;
      case 'departemente':
        departementeDropdown.style.display = 'grid';
        uitsendingsDropdown.style.display = 'none';
        break;
      default:
        indexOverlay.style.display = 'none';
    }
  }
  export function displayOverlay(
    pageName: String,
    display: 'january' | 'february' | 'march' | 'april' | 'may' | 'june' | 'july' | 'august' | 'september' | 'october' | 'november' | 'december'
  ) {
    var month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    for (let i = 0; i < month.length; i++) {
      $(`.${pageName} #${month[i]}`).css('display', 'none');
    }
    $(`.${pageName} #${display}`).css('display', 'grid');
  }
  export function hideOverlay(deactivate: Object, container: HTMLElement) {
    for (let i = 0; i < Object.keys(deactivate).length; i++) {
      deactivate[i].className = '';
    }
    container.style.display = 'none';
  }
  export function monthHighlight(indexOverlay: HTMLElement) {
    const toggleClass = (container: HTMLElement) => {
      container.classList.remove('false');
      container.classList.add('true');
    };

    const date: String = `${new Date()}`;
    let dateArray: Array<string> = date.split(' ');
    let month: string = dateArray[1];
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
  }
  export function bannerText(icon: String) {
    let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    let maande = ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'];

    for (let i = 0; i < months.length; i++) {
      var banner: HTMLHeadElement = document.querySelector(`#${months[i]} main h1`);
      var buttonInfo: String = document.querySelector(`#${months[i]} a[id*='${icon}'] div button h1`).textContent;
      banner.textContent = `${buttonInfo}`;
    }
  }
  export function resetNavigation(indexOverlay: HTMLElement) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let maande = ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'];

    for (let i = 0; i < months.length; i++) {
      var element: HTMLElement = indexOverlay.querySelector(`#${months[i].toLowerCase()}`);
      indexOverlay.querySelector(`#${months[i].toLowerCase()} main h1`).textContent = maande[i];
      element.style.display = 'none';
    }
  }
}
