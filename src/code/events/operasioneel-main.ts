import { GetDesign } from 'code/utilities/GetDesign';
export namespace OperasioneelMain {
  export function eventsFor(pageName: String | 'default-main' | 'opdatering-main' | 'rooster-main' | 'statistieke-main' | 'rain-main') {
    const operasioneelBody: HTMLElement = document.getElementById('operasioneel-body');
    const operasioneelHeader: HTMLElement = document.getElementById('operasioneel-header');
    const operasioneelMain: HTMLElement = document.getElementById('operasioneel-main');
    const operasioneelSidebar: HTMLElement = document.getElementById('operasioneel-sidebar');
    const operasioneelOverlay: HTMLElement = document.getElementById('operasioneel-overlay');
    const operasioneelFooter: HTMLElement = document.getElementById('operasioneel-footer');
    const operasioneelData: HTMLElement = document.getElementById('operasioneel-data');

    switch (pageName) {
      case 'default-main':
        break;
      case 'projekte-main':
        //--|▼| Change header date to present |▼|--//
        operasioneelMain.querySelector(`#${pageName.split('-')[0]}-date h1`).innerHTML = OperasioneelMain.getPresent('Weekday, 00 Month YYYY');

        //--|▼| Clears data by showing screensaver on button click |▼|--//
        OperasioneelMain.showScreensaver('projekte', operasioneelMain, operasioneelFooter, operasioneelData);
        break;
      case 'ateljees-main':
        //--|▼| Change header date to present |▼|--//
        operasioneelMain.querySelector(`#${pageName.split('-')[0]}-date h1`).innerHTML = OperasioneelMain.getPresent('Weekday, 00 Month YYYY');

        //--|▼| Clears data by showing screensaver on button click |▼|--//
        OperasioneelMain.showScreensaver('ateljees', operasioneelMain, operasioneelFooter, operasioneelData);
        break;
      case 'rain-main':
        //--|▼| Appends rain droplets into containers |▼|--//
        const rainEffect = (operasioneelMain: HTMLElement) => {
          let topContainer: HTMLElement = operasioneelMain.querySelector('.rain-top');
          let bottomContainer: HTMLElement = operasioneelMain.querySelector('.rain-bottom');
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
        rainEffect(operasioneelMain);

        //--|▼| Reverts back to previously displayed information |▼|--//
        const showInfo = (operasioneelMain: HTMLElement, operasioneelFooter: HTMLElement, operasioneelData: HTMLElement) => {
          let revealContent: HTMLButtonElement = operasioneelMain.querySelector('.show-numbers button');
          let revertMain: String = operasioneelData.querySelector('footer p').innerHTML;
          $(revealContent).on('click', () => {
            operasioneelFooter.querySelector(`#${revertMain} div`).className = 'active';
            switch (revertMain) {
              case 'projekte':
                new GetDesign.forPage('projekte-main');
                break;
              case 'ateljees':
                new GetDesign.forPage('ateljees-main');
                break;
            }
          });
        };
        showInfo(operasioneelMain, operasioneelFooter, operasioneelData);
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
  export function showScreensaver(container: 'projekte' | 'ateljees', operasioneelMain: HTMLElement, operasioneelFooter: HTMLElement, operasioneelData: HTMLElement) {
    let hideInfo: HTMLElement = operasioneelMain.querySelector(`#${container}-date  .hide-numbers`);
    let footerButtons: Object = operasioneelFooter.getElementsByTagName('nav');

    function toggleButtons(buttons: Object, operasioneelFooter: HTMLElement, operasioneelData: HTMLElement) {
      operasioneelData.querySelector('footer p').innerHTML = `${operasioneelFooter.querySelector('nav .active h3').textContent.toLowerCase()}`;
      //--▼ Deactivates Footer Buttons ▼--//
      for (let i = 0; i < Object.keys(buttons).length; i++) {
        buttons[i].querySelector('div').className = '';
      }
    }
    $(hideInfo).on('click', () => {
      toggleButtons(footerButtons, operasioneelFooter, operasioneelData);
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
