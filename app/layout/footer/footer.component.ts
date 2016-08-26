import { Component, OnInit } from '@angular/core';

import { FooterService } from './footer.service';

@Component({
    moduleId: module.id,
    selector: 'footer-app',
    templateUrl: 'footer.component.html',
    providers: [FooterService]
})
export class FooterComponent implements OnInit {

    public footerMenu = {};

    constructor(private _footerService:FooterService ) { }

    ngOnInit() { 
        this.getFooter();
    }

    getFooter() {
        return this._footerService.getFooter()
                    .then(footer => this.footerMenu = footer.json());
    }
}