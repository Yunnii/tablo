/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	var PromoPage = __webpack_require__(2);
	var flights = __webpack_require__(16);

	React.render(React.createElement(PromoPage, { flights: flights }), document.getElementById('content'));

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "main.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {


	/* injects from baggage-loader */

	'use strict';

	var b = __webpack_require__(3)['with']('promo-page');
	var Grid = __webpack_require__(4);

	var PromoPage = React.createClass({
	    displayName: 'PromoPage',

	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: b() },
	            React.createElement(Grid, { data: this.props.flights.flights,
	                order: this.props.flights.order,
	                propertyNames: this.props.flights.propertyNames
	            })
	        );
	    }
	});

	module.exports = PromoPage;

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "promo-page.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* global define: true */
	(/* istanbul ignore next */
	function (root, factory) {
	    'use strict';
	    if (true) {
	        // CommonJS
	        module.exports = factory();
	    } else if (typeof define === 'function' && define.amd) {
	        // AMD. Register as an anonymous module.
	        define([], factory);
	    } else {
	        // Browser globals
	        root.b_ = factory();
	    }
	})
	(this, function () {
	    /**
	     *
	     * @param {object} [options]
	     * @param {string} [options.tailSpace='']
	     * @param {string} [options.elementSeparator='__']
	     * @param {string} [options.modSeparator='_']
	     * @param {string} [options.modValueSeparator='_']
	     * @param {string} [options.classSeparator=' ']
	     * @param {string} [options.isFullModifier=true]
	     *
	     * @constructor
	     */
	    function BemFormatter(options) {
	        // Case call BemFormatter() without new
	        if (!(this instanceof  BemFormatter)) {
	            return createBemFormatter(options);
	        }

	        options = options || {};
	        this.tailSpace = options.tailSpace || '';
	        this.elementSeparator = options.elementSeparator || '__';
	        this.modSeparator = options.modSeparator || '_';
	        this.modValueSeparator = options.modValueSeparator || '_';
	        this.classSeparator = options.classSeparator || ' ';
	        this.isFullModifier = typeof options.isFullModifier === 'undefined' ? true : options.isFullModifier;
	    }

	    BemFormatter.prototype = {
	        /**
	         *
	         * @param {string} base
	         * @param {string} modifierKey
	         * @param {*} modifierValue
	         * @returns {string}
	         * @private
	         */
	        _stringifyModifier: function (base, modifierKey, modifierValue) {
	            var result = '';

	            // Ignore false or undefined values
	            if (modifierValue === false || typeof modifierValue === 'undefined') {
	                return result;
	            }

	            // Makes block__elem_{modifierKey}
	            result += this.classSeparator + base + this.modSeparator + modifierKey;

	            // If modifier value is just true skip `modifierValue`
	            if (modifierValue !== true) {
	                // Makes block__elem_{modifierKey}_{modifierValue}
	                result += this.modValueSeparator + String(modifierValue);
	            }

	            return result;
	        },

	        /**
	         *
	         * @param {string} base
	         * @param {object} modifiers
	         * @returns {string}
	         * @private
	         */
	        _stringifyModifiers: function (base, modifiers) {
	            var result = '';

	            if (!this.isFullModifier) {
	                base = '';
	            }

	            for (var modifierKey in modifiers) {
	                if (!modifiers.hasOwnProperty(modifierKey)) {
	                    continue;
	                }

	                result += this._stringifyModifier(base, modifierKey, modifiers[modifierKey]);
	            }

	            return result;
	        },

	        /**
	         *
	         * @param {string} block
	         * @param {string} [element]
	         * @param {object} [modifiers]
	         */
	        stringify: function (block, element, modifiers) {
	            var className = String(block);

	            // case b_(block, modifiers)
	            if (element && typeof element === 'object' && typeof modifiers === 'undefined') {
	                modifiers = element;
	                element = null;
	            }

	            if (element) {
	                className += this.elementSeparator + String(element);
	            }

	            if (modifiers) {
	                className += this._stringifyModifiers(className, modifiers);
	            }

	            return className + this.tailSpace;
	        }
	    };

	    /**
	     * Return partially applied b_
	     *
	     * @param {string} block
	     * @param {string} [element]
	     * @param {object} [modifiers]
	     * @returns {Function} partially applied b_
	     *
	     * @example
	     *
	     * ```jsx
	     * var B = require('b_');
	     * var b = B.with('b-button');
	     * var e = B.with('b-button', 'elem');
	     *
	     * function render() {
	         *   return (
	         *     <div className={b()}>
	         *       <span className={b('icon', {type: 'add'})}></span>
	         *       <span className={b('text')}></span>
	         *     </div>
	         *     <div className={b({size: 'small'})}>
	         *       <span className={b('icon', {type: 'add'})}></span>
	         *       <span className={b('text')}></span>
	         *     </div>
	         *   );
	         * }
	     * ```
	     */
	    function withMixin(block, element, modifiers) {
	        return this.bind.apply(this, [null].concat(Array.prototype.slice.call(arguments)));
	    }

	    /**
	     * @param {object} [options]
	     * @returns {function}
	     *
	     * @private
	     */
	    function createBemFormatter(options) {
	        var bemFormatter = new BemFormatter(options);

	        var b = bemFormatter.stringify.bind(bemFormatter);
	        b['with'] = b.lock = withMixin;

	        return b;
	    }

	    /**
	     *
	     * @type {function(this:BemFormatter)}
	     *
	     * @example
	     *
	     * var v = require('b_');
	     *
	     * b('block'); // 'block'
	     * b('block', {mod1: true, mod2: false, mod3: 'mod3'}); // 'block block_mod1 block_mod3_mod3'
	     * b('block', 'elem'); // 'block__elem'
	     * b('block', 'elem', {mod1: true, mod2: false, mod3: 'mod3'}); // 'block__elem block__elem_mod1 block__elem_mod3_mod3'
	     */
	    var b = createBemFormatter();

	    /**
	     *
	     * @type {BemFormatter}
	     *
	     * @example
	     *
	     * var b = new (require('b_').B)({
	     *   tailSpace: ' ',
	     *   elementSeparator: '-',
	     *   modSeparator: '--',
	     *   modValueSeparator: '-',
	     *   classSeparator: ' '
	     * });
	     *
	     * b.stringify('block'); // 'block '
	     * b.stringify('block', {mod1: true, mod2: false, mod3: 'mod3'}); // 'block block--mod1 block--mod3-mod3 '
	     * b.stringify('block', 'elem'); // 'block-elem '
	     * b.stringify('block', 'elem', {mod1: true, mod2: false, mod3: 'mod3'}); // 'block-elem block-elem--mod1 block-elem--mod3-mod3'
	     */
	    b.B = BemFormatter;

	    return b;
	});


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {


	/* injects from baggage-loader */
	'use strict';

	__webpack_require__(9);

	var b = __webpack_require__(3)['with']('grid');
	__webpack_require__(6);
	__webpack_require__(5);
	__webpack_require__(10);

	var GridHead = __webpack_require__(14);

	var Grid = React.createClass({
	    displayName: 'Grid',

	    render: function render() {
	        var flights = this.props.data.map((function (flight) {
	            var fields = this.props.order.map(function (field, i) {
	                return React.createElement(
	                    'div',
	                    { className: b('cell', { name: field }) },
	                    React.createElement(
	                        'div',
	                        { className: b('cell-inner') },
	                        flight[field],
	                        ' '
	                    )
	                );
	            });

	            return React.createElement(
	                'div',
	                { className: b('row') },
	                fields
	            );
	        }).bind(this));

	        var header = this.props.order.map((function (field, i) {
	            return React.createElement(
	                'div',
	                { className: b('cell', { name: field }) },
	                React.createElement(
	                    'div',
	                    { className: b('cell-inner') },
	                    this.props.propertyNames[field]
	                )
	            );
	        }).bind(this));

	        return React.createElement(
	            'div',
	            { className: b() },
	            React.createElement(GridHead, { order: this.props.order, propertyNames: this.props.propertyNames }),
	            React.createElement(
	                'div',
	                { className: b('body') },
	                flights
	            )
	        );
	    }
	});

	module.exports = Grid;

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "grid.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {


	/* injects from baggage-loader */

	'use strict';

	__webpack_require__(7);
	__webpack_require__(8);

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "grid__row.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {


	/* injects from baggage-loader */

	'use strict';

	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "grid__cell.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {


	/* injects from baggage-loader */

	'use strict';

	var b = __webpack_require__(3)['with']('grid');
	__webpack_require__(15);

	var GridHead = React.createClass({
	    displayName: 'GridHead',

	    render: function render() {
	        var header = this.props.order.map((function (field) {
	            return React.createElement(
	                'div',
	                { className: b('cell', { name: field }) },
	                React.createElement(
	                    'div',
	                    { className: b('cell-inner') },
	                    this.props.propertyNames[field]
	                )
	            );
	        }).bind(this));

	        return React.createElement(
	            'div',
	            { className: b('head') },
	            header
	        );
	    }
	});

	module.exports = GridHead;

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/yunnii/www/tablo/static/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "grid__head.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
		"order": [
			"type",
			"flightNumber",
			"aircompany",
			"airLogo",
			"arrive",
			"arriveTime",
			"departureTime",
			"status",
			"note"
		],
		"propertyNames": {
			"type": "Тип рейса",
			"flightNumber": "Номер рейса",
			"aircompany": "Авиакомпания",
			"airLogo": "Логотип",
			"arrive": "Пункт назначения",
			"departureTime": "Прибытие",
			"arriveTime": "Отправление",
			"status": "Статус",
			"note": "Примечание"
		},
		"flights": [
			{
				"type": "departure",
				"flightNumber": "AY005",
				"aircompany": "Finnair",
				"airLogo": "",
				"arrive": "New York J F Kennedy Internati",
				"departureTime": "15:46",
				"arriveTime": "14:23",
				"status": "Вылетел",
				"note": ""
			},
			{
				"type": "depature",
				"flightNumber": "AY081",
				"aircompany": "",
				"airLogo": "",
				"arrive": "Duesseldorf International AIRP",
				"departureTime": "18:50",
				"arriveTime": "22:10",
				"status": "",
				"note": ""
			},
			{
				"type": "depature",
				"flightNumber": "AY3272",
				"aircompany": "AirBaltic",
				"airLogo": "",
				"arrive": "Frankfur International APT",
				"departureTime": "19:10",
				"arriveTime": "22:00",
				"status": "Ожидание",
				"note": ""
			},
			{
				"type": "depature",
				"flightNumber": "AY918",
				"aircompany": "British Airways",
				"airLogo": "",
				"arrive": "Geneva",
				"departureTime": "20:40",
				"arriveTime": "",
				"status": "Отменен",
				"note": ""
			},
			{
				"type": "arrive",
				"flightNumber": "AY814",
				"aircompany": "Japan Airlines",
				"airLogo": "",
				"arrive": "Helsinki-Vantaa",
				"departureTime": "16:55",
				"arriveTime": "19:22",
				"status": "Вылетел",
				"note": ""
			},
			{
				"type": "arrive",
				"flightNumber": "AY818",
				"aircompany": "Air France",
				"airLogo": "",
				"arrive": "Oslo Gardemoen Airport",
				"departureTime": "18:05",
				"arriveTime": "20:23",
				"status": "Вылетел",
				"note": ""
			},
			{
				"type": "arrive",
				"flightNumber": "AY942",
				"aircompany": "Japan Airlains",
				"airLogo": "",
				"arrive": "Pisa",
				"departureTime": "20:20",
				"arriveTime": "22:50",
				"status": "Задерживается",
				"note": ""
			},
			{
				"type": "arrive",
				"flightNumber": "AY670",
				"aircompany": "Air France",
				"airLogo": "",
				"arrive": "Zurich Airport",
				"departureTime": "19:30",
				"arriveTime": "",
				"status": "Отменен",
				"note": ""
			},
			{
				"type": "arrive",
				"flightNumber": "AY668",
				"aircompany": "EasyJet",
				"airLogo": "",
				"arrive": "Dubrovnik",
				"departureTime": "18:45",
				"arriveTime": "22:00",
				"status": "Приземлился",
				"note": ""
			},
			{
				"type": "departure",
				"flightNumber": "AY180",
				"aircompany": "EasyJet",
				"airLogo": "",
				"arrive": "London Heartrow APT",
				"departureTime": "19:30",
				"arriveTime": "22:50",
				"status": "Посадка закончена",
				"note": ""
			}
		]
	}

/***/ }
/******/ ]);