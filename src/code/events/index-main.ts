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
        //--|▼| Toggles between sheets to show extra figures |▼|--//
        const toggleNumbers = (indexMain: HTMLElement) => {
          let button: HTMLDivElement = indexMain.querySelector('#opdatering-date div:nth-child(3)');
          let navigation: HTMLElement = indexMain.querySelector('#opdatering-buttons nav');
          let information: HTMLIFrameElement = indexMain.querySelector('#opdatering-sheets header iframe');
          $(button).on('click', () => {
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
          });
        };
        toggleNumbers(indexMain);

        //--|▼| Clears and resets containers to hide data |▼|--//
        const showScreenOne = (indexMain: HTMLElement, indexFooter: HTMLElement, indexData: HTMLElement) => {
          let hideInfo: HTMLElement = indexMain.querySelector('#opdatering-date .hide-numbers');
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
            new GetDesign.forPage(`rain-main`);
          });
        };
        showScreenOne(indexMain, indexFooter, indexData);

        break;
      case 'rooster-main':
        //--|▼| Clears and resets containers to hide data |▼|--//
        const showScreenTwo = (indexMain: HTMLElement, indexFooter: HTMLElement, indexData: HTMLElement) => {
          let hideInfo: HTMLElement = indexMain.querySelector('#rooster-date .hide-numbers');
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
            new GetDesign.forPage(`rain-main`);
          });
        };
        showScreenTwo(indexMain, indexFooter, indexData);
        break;
      case 'statistieke-main':
        break;
      case 'rain-main':
        //--|▼| Appends rain droplets into containers |▼|--//
        const rainEffect = (indexMain: HTMLElement) => {
          let topContainer: HTMLElement = document.querySelector('body .rain-main .rain-top');
          let bottomContainer: HTMLElement = document.querySelector('body .rain-main .rain-bottom');
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
}
