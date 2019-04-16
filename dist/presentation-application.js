(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("presentation-application", [], factory);
	else if(typeof exports === 'object')
		exports["presentation-application"] = factory();
	else
		root["presentation-application"] = factory();
})(this, function() {
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

/***/ "./node_modules/presentation-dom/dist/presentation-dom.js":
/*!****************************************************************!*\
  !*** ./node_modules/presentation-dom/dist/presentation-dom.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/dist/", n(n.s = 0);
  }([function (e, t, n) {
    "use strict";

    var r = function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }(n(1));

    const o = r.default.query;
    e.exports = r.default, e.exports.$ = o;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    const r = e => "string" == typeof e || !!e && "object" == typeof e && "[object String]" === Object.prototype.toString.call(e);

    class o {
      constructor() {}

      static getViewportHeight() {
        return window.innerHeight;
      }

      static getViewportWidth() {
        return window.innerWidth;
      }

      static setValue(e, t, n) {
        if (e) {
          t = t || "";
          const r = this.selector(e);
          return (!r || 1 !== r.nodeType || "select" !== r.nodeName && "SELECT" !== r.nodeName) && (!r || 1 !== r.nodeType || "input" !== r.nodeName && "INPUT" !== r.nodeName && "textarea" !== r.nodeName && "TEXTAREA" !== r.nodeName ? r && 1 === r.nodeType && (n ? r.innerText = t : r.innerHTML = t) : r.value = t), r;
        }

        return null;
      }

      static getValue(e) {
        if (e) {
          const t = this.selector(e);
          if (t && 1 === t.nodeType && ("input" === t.nodeName || "INPUT" === t.nodeName || "textarea" === t.nodeName || "TEXTAREA" === t.nodeName || "select" === t.nodeName || "SELECT" === t.nodeName)) return t.value;
          if (t && 1 === t.nodeType) return t.innerHTML;
        }

        return null;
      }

      static selector(e) {
        return e ? r(e) ? document.querySelector(e) : e : null;
      }

      static selectors(e) {
        return e ? r(e) ? document.querySelectorAll(e) : e : null;
      }

      static query(e, t) {
        if (e) {
          let n = document;
          t && (n = o.selector(t));
          const s = r(e) ? n.querySelectorAll(e) : e;
          return 1 === s.length ? s[0] : s;
        }

        return null;
      }

      static hide(e) {
        const t = this.selector(e);
        return t && (t.style.display = "none", t.style.visibility = "hidden"), t;
      }

      static show(e, t) {
        const n = this.selector(e);
        return n && (n.style.display = t || "block", n.style.visibility = "visible"), n;
      }

      static setClass(e, t) {
        const n = this.selector(e);
        return n && n.setAttribute("class", t), n;
      }

      static addClass(e, t) {
        const n = this.selector(e);
        return n && n.classList.add(t), n;
      }

      static removeClass(e, t) {
        const n = this.selector(e);
        return n && n.classList.remove(t), n;
      }

      static replaceClass(e, t, n) {
        const r = this.selector(e);
        return r && r.classList.replace(t, n), r;
      }

      static containsClass(e, t) {
        const n = this.selector(e);
        return !(!n || !n.classList) && n.classList.contains(t);
      }

      static toggleClass(e, t) {
        const n = this.selector(e);
        return n && n.classList.toggle(t), n;
      }

      static empty(e) {
        return this.setValue(e, "", !1), e;
      }

      static injectTemplate(e, t) {
        const n = this.selector(e),
              r = this.selector(t);

        if (n && r) {
          const e = document.importNode(n.content, !0);
          r.appendChild(e);
        }

        return r;
      }

    }

    t.default = o;
  }]);
});

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
}); // data structure = { id: "itemID", "click": "event", "icon": "web", "title": "something", "spacer": false }

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

var _toolbar = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './toolbar/toolbar.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _toolbar2 = _interopRequireDefault(_toolbar);

var _iconbar = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './toolbar/iconbar.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _iconbar2 = _interopRequireDefault(_iconbar);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

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

var _presentationDom = __webpack_require__(/*! presentation-dom */ "./node_modules/presentation-dom/dist/presentation-dom.js");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _abstractToolbar = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../toolbar/abstractToolbar.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

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

var _abstractToolbar = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../toolbar/abstractToolbar.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "./node_modules/presentation-dom/dist/presentation-dom.js");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _buildNavItems = __webpack_require__(/*! ../functions/buildNavItems.js */ "./src/functions/buildNavItems.js");

var _buildNavItems2 = _interopRequireDefault(_buildNavItems);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

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

var _abstractToolbar = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../toolbar/abstractToolbar.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "./node_modules/presentation-dom/dist/presentation-dom.js");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _buildNavItems = __webpack_require__(/*! ../functions/buildNavItems.js */ "./src/functions/buildNavItems.js");

var _buildNavItems2 = _interopRequireDefault(_buildNavItems);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
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

var _abstractToolbar = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../toolbar/abstractToolbar.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _abstractToolbar2 = _interopRequireDefault(_abstractToolbar);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "./node_modules/presentation-dom/dist/presentation-dom.js");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _buildMenuItems = __webpack_require__(/*! ../functions/buildMenuItems.js */ "./src/functions/buildMenuItems.js");

var _buildMenuItems2 = _interopRequireDefault(_buildMenuItems);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
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


  showNotification() {} // show the widget

  /**
   * Hide the NotificationCenter
   */


  hideNotification() {} // hide the widget

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

/***/ })

/******/ });
});
//# sourceMappingURL=presentation-application.js.map