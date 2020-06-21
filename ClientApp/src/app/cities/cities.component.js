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
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var CitiesComponent = /** @class */ (function () {
    function CitiesComponent(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.displayedColumns = ['id', 'name', 'lat', 'lon'];
        this.dataSource = new table_1.MatTableDataSource(this.cities);
    }
    CitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.baseUrl + 'api/Cities').subscribe(function (result) {
            _this.cities = result;
            _this.dataSource.data = _this.cities;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return console.error(error); });
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator, { static: true })
    ], CitiesComponent.prototype, "paginator", void 0);
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