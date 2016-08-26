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
var footer_service_1 = require('./footer.service');
var FooterComponent = (function () {
    function FooterComponent(_footerService) {
        this._footerService = _footerService;
        this.footerMenu = {};
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.getFooter();
    };
    FooterComponent.prototype.getFooter = function () {
        var _this = this;
        return this._footerService.getFooter()
            .then(function (footer) { return _this.footerMenu = footer.json(); });
    };
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'footer-app',
            templateUrl: 'footer.component.html',
            providers: [footer_service_1.FooterService]
        }), 
        __metadata('design:paramtypes', [footer_service_1.FooterService])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map