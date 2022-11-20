import { Administrasie } from './code/administrasie';
import { Operasioneel } from './code/operasioneel';
import { Uitsendings } from './code/uitsendings';
import { Akademici } from './code/akademici';
import { Index } from './code/index';
namespace Main {
  //==================================//
  /* console.log(document.referrer); */
  //==================================//
  //--|▼| Finds the location of the *.html file |▼|--//
  const page: String = window.location.href.split('/').pop().split('.')[0];
  switch (page) {
    case 'index':
      console.log('Load index.ts');
      new Index.LoadDesign(page);
      break;
    case 'uitsendings':
      // console.log('Load uitsendings.ts');
      new Uitsendings.LoadDesign(page);
      break;
    case 'akademici':
      // console.log('Load akademici.ts');
      new Akademici.LoadDesign(page);
      break;
    case 'administrasie':
      // console.log('Load administrasie.ts');
      new Administrasie.LoadDesign(page);
      break;
    case 'operasioneel':
      // console.log('Load operasioneel.ts');
      new Operasioneel.LoadDesign(page);
      break;
  }
}
