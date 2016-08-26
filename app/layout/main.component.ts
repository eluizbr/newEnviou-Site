import { Component, OnInit } from '@angular/core';

import { MenuComponent } from '../layout/menu/menu.component';
import { BannerComponent } from '../layout/banner/banner.component';


@Component({
    moduleId: module.id,
    selector: 'enviou-main',
    templateUrl: 'main.component.html',
    directives: [MenuComponent, BannerComponent]
})
export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}