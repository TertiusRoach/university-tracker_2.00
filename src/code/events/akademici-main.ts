import { GetDesign } from 'code/utilities/GetDesign';
import { GetArray } from 'code/utilities/GetArray';
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
        //--|▼| Displays calender update  |▼|--//
        $('.show-numbers button').on('click', () => {
          akademiciFooter.querySelector('#rooster div').className = 'active';
          new GetDesign.forPage('rooster-main');
        });
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

        //--|▼| Replace links for this months' sheets |▼|--//
        const statistiekeMainLinks = (akademiciMain: HTMLElement) => {
          let date: String = `${new Date()}`;
          let dateArray: Array<string> = date.split(' ');
          let month: string = dateArray[1];
          switch (month) {
            case 'Jan':
              $('.green-book li button a').attr('href', new GetArray.Akademici('main')[0].greenBookings);
              $('.green-edit li button a').attr('href', new GetArray.Akademici('main')[0].greenLinks);

              $('.pink-book li button a').attr('href', new GetArray.Akademici('main')[0].greenBookings);
              $('.pink-edit li button a').attr('href', new GetArray.Akademici('main')[0].greenLinks);

              $('.yellow-book li button a').attr('href', new GetArray.Akademici('main')[0].greenBookings);
              $('.yellow-edit li button a').attr('href', new GetArray.Akademici('main')[0].greenLinks);

              $('.orange-book li button a').attr('href', new GetArray.Akademici('main')[0].greenBookings);
              $('.orange-edit li button a').attr('href', new GetArray.Akademici('main')[0].greenLinks);

              $('.blue-book li button a').attr('href', new GetArray.Akademici('main')[1].greenBookings);
              $('.blue-edit li button a').attr('href', new GetArray.Akademici('main')[1].greenLinks);
              break;
            case 'Feb':
              $('.green-book li button a').attr('href', new GetArray.Akademici('main')[1].greenBookings);
              $('.green-edit li button a').attr('href', new GetArray.Akademici('main')[1].greenLinks);

              $('.pink-book li button a').attr('href', new GetArray.Akademici('main')[1].greenBookings);
              $('.pink-edit li button a').attr('href', new GetArray.Akademici('main')[1].greenLinks);

              $('.yellow-book li button a').attr('href', new GetArray.Akademici('main')[1].greenBookings);
              $('.yellow-edit li button a').attr('href', new GetArray.Akademici('main')[1].greenLinks);

              $('.orange-book li button a').attr('href', new GetArray.Akademici('main')[1].greenBookings);
              $('.orange-edit li button a').attr('href', new GetArray.Akademici('main')[1].greenLinks);

              $('.blue-book li button a').attr('href', new GetArray.Akademici('main')[1].greenBookings);
              $('.blue-edit li button a').attr('href', new GetArray.Akademici('main')[1].greenLinks);
              break;
            case 'Mar':
              $('.green-book li button a').attr('href', new GetArray.Akademici('main')[2].greenBookings);
              $('.green-edit li button a').attr('href', new GetArray.Akademici('main')[2].greenLinks);

              $('.pink-book li button a').attr('href', new GetArray.Akademici('main')[2].greenBookings);
              $('.pink-edit li button a').attr('href', new GetArray.Akademici('main')[2].greenLinks);

              $('.yellow-book li button a').attr('href', new GetArray.Akademici('main')[2].greenBookings);
              $('.yellow-edit li button a').attr('href', new GetArray.Akademici('main')[2].greenLinks);

              $('.orange-book li button a').attr('href', new GetArray.Akademici('main')[2].greenBookings);
              $('.orange-edit li button a').attr('href', new GetArray.Akademici('main')[2].greenLinks);

              $('.blue-book li button a').attr('href', new GetArray.Akademici('main')[2].greenBookings);
              $('.blue-edit li button a').attr('href', new GetArray.Akademici('main')[2].greenLinks);
              break;
            case 'Apr':
              $('.green-book li button a').attr('href', new GetArray.Akademici('main')[3].greenBookings);
              $('.green-edit li button a').attr('href', new GetArray.Akademici('main')[3].greenLinks);

              $('.pink-book li button a').attr('href', new GetArray.Akademici('main')[3].greenBookings);
              $('.pink-edit li button a').attr('href', new GetArray.Akademici('main')[3].greenLinks);

              $('.yellow-book li button a').attr('href', new GetArray.Akademici('main')[3].greenBookings);
              $('.yellow-edit li button a').attr('href', new GetArray.Akademici('main')[3].greenLinks);

              $('.orange-book li button a').attr('href', new GetArray.Akademici('main')[3].greenBookings);
              $('.orange-edit li button a').attr('href', new GetArray.Akademici('main')[3].greenLinks);

              $('.blue-book li button a').attr('href', new GetArray.Akademici('main')[3].greenBookings);
              $('.blue-edit li button a').attr('href', new GetArray.Akademici('main')[3].greenLinks);
              break;
            case 'May':
              $('.green-book li button a').attr('href', new GetArray.Akademici('main')[4].greenBookings);
              $('.green-edit li button a').attr('href', new GetArray.Akademici('main')[4].greenLinks);

              $('.pink-book li button a').attr('href', new GetArray.Akademici('main')[4].greenBookings);
              $('.pink-edit li button a').attr('href', new GetArray.Akademici('main')[4].greenLinks);

              $('.yellow-book li button a').attr('href', new GetArray.Akademici('main')[4].greenBookings);
              $('.yellow-edit li button a').attr('href', new GetArray.Akademici('main')[4].greenLinks);

              $('.orange-book li button a').attr('href', new GetArray.Akademici('main')[4].greenBookings);
              $('.orange-edit li button a').attr('href', new GetArray.Akademici('main')[4].greenLinks);

              $('.blue-book li button a').attr('href', new GetArray.Akademici('main')[4].greenBookings);
              $('.blue-edit li button a').attr('href', new GetArray.Akademici('main')[4].greenLinks);
              break;
            case 'Jun':
              $('.green-book li button a').attr('href', new GetArray.Akademici('main')[5].greenBookings);
              $('.green-edit li button a').attr('href', new GetArray.Akademici('main')[5].greenLinks);

              $('.pink-book li button a').attr('href', new GetArray.Akademici('main')[5].greenBookings);
              $('.pink-edit li button a').attr('href', new GetArray.Akademici('main')[5].greenLinks);

              $('.yellow-book li button a').attr('href', new GetArray.Akademici('main')[5].greenBookings);
              $('.yellow-edit li button a').attr('href', new GetArray.Akademici('main')[5].greenLinks);

              $('.orange-book li button a').attr('href', new GetArray.Akademici('main')[5].greenBookings);
              $('.orange-edit li button a').attr('href', new GetArray.Akademici('main')[5].greenLinks);

              $('.blue-book li button a').attr('href', new GetArray.Akademici('main')[5].greenBookings);
              $('.blue-edit li button a').attr('href', new GetArray.Akademici('main')[5].greenLinks);
              break;
            case 'Jul':
              $('.green-book li button a').attr('href', new GetArray.Akademici('main')[6].greenBookings);
              $('.green-edit li button a').attr('href', new GetArray.Akademici('main')[6].greenLinks);

              $('.pink-book li button a').attr('href', new GetArray.Akademici('main')[6].greenBookings);
              $('.pink-edit li button a').attr('href', new GetArray.Akademici('main')[6].greenLinks);

              $('.yellow-book li button a').attr('href', new GetArray.Akademici('main')[6].greenBookings);
              $('.yellow-edit li button a').attr('href', new GetArray.Akademici('main')[6].greenLinks);

              $('.orange-book li button a').attr('href', new GetArray.Akademici('main')[6].greenBookings);
              $('.orange-edit li button a').attr('href', new GetArray.Akademici('main')[6].greenLinks);

              $('.blue-book li button a').attr('href', new GetArray.Akademici('main')[6].greenBookings);
              $('.blue-edit li button a').attr('href', new GetArray.Akademici('main')[6].greenLinks);
              break;
            case 'Aug':
              $('.green-book li button a').attr('href', new GetArray.Akademici('main')[7].greenBookings);
              $('.green-edit li button a').attr('href', new GetArray.Akademici('main')[7].greenLinks);

              $('.pink-book li button a').attr('href', new GetArray.Akademici('main')[7].greenBookings);
              $('.pink-edit li button a').attr('href', new GetArray.Akademici('main')[7].greenLinks);

              $('.yellow-book li button a').attr('href', new GetArray.Akademici('main')[7].greenBookings);
              $('.yellow-edit li button a').attr('href', new GetArray.Akademici('main')[7].greenLinks);

              $('.orange-book li button a').attr('href', new GetArray.Akademici('main')[7].greenBookings);
              $('.orange-edit li button a').attr('href', new GetArray.Akademici('main')[7].greenLinks);

              $('.blue-book li button a').attr('href', new GetArray.Akademici('main')[7].greenBookings);
              $('.blue-edit li button a').attr('href', new GetArray.Akademici('main')[7].greenLinks);
              break;
            case 'Sep':
              $('.green-book li button a').attr('href', new GetArray.Akademici('main')[8].greenBookings);
              $('.green-edit li button a').attr('href', new GetArray.Akademici('main')[8].greenLinks);

              $('.pink-book li button a').attr('href', new GetArray.Akademici('main')[8].greenBookings);
              $('.pink-edit li button a').attr('href', new GetArray.Akademici('main')[8].greenLinks);

              $('.yellow-book li button a').attr('href', new GetArray.Akademici('main')[8].greenBookings);
              $('.yellow-edit li button a').attr('href', new GetArray.Akademici('main')[8].greenLinks);

              $('.orange-book li button a').attr('href', new GetArray.Akademici('main')[8].greenBookings);
              $('.orange-edit li button a').attr('href', new GetArray.Akademici('main')[8].greenLinks);

              $('.blue-book li button a').attr('href', new GetArray.Akademici('main')[8].greenBookings);
              $('.blue-edit li button a').attr('href', new GetArray.Akademici('main')[8].greenLinks);
              break;
            case 'Oct':
              $('.green-book li button a').attr('href', new GetArray.Akademici('main')[9].greenBookings);
              $('.green-edit li button a').attr('href', new GetArray.Akademici('main')[9].greenLinks);

              $('.pink-book li button a').attr('href', new GetArray.Akademici('main')[9].greenBookings);
              $('.pink-edit li button a').attr('href', new GetArray.Akademici('main')[9].greenLinks);

              $('.yellow-book li button a').attr('href', new GetArray.Akademici('main')[9].greenBookings);
              $('.yellow-edit li button a').attr('href', new GetArray.Akademici('main')[9].greenLinks);

              $('.orange-book li button a').attr('href', new GetArray.Akademici('main')[9].greenBookings);
              $('.orange-edit li button a').attr('href', new GetArray.Akademici('main')[9].greenLinks);

              $('.blue-book li button a').attr('href', new GetArray.Akademici('main')[9].greenBookings);
              $('.blue-edit li button a').attr('href', new GetArray.Akademici('main')[9].greenLinks);
              break;
            case 'Nov':
              $('.green-book li button a').attr('href', new GetArray.Akademici('main')[10].greenBookings);
              $('.green-edit li button a').attr('href', new GetArray.Akademici('main')[10].greenLinks);

              $('.pink-book li button a').attr('href', new GetArray.Akademici('main')[10].greenBookings);
              $('.pink-edit li button a').attr('href', new GetArray.Akademici('main')[10].greenLinks);

              $('.yellow-book li button a').attr('href', new GetArray.Akademici('main')[10].greenBookings);
              $('.yellow-edit li button a').attr('href', new GetArray.Akademici('main')[10].greenLinks);

              $('.orange-book li button a').attr('href', new GetArray.Akademici('main')[10].greenBookings);
              $('.orange-edit li button a').attr('href', new GetArray.Akademici('main')[10].greenLinks);

              $('.blue-book li button a').attr('href', new GetArray.Akademici('main')[10].greenBookings);
              $('.blue-edit li button a').attr('href', new GetArray.Akademici('main')[10].greenLinks);
              break;
            case 'Dec':
              $('.green-book li button a').attr('href', new GetArray.Akademici('main')[11].greenBookings);
              $('.green-edit li button a').attr('href', new GetArray.Akademici('main')[11].greenLinks);

              $('.pink-book li button a').attr('href', new GetArray.Akademici('main')[11].greenBookings);
              $('.pink-edit li button a').attr('href', new GetArray.Akademici('main')[11].greenLinks);

              $('.yellow-book li button a').attr('href', new GetArray.Akademici('main')[11].greenBookings);
              $('.yellow-edit li button a').attr('href', new GetArray.Akademici('main')[11].greenLinks);

              $('.orange-book li button a').attr('href', new GetArray.Akademici('main')[11].greenBookings);
              $('.orange-edit li button a').attr('href', new GetArray.Akademici('main')[11].greenLinks);

              $('.blue-book li button a').attr('href', new GetArray.Akademici('main')[11].greenBookings);
              $('.blue-edit li button a').attr('href', new GetArray.Akademici('main')[11].greenLinks);
              break;
          }
        };
        statistiekeMainLinks(akademiciMain);
        break;
      case 'rain-main':
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
