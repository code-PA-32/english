/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mouse */ \"./src/modules/mouse.js\");\n/* harmony import */ var _modules_burger_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger-mobile */ \"./src/modules/burger-mobile.js\");\n/* harmony import */ var _modules_tablet_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tablet-burger */ \"./src/modules/tablet-burger.js\");\n\n\n\n\n\n\n    (0,_modules_tablet_burger__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,_modules_burger_mobile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n(0,_modules_mouse__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/burger-mobile.js":
/*!**************************************!*\
  !*** ./src/modules/burger-mobile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst burgerMobile = () => {\n  const wrapper = document.querySelector(\".burger-wrapper\");\n  const linkMenu = document.querySelector(\".burger-menu\");\n  const burgerList = document.querySelector(\".burger-touch\");\n\n  burgerList.addEventListener(\"touchend\", () => {\n    burgerList.classList.toggle(\"rotate\");\n    wrapper.classList.toggle(\"burger-wrapper-active\");\n    linkMenu.classList.toggle(\"burger-menu-active\");\n    if (wrapper.classList.contains(\"burger-wrapper-active\")) {\n      document.body.style.overflow = \"hidden\";\n    } else {\n      document.body.style.overflow = \"\";\n    }\n  });\n  wrapper.addEventListener(\"touchend\", () => {\n    burgerList.classList.remove(\"rotate\");\n    wrapper.classList.remove(\"burger-wrapper-active\");\n    linkMenu.classList.remove(\"burger-menu-active\");\n    if (wrapper.classList.contains(\"burger-wrapper-active\")) {\n      document.body.style.overflow = \"hidden\";\n    } else {\n      document.body.style.overflow = \"\";\n    }\n  });\n\n  wrapper.style.width = window.visualViewport.width + \"px\";\n  linkMenu.style.height = wrapper.style.height =\n    window.visualViewport.height + \"px\";\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMobile);\n\n\n//# sourceURL=webpack:///./src/modules/burger-mobile.js?");

/***/ }),

/***/ "./src/modules/mouse.js":
/*!******************************!*\
  !*** ./src/modules/mouse.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mouse = () => {\n  const cursor = document.querySelector(\".cursor\");\n  const innerCursor = document.querySelector(\".item\");\n  const links = document.querySelectorAll('a');\n  const buttons = document.querySelectorAll('button');\n  const inputs = document.querySelectorAll('input');\n\n\n  document.addEventListener(\"mousemove\", (e) => {\n    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;\n  });\n  document.addEventListener(\"mousemove\", (e) => {\n    innerCursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;\n  });\n\n  const mouseOver = () => {\n    const arr = [...links, ...buttons, ...inputs];\n    arr.forEach(i => {\n      i.addEventListener('mouseover', () => {\n        cursor.classList.add('white');\n        innerCursor.classList.add('inner-white', 'pulse-white');\n      });\n    });\n\n    arr.forEach(i => {\n      i.addEventListener('mouseleave', () => {\n        cursor.classList.remove('white');\n        innerCursor.classList.remove('inner-white', 'pulse-white')\n      })\n    })\n  }\nmouseOver();\n  const toggleClass = (outerItem, innerItem) => {\n    outerItem.classList.toggle(\"invis\");\n    innerItem.classList.toggle(\"pulse\");\n  };\n\n  document.addEventListener(\"mousedown\", () => {\n    toggleClass(cursor, innerCursor);\n  });\n  document.addEventListener(\"click\", () => {\n    toggleClass(cursor, innerCursor);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mouse);\n\n\n//# sourceURL=webpack:///./src/modules/mouse.js?");

/***/ }),

/***/ "./src/modules/tablet-burger.js":
/*!**************************************!*\
  !*** ./src/modules/tablet-burger.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabletBurger = () => {\n    const linkMenu = document.querySelector('.table-burger');\n    const tabletWrapper = document.querySelector('.burger-tablet-wrapper');\n    const burgerActivation = document.querySelector('.tablet-burger')\n\n    burgerActivation.addEventListener('touchend', () => {\n        burgerActivation.classList.toggle('tablet-burger-rotate');\n        linkMenu.classList.toggle('table-burger-active');\n        tabletWrapper.classList.toggle('burger-tablet-wrapper-active')\n        if (tabletWrapper.classList.contains(\"burger-tablet-wrapper-active\")) {\n            document.body.style.overflow = \"hidden\";\n          } else {\n            document.body.style.overflow = \"\";\n          }\n    })\n    tabletWrapper.addEventListener('touchend', () => {\n        burgerActivation.classList.toggle('tablet-burger-rotate');\n        linkMenu.classList.toggle('table-burger-active');\n        tabletWrapper.classList.toggle('burger-tablet-wrapper-active')\n        if (tabletWrapper.classList.contains(\"burger-tablet-wrapper-active\")) {\n            document.body.style.overflow = \"hidden\";\n          } else {\n            document.body.style.overflow = \"\";\n          }\n    })\n\n    tabletWrapper.style.height = window.visualViewport.height + 'px';\n    tabletWrapper.style.width = window.visualViewport.width + 'px';\n    linkMenu.style.height = window.visualViewport.height + 'px'; \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabletBurger);\n\n//# sourceURL=webpack:///./src/modules/tablet-burger.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;