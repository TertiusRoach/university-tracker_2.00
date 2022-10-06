import { Administrasie } from './code/administrasie';
import { Operasioneel } from './code/operasioneel';
import { Uitsendings } from './code/uitsendings';
import { Akademici } from './code/akademici';
import { Index } from './code/index';
namespace Main {
  //==================================//
  console.log(document.referrer);
  //==================================//
  //--|▼| Finds the location of the *.html file |▼|--//
  const page: String = window.location.href.split('/').pop().split('.')[0];
  switch (page) {
    case 'index':
      new Index.LoadDesign(page);
      break;
    case 'uitsendings':
      new Uitsendings.LoadDesign(page);
      break;
    case 'akademici':
      new Akademici.LoadDesign(page);
      break;
    case 'administrasie':
      new Administrasie.LoadDesign(page);
      break;
    case 'operasioneel':
      new Operasioneel.LoadDesign(page);
      break;
  }
}
