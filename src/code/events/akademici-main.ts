import { GetDesign } from 'code/utilities/GetDesign';
export namespace AkademiciMain {
  export function eventsFor(pageName: String | 'default-main' | 'opdatering-main' | 'rooster-main' | 'statistieke-main' | 'rain-main') {
    const akademiciBody: HTMLElement = document.getElementById('akademici-body');
    const akademiciHeader: HTMLElement = document.getElementById('akademici-header');
    const akademiciMain: HTMLElement = document.getElementById('akademici-main');
    const akademiciSidebar: HTMLElement = document.getElementById('akademici-sidebar');
    const akademiciOverlay: HTMLElement = document.getElementById('akademici-overlay');
    const akademiciFooter: HTMLElement = document.getElementById('akademici-footer');
    const akademiciData: HTMLElement = document.getElementById('akademici-data');

    switch (pageName) {
      case 'default-main':
        break;
      case 'rooster-main':
        //--|▼| Change header date to present |▼|--//
        akademiciMain.querySelector(`#${pageName.split('-')[0]}-date h1`).innerHTML = AkademiciMain.getPresent('Weekday, 00 Month YYYY');

        //--|▼| Clears data by showing screensaver on button click |▼|--//
        AkademiciMain.showScreensaver('rooster', akademiciMain, akademiciFooter, akademiciData);
        break;
      case 'statistieke-main':
        //--|▼| Change header date to present |▼|--//
        akademiciMain.querySelector(`#${pageName.split('-')[0]}-date h1`).innerHTML = AkademiciMain.getPresent('Weekday, 00 Month YYYY');

        //--|▼| Clears data by showing screensaver on button click |▼|--//
        AkademiciMain.showScreensaver('statistieke', akademiciMain, akademiciFooter, akademiciData);
        break;
      case 'stars-main':
        /*
        //--|▼| Appends rain droplets into containers |▼|--//
        const rainEffect = (akademiciMain: HTMLElement) => {
          let topContainer: HTMLElement = akademiciMain.querySelector('.rain-top');
          let bottomContainer: HTMLElement = akademiciMain.querySelector('.rain-bottom');
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
        rainEffect(akademiciMain);

        //--|▼| Reverts back to previously displayed information |▼|--//
        const showInfo = (akademiciMain: HTMLElement, akademiciFooter: HTMLElement, akademiciData: HTMLElement) => {
          let revealContent: HTMLButtonElement = akademiciMain.querySelector(' .show-numbers button');
          let revertMain: String = akademiciData.querySelector('footer p').innerHTML;
          $(revealContent).on('click', () => {
            akademiciFooter.querySelector(`#${revertMain} div`).className = 'active';
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
        showInfo(akademiciMain, akademiciFooter, akademiciData);
        */
        break;
    }
    //--► console.log(`--${pageName} Loaded`); ◄--//
  }
  export function showScreensaver(container: 'opdatering' | 'rooster' | 'statistieke', akademiciMain: HTMLElement, akademiciFooter: HTMLElement, akademiciData: HTMLElement) {
    let hideInfo: HTMLElement = akademiciMain.querySelector(`#${container}-date  .hide-numbers`);
    let footerButtons: Object = akademiciFooter.getElementsByTagName('nav');

    function toggleButtons(buttons: Object, akademiciFooter: HTMLElement, akademiciData: HTMLElement) {
      akademiciData.querySelector('footer p').innerHTML = `${akademiciFooter.querySelector('nav .active h3').textContent.toLowerCase()}`;
      //--▼ Deactivates Footer Buttons ▼--//
      for (let i = 0; i < Object.keys(buttons).length; i++) {
        buttons[i].querySelector('div').className = '';
      }
    }
    $(hideInfo).on('click', () => {
      toggleButtons(footerButtons, akademiciFooter, akademiciData);
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
