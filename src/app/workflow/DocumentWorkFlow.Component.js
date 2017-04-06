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
var router_1 = require('@angular/router');
var animations_1 = require('./animations');
var UploadDocumentComponent = (function () {
    function UploadDocumentComponent(router) {
        this.router = router;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
        this.sending = false;
    }
    UploadDocumentComponent.prototype.send = function () {
        var _this = this;
        this.sending = true;
        this.details = 'Sending Message...';
        setTimeout(function () {
            _this.sending = false;
            _this.closePopup();
        }, 1000);
    };
    UploadDocumentComponent.prototype.cancel = function () {
        this.closePopup();
    };
    UploadDocumentComponent.prototype.closePopup = function () {
        // Providing a `null` value to the named outlet
        // clears the contents of the named outlet
        this.router.navigate([{ outlets: { popup: null } }]);
    };
    __decorate([
        core_1.HostBinding('@routeAnimation'), 
        __metadata('design:type', Object)
    ], UploadDocumentComponent.prototype, "routeAnimation", void 0);
    __decorate([
        core_1.HostBinding('style.display'), 
        __metadata('design:type', Object)
    ], UploadDocumentComponent.prototype, "display", void 0);
    __decorate([
        core_1.HostBinding('style.position'), 
        __metadata('design:type', Object)
    ], UploadDocumentComponent.prototype, "position", void 0);
    UploadDocumentComponent = __decorate([
        core_1.Component({
            templateUrl: './compose-message.component.html',
            styles: [':host { position: relative; bottom: 10%; }'],
            animations: [animations_1.slideInDownAnimation]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], UploadDocumentComponent);
    return UploadDocumentComponent;
}());
exports.UploadDocumentComponent = UploadDocumentComponent;
//# sourceMappingURL=DocumentWorkFlow.Component.js.map