import { GetDesign } from 'code/utilities/GetDesign';
export namespace UitsendingsMain {
  export function eventsFor(pageName: String | 'login-main' | 'opdatering-main' | 'rooster-main' | 'statistieke-main' | 'rain-main') {
    const uitsendingsBody: HTMLElement = document.getElementById('uitsendings-body');
    const uitsendingsHeader: HTMLElement = document.getElementById('uitsendings-header');
    const uitsendingsMain: HTMLElement = document.getElementById('uitsendings-main');
    const uitsendingsSidebar: HTMLElement = document.getElementById('uitsendings-sidebar');
    const uitsendingsOverlay: HTMLElement = document.getElementById('uitsendings-overlay');
    const uitsendingsFooter: HTMLElement = document.getElementById('uitsendings-footer');
    const uitsendingsData: HTMLElement = document.getElementById('uitsendings-data');

    switch (pageName) {
      case 'default-main':
        //--|▼| Displays progress update  |▼|--//
        $('.show-numbers button').on('click', () => {
          uitsendingsFooter.querySelector('#opdatering div').className = 'active';
          new GetDesign.forPage('opdatering-main');
        });
        break;
      case 'opdatering-main':
        //--|▼| Change header date to present |▼|--//
        uitsendingsMain.querySelector(`#${pageName.split('-')[0]}-date h1`).innerHTML = UitsendingsMain.getPresent('Weekday, 00 Month YYYY');

        //--|▼| Toggles between sheets to show extra figures |▼|--//
        const toggleNumbers = (uitsendingsMain: HTMLElement, uitsendingsData: HTMLElement) => {
          let button: HTMLDivElement = uitsendingsMain.querySelector('#opdatering-date div:nth-child(3)');
          let navigation: HTMLElement = uitsendingsMain.querySelector('#opdatering-buttons nav');
          let information: HTMLIFrameElement = uitsendingsMain.querySelector('#opdatering-sheets header iframe');

          $(button).on('click', () => {
            //--▼ Toggles the button when clicked ▼--//
            switch (information.id) {
              case 'original':
                button.classList.remove('hide-original');
                button.classList.add('hide-additional');

                navigation.classList.remove('show-original');
                navigation.classList.add('show-additional');

                information.id = 'additional';
                break;
              case 'additional':
                button.classList.remove('hide-additional');
                button.classList.add('hide-original');

                navigation.classList.remove('show-additional');
                navigation.classList.add('show-original');

                information.id = 'original';
                break;
            }
            uitsendingsData.querySelector('main p').innerHTML = `${uitsendingsMain.querySelector('#opdatering-date div:nth-child(3)').className.split('-')[1]}`;
          });

          //--▼ Defaults to the last viewed information ▼--//
          if (uitsendingsData.querySelector('main p') !== null) {
            var studios = uitsendingsData.querySelector('main p').textContent;
            switch (studios) {
              case 'original':
                button.classList.remove('hide-additional');
                button.classList.add('hide-original');

                navigation.classList.remove('show-additional');
                navigation.classList.add('show-original');

                information.id = 'original';
                // console.log();
                break;
              case 'additional':
                button.classList.remove('hide-original');
                button.classList.add('hide-additional');

                navigation.classList.remove('show-original');
                navigation.classList.add('show-additional');

                information.id = 'additional';

                break;
            }
          }
        };
        toggleNumbers(uitsendingsMain, uitsendingsData);

        //--|▼| Clears data by showing screensaver on button click |▼|--//
        UitsendingsMain.showScreensaver('opdatering', uitsendingsMain, uitsendingsFooter, uitsendingsData);
        break;
      case 'rooster-main':
        //--|▼| Change header date to present |▼|--//
        uitsendingsMain.querySelector(`#${pageName.split('-')[0]}-date h1`).innerHTML = UitsendingsMain.getPresent('Weekday, 00 Month YYYY');

        //--|▼| Clears data by showing screensaver on button click |▼|--//
        UitsendingsMain.showScreensaver('rooster', uitsendingsMain, uitsendingsFooter, uitsendingsData);
        break;
      case 'statistieke-main':
        //--|▼| Change header date to present |▼|--//
        uitsendingsMain.querySelector(`#${pageName.split('-')[0]}-date h1`).innerHTML = UitsendingsMain.getPresent('Weekday, 00 Month YYYY');

        //--|▼| Clears data by showing screensaver on button click |▼|--//
        UitsendingsMain.showScreensaver('statistieke', uitsendingsMain, uitsendingsFooter, uitsendingsData);
        break;
      case 'rain-main':
        //--|▼| Appends rain droplets into containers |▼|--//
        const rainEffect = (uitsendingsMain: HTMLElement) => {
          let topContainer: HTMLElement = uitsendingsMain.querySelector('.rain-top');
          let bottomContainer: HTMLElement = uitsendingsMain.querySelector('.rain-bottom');
          function addRain(container: HTMLElement, amount: number) {
            let i: number = 0;
            let rainDrops: Number = amount;
            while (i < rainDrops) {
              var drop = document.createElement('i');

              var size = Math.random() * 5;
              var posX = Math.floor(Math.random() * window.innerWidth);

              var delay = Math.random() * -20;
              var duration = Math.random() * 5;

              drop.style.width = 0.2 + size + 'px';
              drop.style.left = posX + 'px';
              drop.style.animationDelay = delay + 's';
              drop.style.animationDuration = 4 + duration + 's';

              container.appendChild(drop);

              i++;
            }
          }
          addRain(topContainer, 65);
          addRain(bottomContainer, 10);
        };
        rainEffect(uitsendingsMain);

        //--|▼| Reverts back to previously displayed information |▼|--//
        const showInfo = (uitsendingsMain: HTMLElement, uitsendingsFooter: HTMLElement, uitsendingsData: HTMLElement) => {
          let revealContent: HTMLButtonElement = uitsendingsMain.querySelector(' .show-numbers button');
          let revertMain: String = uitsendingsData.querySelector('footer p').innerHTML;
          $(revealContent).on('click', () => {
            uitsendingsFooter.querySelector(`#${revertMain} div`).className = 'active';
            switch (revertMain) {
              case 'opdatering':
                new GetDesign.forPage('opdatering-main');
                break;
              case 'rooster':
                new GetDesign.forPage('rooster-main');
                break;
              case 'statistieke':
                new GetDesign.forPage('statistieke-main');
                break;
            }
          });
        };
        showInfo(uitsendingsMain, uitsendingsFooter, uitsendingsData);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
  export function showScreensaver(container: 'opdatering' | 'rooster' | 'statistieke', uitsendingsMain: HTMLElement, uitsendingsFooter: HTMLElement, uitsendingsData: HTMLElement) {
    let hideInfo: HTMLElement = uitsendingsMain.querySelector(`#${container}-date  .hide-numbers`);
    let footerButtons: Object = uitsendingsFooter.getElementsByTagName('nav');

    function toggleButtons(buttons: Object, uitsendingsFooter: HTMLElement, uitsendingsData: HTMLElement) {
      uitsendingsData.querySelector('footer p').innerHTML = `${uitsendingsFooter.querySelector('nav .active h3').textContent.toLowerCase()}`;
      //--▼ Deactivates Footer Buttons ▼--//
      for (let i = 0; i < Object.keys(buttons).length; i++) {
        buttons[i].querySelector('div').className = '';
      }
    }
    $(hideInfo).on('click', () => {
      toggleButtons(footerButtons, uitsendingsFooter, uitsendingsData);
      new GetDesign.forPage('rain-main');
    });
  }

  export function getPresent(format: String | '2000-01-01' | 'Weekday, 00 Month YYYY' | '00 Weekday, Month YYYY') {
    const presentDate: String = Date();
    let monthDay: String | Number = presentDate.split(' ')[2];

    const weekdayEN: Array<String> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekdagAF: Array<String> = ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'];
    let weekday = weekdayEN[new Date().getDay()];
    let weekdag = weekdagAF[new Date().getDay()];

    const monthEN: Array<String> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const maandAF: Array<String> = ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'];
    let month = monthEN[new Date().getMonth()];
    let maand = maandAF[new Date().getMonth()];

    const monthNumber: Array<String> = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let monthNumerical: String = monthNumber[new Date().getMonth()];

    let year: String = presentDate.split(' ')[3];

    switch (format) {
      case '2000-01-01':
        return `${year}-${monthNumerical}-${monthDay}`;
      case 'Weekday, 00 Month YYYY':
        return `${weekdag}, ${monthDay} ${maand} ${year}`;
      case '00 Weekday, Month YYYY':
        return `${monthDay} ${weekdag}, ${maand} ${year}`;
      default:
        return 'Undefined date format';
    }
  }
}
