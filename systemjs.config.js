/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',

    // Themes plugins

    'jquery':                     'assets/plugins/jquery.min.js',
    'bootstrap':                  'assets/bootstrap/js/bootstrap.min.js',
    'modernizr':                  'assets/plugins/modernizr.js',
    'jquery.themepunch.tools':    'assets/plugins/rs-plugin/js/jquery.themepunch.tools.min.js',
    'jquery.themepunch.revolution': 'assets/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js',
    'isotope.pkgd':               'assets/plugins/isotope/isotope.pkgd.min.js',
    'jquery.magnific-popup':      'assets/plugins/magnific-popup/jquery.magnific-popup.min.js',
    'jquery.waypoints':           'assets/plugins/waypoints/jquery.waypoints.min.js',
    'jquery.countTo':             'assets/plugins/jquery.countTo.js',
    'jquery.parallax':            'assets/plugins/jquery.parallax-1.1.3.js',
    'jquery.validate':            'assets/plugins/jquery.validate.js',
    'jquery.vide':                'assets/plugins/vide/jquery.vide.js',
    'owl.carousel':               'assets/plugins/owl-carousel/owl.carousel.js',
    'jquery.browser':             'assets/plugins/jquery.browser.js',
    'SmoothScroll':               'assets/plugins/SmoothScroll.js',
    'template':                   'assets/js/template.js',
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },

    // Themes plugins

    'jquery':                     { format: 'global' , defaultExtension: 'js' },
    'bootstrap':                  { format: 'global' , defaultExtension: 'js' },
    'modernizr':                  { format: 'global' , defaultExtension: 'js' },
    'jquery.themepunch.tools':    {  format: 'global' , defaultExtension: 'js' },
    'jquery.themepunch.revolution': {  format: 'global' , defaultExtension: 'js' },
    'isotope.pkgd':               { format: 'global' , defaultExtension: 'js' },
    'jquery.magnific-popup':      { format: 'global' , defaultExtension: 'js' },
    'jquery.waypoints':           { format: 'global' , defaultExtension: 'js' },
    'jquery.countTo':             { format: 'global' , defaultExtension: 'js' },
    'jquery.parallax':            { format: 'global' , defaultExtension: 'js' },
    'jquery.validate':            { format: 'global' , defaultExtension: 'js' },
    'jquery.vide':                { format: 'global' , defaultExtension: 'js' },
    'owl.carousel':               { format: 'global' , defaultExtension: 'js' },
    'jquery.browser':             { format: 'global' , defaultExtension: 'js' },
    'SmoothScroll':               { format: 'global' , defaultExtension: 'js' },
    'template':                   { format: 'global' , defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',

    // Themes plugins
    
    'jquery',
    'bootstrap',
    'modernizr',
    'jquery.themepunch.tools',
    'jquery.themepunch.revolution',
    'isotope.pkgd',
    'jquery.magnific-popup',
    'jquery.waypoints',
    'jquery.countTo',
    'jquery.parallax',
    'jquery.validate',
    'jquery.vide',
    'owl.carousel',
    'jquery.browser',
    'SmoothScroll',
    'template',

  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
