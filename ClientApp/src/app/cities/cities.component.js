"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CitiesComponent = /** @class */ (function () {
    function CitiesComponent(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    CitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.baseUrl + 'api/Cities').subscribe(function (result) {
            _this.cities = result;
        }, function (error) { return console.error(error); });
    };
    CitiesComponent = __decorate([
        core_1.Component({
            selector: 'app-cities',
            templateUrl: './cities.component.html',
            styleUrls: ['./cities.component.css']
        }),
        __param(1, core_1.Inject('BASE_URL'))
    ], CitiesComponent);
    return CitiesComponent;
}());
exports.CitiesComponent = CitiesComponent;
//# sourceMappingURL=cities.component.js.map