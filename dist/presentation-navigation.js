(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("next-core-utilities"), require("presentation-decorator"), require("presentation-dom"), require("presentation-models"));
	else if(typeof define === 'function' && define.amd)
		define("presentation-navigation", ["next-core-utilities", "presentation-decorator", "presentation-dom", "presentation-models"], factory);
	else if(typeof exports === 'object')
		exports["presentation-navigation"] = factory(require("next-core-utilities"), require("presentation-decorator"), require("presentation-dom"), require("presentation-models"));
	else
		root["presentation-navigation"] = factory(root["next-core-utilities"], root["presentation-decorator"], root["presentation-dom"], root["presentation-models"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_next_core_utilities__, __WEBPACK_EXTERNAL_MODULE_presentation_decorator__, __WEBPACK_EXTERNAL_MODULE_presentation_dom__, __WEBPACK_EXTERNAL_MODULE_presentation_models__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/functions/buildIconItems.js":
/*!*****************************************!*\
  !*** ./src/functions/buildIconItems.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const buildIconItems = (name, data, tooltip) => {
  let items = "";

  if (name && data && data.length !== 0) {
    const l = data.length;
    let i = 0;

    for (i = 0; i < l; i++) {
      if (data[i].spacer) {
        items = items + '<div class="spacer"></div>';
      } else {
        items = items + `
          <div id="${data[i].id}" data-${name}="${data[i].id}" data-click="${data[i].click}"${tooltip ? ' title="' + data[i].title + '"' : ''}>
            ${data[i].icon && !data[i].isImageLink ? '<i class="material-icons md-dark">' + data[i].icon + '</i>' : ''}
            ${data[i].icon && data[i].isImageLink ? '<img src="' + data[i].icon + '" alt="' + data[i].title + '" />' : ''}
          </div>
        `;
      }
    }
  }

  return items;
};

exports.default = buildIconItems;

/***/ }),

/***/ "./src/functions/buildMenuItems.js":
/*!*****************************************!*\
  !*** ./src/functions/buildMenuItems.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// data structure = { id: "itemID", "click": "event", "icon": "web", "title": "something", "spacer": false }
const buildMenuItems = (name, data, tooltip) => {
  let items = "";

  if (name && data && data.length !== 0) {
    const l = data.length;
    let i = 0;

    for (i = 0; i < l; i++) {
      if (data[i].spacer) {
        items = items + '<div class="spacer"></div>';
      } else {
        items = items + `<div id="${data[i].id}" data-${name}="${data[i].id}" data-click="${data[i].click}"${tooltip ? ' title="' + data[i].title + '"' : ''}>${data[i].icon ? '<i class="material-icons md-dark">' + data[i].icon + '</i>' : ''}${tooltip ? "" : data[i].title}</div>`;
        /*
        items = items + '<div id="' + data[i].id + '" data-' + name + '="' + data[i].id + '" data-click="' + data[i].click + '">' +
        ( (data[i].icon) ? ('<i class="material-icons md-dark">' + data[i].icon + '</i>') : '' ) + data[i].title + '</div>';
        */
      }
    }
  }

  return items;
};

exports.default = buildMenuItems;

/***/ }),

/***/ "./src/functions/buildNavItems.js":
/*!****************************************!*\
  !*** ./src/functions/buildNavItems.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const buildMenuItems = (name, data) => {
  let items = "";

  if (name && data && data.length !== 0) {
    const l = data.length;
    let i = 0;

    for (i = 0; i < l; i++) {
      if (data[i].spacer) {
        items = items + '<li class="spacer"></li>';
      } else {
        items = items + '<li id="' + data[i].id + '" data-' + name + '="' + data[i].id + '" data-click="' + data[i].click + '">' + (data[i].icon ? '<i class="material-icons md-dark">' + data[i].icon + '</i>' : '') + data[i].title + '</li>';
      }
    }
  }

  return items;
};

exports.default = buildMenuItems;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hamburgerMenu = __webpack_require__(/*! ./menu/hamburgerMenu.js */ "./src/menu/hamburgerMenu.js");

var _hamburgerMenu2 = _interopRequireDefault(_hamburgerMenu);

var _menu = __webpack_require__(/*! ./menu/menu.js */ "./src/menu/menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _navigation = __webpack_require__(/*! ./menu/navigation.js */ "./src/menu/navigation.js");

var _navigation2 = _interopRequireDefault(_navigation);

var _notificationCenter = __webpack_require__(/*! ./notification/notificationCenter.js */ "./src/notification/notificationCenter.js");

var _notificationCenter2 = _interopRequireDefault(_notificationCenter);

var _toolbar = __webpack_require__(/*! ./toolbar/toolbar.js */ "./src/toolbar/toolbar.js");

var _toolbar2 = _interopRequireDefault(_toolbar);

var _iconbar = __webpack_require__(/*! ./toolbar/iconbar.js */ "./src/toolbar/iconbar.js");

var _iconbar2 = _interopRequireDefault(_iconbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.HamburgerMenu = _hamburgerMenu2.default;
module.exports.Menu = _menu2.default;
module.exports.NavigationMenu = _navigation2.default;
module.exports.NotificationCenter = _notificationCenter2.default;
module.exports.Toolbar = _toolbar2.default;
module.exports.Iconbar = _iconbar2.default;

/***/ }),

/***/ "./src/menu/hamburgerMenu.js":
/*!***********************************!*\
  !*** ./src/menu/hamburgerMenu.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _buildMenuItems = __webpack_require__(/*! ../functions/buildMenuItems.js */ "./src/functions/buildMenuItems.js");

var _buildMenuItems2 = _interopRequireDefault(_buildMenuItems);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _abstractToolbar = __webpack_require__(/*! ../toolbar/abstractToolbar.js */ "./src/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buildMenu = (name, title, menuItems) => {
  return `
    <section class="material-design-hamburger" data-${name}="hamburgerClickRegion">
      <div class="material-design-hamburger__icon" data-${name}="hamburgerIcon" data-click="toggle">
        <i class="material-icons md-light">menu</i>
      </div>
    </section>
    <section class="menu menu--off" data-${name}="hamburgerMenu">
      <div>${title}</div>
      ${(0, _buildMenuItems2.default)(name, menuItems)}
    </section>
  `;
};
/**
 * A Hamburger Menu View
 * @memberof Presentation.Component
 * @extends Presentation.AbstractToolbar
 */


class HamburgerMenu extends _abstractToolbar2.default {
  constructor(options) {
    super(options);
  }

  /**
   * Render the Hamburger Menu
   * @method render Renders the Hamburger
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (this.isInitalized) {
      this.template = null; //"notused";

      if (this.el) {
        const e = _presentationDom2.default.selector(this.el);

        if (e) {
          // the menu
          _presentationDom2.default.addClass(e, "wrapper");

          e.setAttribute(`data-${this.name}`, "hamburger");
          e.innerHTML = buildMenu(this.name, this.title, this.menuItems);
        }

        this.delegateEvents();
        this.syncAllBoundElements();
      }
    }

    return this;
  }

  /**
   * Toggle the Hamburger menu view
   * @method toggle
   */
  toggle() {
    if (!this.modal) {
      const menu = this.boundElement("hamburgerMenu");
      const r = this.boundElement("hamburgerClickRegion");
      r.classList.toggle("model");
      menu.classList.toggle("menu--on");
    }
  }

}

;
exports.default = HamburgerMenu;

/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractToolbar = __webpack_require__(/*! ../toolbar/abstractToolbar.js */ "./src/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _buildNavItems = __webpack_require__(/*! ../functions/buildNavItems.js */ "./src/functions/buildNavItems.js");

var _buildNavItems2 = _interopRequireDefault(_buildNavItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buildMenu = (name, menuItems) => {
  return `<i class="material-icons md-dark">more_vert</i><ul>${(0, _buildNavItems2.default)(name, menuItems)}</ul>`;
};
/**
 * A Menu
 * @memberof Presentation.Component
 * @extends Presentation.AbstractToolbar
 */


class Menu extends _abstractToolbar2.default {
  constructor(options) {
    if (!options) {
      options = {};
    }

    if (!options.tagName) {
      options.tagName = "nav";
    }

    super(options);
  }

  /**
   * Renders the Menu
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (!this.isInitalized) {
      return this;
    }

    this.template = null; //"notused";

    if (this.el) {
      const e = _presentationDom2.default.selector(this.el);

      if (e) {
        // the menu
        _presentationDom2.default.addClass(e, "tools");

        e.setAttribute("data-" + this.name, "menu");
        e.innerHTML = buildMenu(this.name, this.menuItems);
      }
    } else {
      //_logger.warn("AUGMENTED: Menu no element anchor, not rendering.");
      return this;
    }

    this.delegateEvents();
    this.syncAllBoundElements();
    return this;
  }

}

;
exports.default = Menu;

/***/ }),

/***/ "./src/menu/navigation.js":
/*!********************************!*\
  !*** ./src/menu/navigation.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractToolbar = __webpack_require__(/*! ../toolbar/abstractToolbar.js */ "./src/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _buildNavItems = __webpack_require__(/*! ../functions/buildNavItems.js */ "./src/functions/buildNavItems.js");

var _buildNavItems2 = _interopRequireDefault(_buildNavItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Navigation Menu
 * @memberof Presentation.Component
 * @extends Presentation.AbstractToolbar
 */
class NavigationMenu extends _abstractToolbar2.default {
  constructor(options) {
    if (!options) {
      options = {};
    }

    if (!options.tagName) {
      options.tagName = "nav";
    }

    if (!options.style) {
      options.style = "navigation";
    } else {
      options.style = `${option.style} navigation`;
    }

    super(options);
  }

  /**
   * Renders the Menu
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (this.isInitalized) {
      this.template = null; //"notused";

      if (this.el) {
        const e = _presentationDom2.default.selector(this.el);

        if (e) {
          // the menu
          _presentationDom2.default.addClass(e, "navigation");

          e.setAttribute("data-" + this.name, "navigation-menu");
          e.innerHTML = (0, _buildNavItems2.default)(this.name, this.menuItems);
        }

        this.delegateEvents();
        this.syncAllBoundElements();
      }
    }

    ;
    return this;
  }

}

;
exports.default = NavigationMenu;

/***/ }),

/***/ "./src/notification/notificationCenter.js":
/*!************************************************!*\
  !*** ./src/notification/notificationCenter.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractToolbar = __webpack_require__(/*! ../toolbar/abstractToolbar.js */ "./src/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _buildMenuItems = __webpack_require__(/*! ../functions/buildMenuItems.js */ "./src/functions/buildMenuItems.js");

var _buildMenuItems2 = _interopRequireDefault(_buildMenuItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Notfication Center Component
 * @memberof Presentation.Component
 * @extends Presentation.Component.AbstractToolbar
 */
class NotificationCenter extends _abstractToolbar2.default {
  constructor(options) {
    super(options);
  }

  /**
   * @property notifications {array} The notifications as notify object array
   */
  get notifications() {
    return this.menuItems;
  }

  set notifications(n) {
    this.menuItems = n;
  }

  /**
   * Show the NotificationCenter
   */
  showNotification() {// show the widget
  }

  /**
   * Hide the NotificationCenter
   */
  hideNotification() {// hide the widget
  }

  /**
   * Clear the NotificationCenter
   */
  clearNotifications() {
    this.clearMenuItems();
  }

  /**
   * Renders the Menu
   * @returns {object} Returns the view context ('this')
   */
  render() {
    this.template = null; //"notused";

    if (this.el) {
      const e = _presentationDom2.default.selector(this.el);

      if (e) {
        // the menu
        _presentationDom2.default.addClass(e, "notify");

        e.setAttribute("data-" + this.name, "notify");
        e.innerHTML = `<ul>${(0, _buildMenuItems2.default)(this.name, this.menuItems)}</ul>`;
      }

      this.delegateEvents();
      this.syncAllBoundElements();
    }

    return this;
  }

}

;
exports.default = NotificationCenter;

/***/ }),

/***/ "./src/toolbar/abstractToolbar.js":
/*!****************************************!*\
  !*** ./src/toolbar/abstractToolbar.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nextCoreUtilities = __webpack_require__(/*! next-core-utilities */ "next-core-utilities");

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _presentationModels = __webpack_require__(/*! presentation-models */ "presentation-models");

var _presentationModels2 = _interopRequireDefault(_presentationModels);

var _presentationDecorator = __webpack_require__(/*! presentation-decorator */ "presentation-decorator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * An abstract tooldbar Component, designed to be extended
  * @memberof Presentation.Component
  * @extends Presentation.DecoratorView
  * @abstract
  */
class AbstractToolbar extends _presentationDecorator.DecoratorView {
  constructor(options) {
    super(options);
    this.isInitalized = false, this._menuItems = [];
    this.title = "";

    if (this.model) {
      this.model.clear();
    } else {
      this.model = new _presentationModels2.default();
    }

    if (options) {
      if (options.data && (0, _nextCoreUtilities.isObject)(options.data)) {
        this.model.set(options.data);
      }

      if (options.title && (0, _nextCoreUtilities.isString)(options.title)) {
        this.title = options.title;
      }

      if (options.menuItems && (0, _nextCoreUtilities.isObject)(options.menuItems)) {
        this._menuItems = options.menuItems;
      }

      if (options.tooltip) {
        this.tooltip = options.tooltip;
      } else {
        this.tooltip = false;
      }
    }

    if (this.el && this.name) {
      this.isInitalized = true;
    }
  }

  /**
    * The model property
    * @property {Model} model The model property
    */

  /**
    * The initialized property
    * @property {boolean} isInitalized The initialized property
    */

  /**
    * The menuItems property
    * @property {array} menuItems The initialized property
    */

  /**
    * The title property
    * @property {string} title The title property
    */

  /**
    * Adds an item to the menu
    * @param id {string} The id of the itemID
    * @param click {string} The bound click method to call
    * @param icon {string} The icon name (webfont)
    * @param title {string} The title of the itemID
    * @param spacer {boolean} Sets a spacer item vs text (not clickable)
    * @example addItem({"itemID", "event", "web", "something", false });
    * @example addItem({"space", null, null, null, true });
    */
  addItem(id, click, icon, title, spacer) {
    if (!spacer) {
      this._menuItems.push({
        "id": id,
        "click": click,
        "icon": icon,
        "title": title,
        "spacer": false
      });
    } else {
      this.addSpacer();
    }
  }

  /**
    * Adds a spacer item to the menu
    * @example addSpacer();
    */
  addSpacer() {
    this._menuItems.push({
      "id": null,
      "click": null,
      "icon": null,
      "title": null,
      "spacer": true
    });
  }

  get menuItems() {
    return this._menuItems;
  }

  set menuItems(items) {
    this._menuItems = items;
  }

  /**
   * Clear all items in the menu
   */
  clearMenuItems() {
    this._menuItems.length = 0;
  }

  /**
   * Select an item in the menu
   * @param {string} id The id
   */
  select(id) {
    return getItem(id);
  }

  /**
   * Get an item in the menu
   * @param {string} id The id
   */
  getItem(id) {
    const l = this._menuItems.length;
    let i = 0;

    for (i = 0; i < l; i++) {
      if (this._menuItems[i].id && this._menuItems[i].id === id) {
        return this._menuItems[i];
      }
    }

    return null;
  }

}

;
exports.default = AbstractToolbar;

/***/ }),

/***/ "./src/toolbar/iconbar.js":
/*!********************************!*\
  !*** ./src/toolbar/iconbar.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractToolbar = __webpack_require__(/*! ./abstractToolbar.js */ "./src/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _buildIconItems = __webpack_require__(/*! ../functions/buildIconItems.js */ "./src/functions/buildIconItems.js");

var _buildIconItems2 = _interopRequireDefault(_buildIconItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An Iconbar View
 * @extends AbstractToolbar
 */
class Iconbar extends _abstractToolbar2.default {
  constructor(options) {
    if (!options) {
      options = {};
    }

    options.tooltip = true;
    super(options);
  }

  /**
   * Adds an item to the menu
   * @param id {string} The id of the itemID
   * @param click {string} The bound click method to call
   * @param icon {string} The icon name (webfont) or image src uri
   * @param toolTip {string} The toolTip of the itemID
   * @param isImageLink {boolean} Sets is icon is an image link vs web font
   * @example addIcon({"itemID", "event", "settings", "something", false });
   * @example addIcon({"itemID", "event", "/images/blah.png", "something", true });
   */
  addIcon(id, click, icon, toolTip, isImageLink) {
    this._menuItems.push({
      "id": id,
      "click": click,
      "icon": icon,
      "title": toolTip,
      "spacer": false,
      "isImageLink": isImageLink
    });
  }

  /**
   * Render the Toolbar
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (!this.isInitalized) {
      //_logger.warn("AUGMENTED: Toolbar Can't render yet, not initialized!");
      return this;
    }

    this.template = null; //"notused";

    if (this.el) {
      const e = _presentationDom2.default.selector(this.el);

      if (e) {
        // the menu
        _presentationDom2.default.addClass(e, "toolbar");

        _presentationDom2.default.addClass(e, "iconbar");

        e.setAttribute("data-" + this.name, "iconbar");
        e.innerHTML = (0, _buildIconItems2.default)(this.name, this.menuItems, this.tooltip);
      }
    } else {
      //_logger.warn("AUGMENTED: Toolbar no element anchor, not rendering.");
      return this;
    }

    this.delegateEvents();
    this.syncAllBoundElements();
    return this;
  }

}

;
exports.default = Iconbar;

/***/ }),

/***/ "./src/toolbar/toolbar.js":
/*!********************************!*\
  !*** ./src/toolbar/toolbar.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractToolbar = __webpack_require__(/*! ./abstractToolbar.js */ "./src/toolbar/abstractToolbar.js");

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _buildMenuItems = __webpack_require__(/*! ../functions/buildMenuItems.js */ "./src/functions/buildMenuItems.js");

var _buildMenuItems2 = _interopRequireDefault(_buildMenuItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Toolbar View
 * @memberof Presentation.Component
 * @extends Presentation.AbstractToolbar
 */
class Toolbar extends _abstractToolbar2.default {
  constructor(options) {
    super(options);
  }

  /**
   * Render the Toolbar
   * @returns {object} Returns the view context ('this')
   */
  render() {
    if (!this.isInitalized) {
      //_logger.warn("AUGMENTED: Toolbar Can't render yet, not initialized!");
      return this;
    }

    this.template = null; //"notused";

    if (this.el) {
      const e = _presentationDom2.default.selector(this.el);

      if (e) {
        // the menu
        _presentationDom2.default.addClass(e, "toolbar");

        e.setAttribute("data-" + this.name, "toolbar");
        e.innerHTML = (0, _buildMenuItems2.default)(this.name, this.menuItems, this.tooltip);
      }
    } else {
      //_logger.warn("AUGMENTED: Toolbar no element anchor, not rendering.");
      return this;
    }

    this.delegateEvents();
    this.syncAllBoundElements();
    return this;
  }

}

;
exports.default = Toolbar;

/***/ }),

/***/ "next-core-utilities":
/*!**********************************************************************************************************************************************!*\
  !*** external {"commonjs":"next-core-utilities","commonjs2":"next-core-utilities","amd":"next-core-utilities","root":"next-core-utilities"} ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_next_core_utilities__;

/***/ }),

/***/ "presentation-decorator":
/*!**********************************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-decorator","commonjs2":"presentation-decorator","amd":"presentation-decorator","root":"presentation-decorator"} ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_decorator__;

/***/ }),

/***/ "presentation-dom":
/*!**********************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-dom","commonjs2":"presentation-dom","amd":"presentation-dom","root":"presentation-dom"} ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_dom__;

/***/ }),

/***/ "presentation-models":
/*!**********************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-models","commonjs2":"presentation-models","amd":"presentation-models","root":"presentation-models"} ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_models__;

/***/ })

/******/ });
});
//# sourceMappingURL=presentation-navigation.js.map