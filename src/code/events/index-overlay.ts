export namespace IndexOverlay {
  export function eventsFor(pageName: String | 'default-overlay' | 'sidebar-overlay') {
    const indexBody: HTMLElement = document.getElementById('index-body');
    const indexHeader: HTMLElement = document.getElementById('index-header');
    const indexMain: HTMLElement = document.getElementById('index-main');
    const indexSidebar: HTMLElement = document.getElementById('index-sidebar');
    let sidebarButtons: Object = document.querySelectorAll('#index-sidebar > div > button > a > h1');
    let activeButtons: Object = document.querySelectorAll('#index-sidebar > div');

    const indexOverlay: HTMLElement = document.getElementById('index-overlay');
    let januaryContainer: HTMLElement = indexOverlay.querySelector('#january');
    let februaryContainer: HTMLElement = indexOverlay.querySelector('#february');
    let marchContainer: HTMLElement = indexOverlay.querySelector('#march');
    let aprilContainer: HTMLElement = indexOverlay.querySelector('#april');
    let mayContainer: HTMLElement = indexOverlay.querySelector('#may');
    let juneContainer: HTMLElement = indexOverlay.querySelector('#june');
    let julyContainer: HTMLElement = indexOverlay.querySelector('#july');
    let augustContainer: HTMLElement = indexOverlay.querySelector('#august');
    let septemberContainer: HTMLElement = indexOverlay.querySelector('#september');
    let octoberContainer: HTMLElement = indexOverlay.querySelector('#october');
    let novemberContainer: HTMLElement = indexOverlay.querySelector('#november');
    let decemberContainer: HTMLElement = indexOverlay.querySelector('#december');

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

    switch (pageName) {
      case 'default-overlay':
        break;
      case 'sidebar-overlay':
        IndexOverlay.monthHighlight(indexOverlay);

        $(sidebarButtons).on('mouseenter', () => {
          indexOverlay.style.display = 'grid';
        });

        //--|▼| Events toggle through columns: Column #1 |▼|--//
        $('a[id*="gr-sheet"]').on('mouseenter', () => {});
        $('a[id*="gr-sheet"]').on('mouseenter', () => {
          changeBanner('Green Admin');
        });
        $('a[id*="pi-sheet"]').on('mouseenter', () => {
          changeBanner('Pink Admin');
        });
        $('a[id*="ye-sheet"]').on('mouseenter', () => {
          changeBanner('Yellow Admin');
        });
        $('a[id*="or-sheet"]').on('mouseenter', () => {
          changeBanner('Orange Admin');
        });
        $('a[id*="bl-sheet"]').on('mouseenter', () => {
          changeBanner('Blue Admin');
        });
        //--|▼| Column #2 |▼|--//
        $('a[id*="gr-edit"]').on('mouseenter', () => {
          changeBanner('Green Uploads');
        });
        $('a[id*="pi-edit"]').on('mouseenter', () => {
          changeBanner('Pink Uploads');
        });
        $('a[id*="ye-edit"]').on('mouseenter', () => {
          changeBanner('Yellow Uploads');
        });
        $('a[id*="or-edit"]').on('mouseenter', () => {
          changeBanner('Orange Uploads');
        });
        $('a[id*="bl-edit"]').on('mouseenter', () => {
          changeBanner('Blue Uploads');
        });
        //--|▼| Column #3 |▼|--//
        $('a[id*="gr-book"]').on('mouseenter', () => {
          changeBanner('Green Bookings');
        });
        $('a[id*="pi-book"]').on('mouseenter', () => {
          changeBanner('Pink Bookings');
        });
        $('a[id*="ye-book"]').on('mouseenter', () => {
          changeBanner('Yellow Bookings');
        });
        $('a[id*="or-book"]').on('mouseenter', () => {
          changeBanner('Orange Bookings');
        });
        $('a[id*="bl-book"]').on('mouseenter', () => {
          changeBanner('Blue Bookings');
        });
        //--|▼| Column #4 |▼|--//
        $('a[id*="gr-cloud"]').on('mouseenter', () => {
          changeBanner('Green Storage');
        });
        $('a[id*="pi-cloud"]').on('mouseenter', () => {
          changeBanner('Pink Storage');
        });
        $('a[id*="ye-cloud"]').on('mouseenter', () => {
          changeBanner('Yellow Storage');
        });
        $('a[id*="or-cloud"]').on('mouseenter', () => {
          changeBanner('Orange Storage');
        });
        $('a[id*="bl-cloud"]').on('mouseenter', () => {
          changeBanner('Blue Storage');
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
        $(januaryContainer).on('mouseleave', () => {
          document.querySelector('#january main h1').textContent = 'January';
        });
        $(januaryBanner).on('mouseenter', () => {
          document.querySelector('#january main h1').textContent = 'January';
        });

        $(februaryContainer).on('mouseleave', () => {
          document.querySelector('#february main h1').textContent = 'February';
        });
        $(februaryBanner).on('mouseenter', () => {
          document.querySelector('#february main h1').textContent = 'February';
        });

        $(marchContainer).on('mouseleave', () => {
          document.querySelector('#march main h1').textContent = 'March';
        });
        $(marchBanner).on('mouseenter', () => {
          document.querySelector('#march main h1').textContent = 'March';
        });

        $(aprilContainer).on('mouseleave', () => {
          document.querySelector('#april main h1').textContent = 'April';
        });
        $(aprilBanner).on('mouseenter', () => {
          document.querySelector('#april main h1').textContent = 'April';
        });

        $(mayContainer).on('mouseleave', () => {
          document.querySelector('#may main h1').textContent = 'May';
        });
        $(mayBanner).on('mouseenter', () => {
          document.querySelector('#may main h1').textContent = 'May';
        });

        $(juneContainer).on('mouseleave', () => {
          document.querySelector('#june main h1').textContent = 'June';
        });
        $(juneBanner).on('mouseenter', () => {
          document.querySelector('#june main h1').textContent = 'June';
        });

        $(julyContainer).on('mouseleave', () => {
          document.querySelector('#july main h1').textContent = 'July';
        });
        $(julyBanner).on('mouseenter', () => {
          document.querySelector('#july main h1').textContent = 'July';
        });

        $(augustContainer).on('mouseleave', () => {
          document.querySelector('#august main h1').textContent = 'August';
        });
        $(augustBanner).on('mouseenter', () => {
          document.querySelector('#august main h1').textContent = 'August';
        });

        $(septemberContainer).on('mouseleave', () => {
          document.querySelector('#september main h1').textContent = 'September';
        });
        $(septemberBanner).on('mouseenter', () => {
          document.querySelector('#september main h1').textContent = 'September';
        });

        $(octoberContainer).on('mouseleave', () => {
          document.querySelector('#october main h1').textContent = 'October';
        });
        $(octoberBanner).on('mouseenter', () => {
          document.querySelector('#october main h1').textContent = 'October';
        });

        $(novemberContainer).on('mouseleave', () => {
          document.querySelector('#november main h1').textContent = 'November';
        });
        $(novemberBanner).on('mouseenter', () => {
          document.querySelector('#november main h1').textContent = 'November';
        });

        $(decemberContainer).on('mouseleave', () => {
          document.querySelector('#december main h1').textContent = 'December';
        });
        $(decemberBanner).on('mouseenter', () => {
          document.querySelector('#december main h1').textContent = 'December';
        });
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
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
  export function changeBanner(text: String) {
    document.querySelector('#january main h1').textContent = `${text}`;
    document.querySelector('#february main h1').textContent = `${text}`;
    document.querySelector('#march main h1').textContent = `${text}`;
    document.querySelector('#april main h1').textContent = `${text}`;
    document.querySelector('#may main h1').textContent = `${text}`;
    document.querySelector('#june main h1').textContent = `${text}`;
    document.querySelector('#july main h1').textContent = `${text}`;
    document.querySelector('#august main h1').textContent = `${text}`;
    document.querySelector('#september main h1').textContent = `${text}`;
    document.querySelector('#october main h1').textContent = `${text}`;
    document.querySelector('#november main h1').textContent = `${text}`;
    document.querySelector('#december main h1').textContent = `${text}`;
  }
}
