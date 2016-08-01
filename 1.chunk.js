webpackJsonpac__name_([1],{

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(806));
	

/***/ },

/***/ 806:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(127);
	/*
	 * We're loading this component asynchronously
	 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
	 * see https://github.com/gdi2290/es6-promise-loader for more info
	 */
	console.log('`Contact` component loaded asynchronously');
	var Contact = (function () {
	    function Contact(route) {
	        this.route = route;
	    }
	    Contact.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route
	            .data
	            .subscribe(function (data) {
	            // your resolved data from route
	            _this.localState = data.yourData;
	        });
	        console.log('hello `About` component');
	        // static data that is bundled
	        // var mockData = require('assets/mock-data/mock-data.json');
	        // console.log('mockData', mockData);
	        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
	        // this.asyncDataWithWebpack();
	    };
	    Contact.prototype.asyncDataWithWebpack = function () {
	        // you can also async load mock data with 'es6-promise-loader'
	        // you would do this if you don't want the mock-data bundled
	        // remember that 'es6-promise-loader' is a promise
	        // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
	        // setTimeout(() => {
	        //
	        //   let asyncDataPromise = asyncMockDataPromiseFactory();
	        //   asyncDataPromise.then(json => {
	        //     console.log('async mockData', json);
	        //   });
	        //
	        // });
	    };
	    Contact = __decorate([
	        core_1.Component({
	            selector: 'contact',
	            styles: ["\n    md-card{\n      margin: 25px;\n    }\n  "],
	            template: "\n  <md-card>\n    For hot module reloading run\n    <pre>npm run start:hmr</pre>\n  </md-card>\n  <md-card>\n    <h3>\n      patrick@AngularClass.com\n    </h3>\n  </md-card>\n  <md-card>\n    <pre>this.localState = {{ localState | json }}</pre>\n  </md-card>\n  "
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
	    ], Contact);
	    return Contact;
	    var _a;
	}());
	exports.Contact = Contact;
	

/***/ }

});
//# sourceMappingURL=1.map