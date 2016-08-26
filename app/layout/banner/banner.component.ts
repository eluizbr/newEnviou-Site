import { Component, OnInit } from '@angular/core';


import 'jquery.themepunch.tools';
import 'jquery.themepunch.revolution';

import { BannerLayoutService } from './banner.service';

@Component({
    moduleId: module.id,
    selector: 'enviou-banner',
    templateUrl: 'banner.component.html',
    providers: [BannerLayoutService]
})
export class BannerComponent implements OnInit {
    public menuJson:any = {};

    constructor(private _bannerLayoutService:BannerLayoutService) { }

    ngOnInit() { 
        this.getMenuJson();
    }

    getMenuJson(){
        return this._bannerLayoutService.getMenuLayout()
                    .then(menu => { this.menuJson = menu.json();})
                    .catch(err => console.log(err))
    }


}