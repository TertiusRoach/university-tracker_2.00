import { GetDesign } from 'code/utilities/GetDesign';
export namespace IndexMain {
  export function eventsFor(pageName: String | 'default-main' | 'opdatering-main' | 'rooster-main' | 'statistieke-main' | 'rain-main') {
    const indexBody: HTMLElement = document.getElementById('index-body');
    const indexHeader: HTMLElement = document.getElementById('index-header');
    const indexMain: HTMLElement = document.getElementById('index-main');
    const indexSidebar: HTMLElement = document.getElementById('index-sidebar');
    const indexOverlay: HTMLElement = document.getElementById('index-overlay');
    const indexFooter: HTMLElement = document.getElementById('index-footer');
    const indexData: HTMLElement = document.getElementById('index-data');

    switch (pageName) {
      case 'default-main':
        break;
      case 'opdatering-main':
        //--|▼| Change header date to present |▼|--//
        indexMain.querySelector(`#${pageName.split('-')[0]}-date h1`).innerHTML = IndexMain.getPresent('Weekday, 00 Month YYYY');

        //--|▼| Toggles between sheets to show extra figures |▼|--//
        const toggleNumbers = (indexMain: HTMLElement, indexData: HTMLElement) => {
          let button: HTMLDivElement = indexMain.querySelector('#opdatering-date div:nth-child(3)');
          let navigation: HTMLElement = indexMain.querySelector('#opdatering-buttons nav');
          let information: HTMLIFrameElement = indexMain.querySelector('#opdatering-sheets header iframe');

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
            indexData.querySelector('main p').innerHTML = `${indexMain.querySelector('#opdatering-date div:nth-child(3)').className.split('-')[1]}`;
          });

          //--▼ Defaults to the last viewed information ▼--//
          if (indexData.querySelector('main p') !== null) {
            var studios = indexData.querySelector('main p').textContent;
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
        toggleNumbers(indexMain, indexData);

        //--|▼| Clears data by showing screensaver on button click |▼|--//
        IndexMain.showScreensaver('opdatering', indexMain, indexFooter, indexData);
        break;
      case 'rooster-main':
        //--|▼| Change header date to present |▼|--//
        indexMain.querySelector(`#${pageName.split('-')[0]}-date h1`).innerHTML = IndexMain.getPresent('Weekday, 00 Month YYYY');

        //--|▼| Clears data by showing screensaver on button click |▼|--//
        IndexMain.showScreensaver('rooster', indexMain, indexFooter, indexData);
        break;
      case 'statistieke-main':
        //--|▼| Change header date to present |▼|--//
        indexMain.querySelector(`#${pageName.split('-')[0]}-date h1`).innerHTML = IndexMain.getPresent('Weekday, 00 Month YYYY');

        //--|▼| Clears data by showing screensaver on button click |▼|--//
        IndexMain.showScreensaver('statistieke', indexMain, indexFooter, indexData);
        break;
      case 'rain-main':
        //--|▼| Appends rain droplets into containers |▼|--//
        const rainEffect = (indexMain: HTMLElement) => {
          let topContainer: HTMLElement = indexMain.querySelector('.rain-top');
          let bottomContainer: HTMLElement = indexMain.querySelector('.rain-bottom');
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
        rainEffect(indexMain);

        //--|▼| Reverts back to previously displayed information |▼|--//
        const showInfo = (indexMain: HTMLElement, indexFooter: HTMLElement, indexData: HTMLElement) => {
          let revealContent: HTMLButtonElement = indexMain.querySelector(' .show-numbers button');
          let revertMain: String = indexData.querySelector('footer p').innerHTML;
          $(revealContent).on('click', () => {
            indexFooter.querySelector(`#${revertMain} div`).className = 'active';
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
        showInfo(indexMain, indexFooter, indexData);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
  export function showScreensaver(container: 'opdatering' | 'rooster' | 'statistieke', indexMain: HTMLElement, indexFooter: HTMLElement, indexData: HTMLElement) {
    let hideInfo: HTMLElement = indexMain.querySelector(`#${container}-date  .hide-numbers`);
    let footerButtons: Object = indexFooter.getElementsByTagName('nav');

    function toggleButtons(buttons: Object, indexFooter: HTMLElement, indexData: HTMLElement) {
      indexData.querySelector('footer p').innerHTML = `${indexFooter.querySelector('nav .active h3').textContent.toLowerCase()}`;
      //--▼ Deactivates Footer Buttons ▼--//
      for (let i = 0; i < Object.keys(buttons).length; i++) {
        buttons[i].querySelector('div').className = '';
      }
    }
    $(hideInfo).on('click', () => {
      toggleButtons(footerButtons, indexFooter, indexData);
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
