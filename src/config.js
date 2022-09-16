//--|►| RequireJS (Workflow Setup) |◄|--//
require(['config'], () => {
  let fontAwesomePro = 'vendors/font-awesome/js/all.min.js'; //--|◄| Font Awesome Pro (5.13.0) |◄|--//
  let jQuery = 'https://code.jquery.com/jquery-3.6.0.min.js'; //--|◄| jQuery (3.6.0) |◄|--//
  let main = 'main.js';

  require([fontAwesomePro, jQuery, main]);
  //--► console.log('--RequireJS Loaded'); ◄--//
});
