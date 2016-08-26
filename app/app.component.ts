import { Component } from '@angular/core';

import 'jquery.waypoints';
import 'owl.carousel';
import 'jquery.countTo';


// import 'isotope.pkgd';
// import 'jquery.magnific-popup';
// import 'jquery.parallax';
// import 'jquery.validate';
// import 'jquery.vide';
// import 'jquery.browser';
// import 'SmoothScroll';


import { MainComponent } from './layout/main.component';

@Component({
  selector: 'enviou-site',
  templateUrl: './app/app.component.html',
  directives: [MainComponent]
})

export class AppComponent { }
