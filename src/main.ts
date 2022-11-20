import { Administrasie } from './code/administrasie';
import { Operasioneel } from './code/operasioneel';
import { Uitsendings } from './code/uitsendings';
import { Akademici } from './code/akademici';
import { Index } from './code/index';
namespace Main {
  //--|▼| Add monetization services |▼|--//
  const link = document.querySelector('link[rel="monetization"]');
  link.addEventListener('monetization', () => {
    console.log('Yippie! Monetization is on.');
  });

  //--|▼| Finds the location of the *.html file |▼|--//
  const page: String = window.location.href.split('/').pop().split('.')[0];
  switch (page) {
    case 'index':
      new Index.LoadDesign(page);
      //--► console.log('--index.js Loaded'); ◄--//
      break;
    case 'uitsendings':
      new Uitsendings.LoadDesign(page);
      //--► console.log('--uitsendings.js Loaded'); ◄--//
      break;
    case 'akademici':
      // console.log('Load .ts');
      new Akademici.LoadDesign(page);
      //--► console.log('--akademici.js Loaded'); ◄--//
      break;
    case 'administrasie':
      new Administrasie.LoadDesign(page);
      //--► console.log('--administrasie.js Loaded'); ◄--//
      break;
    case 'operasioneel':
      new Operasioneel.LoadDesign(page);
      //--► console.log('--operasioneel.js Loaded'); ◄--//
      break;
  }
}
