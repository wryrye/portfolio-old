webpackJsonpac__name_([0],{

/***/ 768:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var platform_browser_1 = __webpack_require__(64);
var router_1 = __webpack_require__(115);
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(229);
var detail_component_1 = __webpack_require__(770);
console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
exports.routes = [
    { path: '', component: detail_component_1.Detail, pathMatch: 'full' }
];
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule.routes = exports.routes;
    AboutModule = __decorate([
        core_1.NgModule({
            declarations: [
                // Components / Directives/ Pipes
                detail_component_1.Detail
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AboutModule;


/***/ },

/***/ 770:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var Detail = (function () {
    function Detail() {
    }
    Detail.prototype.ngOnInit = function () {
        console.log('hello `Detail` component');
    };
    Detail = __decorate([
        core_1.Component({
            selector: 'detail',
            template: "\n    <h1>Hello from Detail</h1>\n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Detail);
    return Detail;
}());
exports.Detail = Detail;


/***/ }

});
//# sourceMappingURL=0.map