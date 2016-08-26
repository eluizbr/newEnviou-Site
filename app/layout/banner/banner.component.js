"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('jquery.themepunch.tools');
require('jquery.themepunch.revolution');
var banner_service_1 = require('./banner.service');
var BannerComponent = (function () {
    function BannerComponent(_bannerLayoutService) {
        this._bannerLayoutService = _bannerLayoutService;
        this.menuJson = {};
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.getMenuJson();
    };
    BannerComponent.prototype.getMenuJson = function () {
        var _this = this;
        return this._bannerLayoutService.getMenuLayout()
            .then(function (menu) { _this.menuJson = menu.json(); })
            .catch(function (err) { return console.log(err); });
    };
    BannerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'enviou-banner',
            templateUrl: 'banner.component.html',
            providers: [banner_service_1.BannerLayoutService]
        }), 
        __metadata('design:paramtypes', [banner_service_1.BannerLayoutService])
    ], BannerComponent);
    return BannerComponent;
}());
exports.BannerComponent = BannerComponent;
//# sourceMappingURL=banner.component.js.map