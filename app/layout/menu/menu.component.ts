import { Component, OnInit } from '@angular/core';

import { MenuLayoutService } from './menu.service';

@Component({
    moduleId: module.id,
    selector: 'enviou-menu',
    templateUrl: 'menu.component.html',
    providers: [MenuLayoutService]
})
export class MenuComponent implements OnInit {

    private menuJson = [];

    constructor(private _menuLayoutService:MenuLayoutService) { }

    ngOnInit() { 
        this.getMenuJson();
    }

    getMenuJson(){
        return this._menuLayoutService.getMenuLayout()
                .then(menu => this.menuJson = menu.json());
    }

}