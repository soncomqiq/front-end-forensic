module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cantons; });

var cantons = [{
  id: 25,
  canton: "Zurich",
  coordinates: [8.6356, 47.3595],
  languages: [{ name: "German", value: 83.1 }, { name: "French", value: 3 }, { name: "Italian", value: 5.9 }, { name: "Romansh", value: 0.4 }]
}, {
  id: 6,
  canton: "Bern",
  coordinates: [7.7081, 46.7989],
  languages: [{ name: "German", value: 84.7 }, { name: "French", value: 10.3 }, { name: "Italian", value: 3.1 }, { name: "Romansh", value: 0.1 }]
}, {
  id: 12,
  canton: "Luzern",
  coordinates: [8.1662, 47.0796],
  languages: [{ name: "German", value: 89.9 }, { name: "French", value: 1.5 }, { name: "Italian", value: 3.2 }, { name: "Romansh", value: 0.2 }]
}, {
  id: 22,
  canton: "Uri",
  coordinates: [8.6025, 46.7739],
  languages: [{ name: "German", value: 93.6 }, { name: "French", value: 1.1 }, { name: "Italian", value: 2.1 }, { name: "Romansh", value: null }]
}, {
  id: 18,
  canton: "Schwyz",
  coordinates: [8.7904, 47.0724],
  languages: [{ name: "German", value: 89.6 }, { name: "French", value: 1.7 }, { name: "Italian", value: 2.8 }, { name: "Romansh", value: 0.5 }]
}, {
  id: 15,
  canton: "Obwalden",
  coordinates: [8.18, 46.8779],
  languages: [{ name: "German", value: 91.8 }, { name: "French", value: 1.3 }, { name: "Italian", value: 1.8 }, { name: "Romansh", value: null }]
}, {
  id: 14,
  canton: "Nidwalden",
  coordinates: [8.3850, 46.95],
  languages: [{ name: "German", value: 92.1 }, { name: "French", value: 2.1 }, { name: "Italian", value: 2.5 }, { name: "Romansh", value: null }]
}, {
  id: 9,
  canton: "Glarus",
  coordinates: [9.0672, 47.0404],
  languages: [{ name: "German", value: 86.8 }, { name: "French", value: 1.5 }, { name: "Italian", value: 5.9 }, { name: "Romansh", value: 0.5 }]
}, {
  id: 26,
  canton: "Zug",
  coordinates: [8.52, 47.18],
  languages: [{ name: "German", value: 82.6 }, { name: "French", value: 3.5 }, { name: "Italian", value: 3.8 }, { name: "Romansh", value: 0.5 }]
}, {
  id: 7,
  canton: "Fribourg",
  coordinates: [7.1173, 46.6817],
  languages: [{ name: "German", value: 27.8 }, { name: "French", value: 68.1 }, { name: "Italian", value: 2.5 }, { name: "Romansh", value: 0.1 }]
}, {
  id: 19,
  canton: "Solothurn",
  coordinates: [7.6388, 47.3321],
  languages: [{ name: "German", value: 89.6 }, { name: "French", value: 3 }, { name: "Italian", value: 4.3 }, { name: "Romansh", value: 0.1 }]
}, {
  id: 5,
  canton: "Basel-Stadt",
  coordinates: [7.5928, 47.5619],
  languages: [{ name: "German", value: 78.6 }, { name: "French", value: 5.2 }, { name: "Italian", value: 6.3 }, { name: "Romansh", value: 0.2 }]
}, {
  id: 4,
  canton: "Basel-Land",
  coordinates: [7.7644, 47.4418],
  languages: [{ name: "German", value: 88 }, { name: "French", value: 3.3 }, { name: "Italian", value: 5.5 }, { name: "Romansh", value: 0.1 }]
}, {
  id: 17,
  canton: "Schaffhausen",
  coordinates: [8.5680, 47.7009],
  languages: [{ name: "German", value: 86.9 }, { name: "French", value: 1.9 }, { name: "Italian", value: 4.3 }, { name: "Romansh", value: 0.3 }]
}, {
  id: 2,
  canton: "Appenzell Ausserrhoden",
  coordinates: [9.3001, 47.3665],
  languages: [{ name: "German", value: 93.8 }, { name: "French", value: 1.1 }, { name: "Italian", value: 2.5 }, { name: "Romansh", value: 0.5 }]
}, {
  id: 3,
  canton: "Appenzell Inherrhoden",
  coordinates: [9.4317, 47.3162],
  languages: [{ name: "German", value: 95 }, { name: "French", value: null }, { name: "Italian", value: 1.4 }, { name: "Romansh", value: null }]
}, {
  id: 16,
  canton: "St. Gallen",
  coordinates: [9.3504, 47.1456],
  languages: [{ name: "German", value: 88.8 }, { name: "French", value: 1.2 }, { name: "Italian", value: 3.5 }, { name: "Romansh", value: 0.3 }]
}, {
  id: 10,
  canton: "Graubunden",
  coordinates: [9.5780, 46.6570],
  languages: [{ name: "German", value: 74.7 }, { name: "French", value: 1.5 }, { name: "Italian", value: 13.3 }, { name: "Romansh", value: 15.9 }]
}, {
  id: 1,
  canton: "Aargau",
  coordinates: [8.2554, 47.3877],
  languages: [{ name: "German", value: 87.8 }, { name: "French", value: 2.1 }, { name: "Italian", value: 4.9 }, { name: "Romansh", value: 0.2 }]
}, {
  id: 20,
  canton: "Thurgau",
  coordinates: [9.0557, 47.6038],
  languages: [{ name: "German", value: 89.5 }, { name: "French", value: 1.3 }, { name: "Italian", value: 4.1 }, { name: "Romansh", value: 0.2 }]
}, {
  id: 21,
  canton: "Ticino",
  coordinates: [8.8005, 46.3317],
  languages: [{ name: "German", value: 10.9 }, { name: "French", value: 4.9 }, { name: "Italian", value: 88.5 }, { name: "Romansh", value: 0.1 }]
}, {
  id: 24,
  canton: "Vaud",
  coordinates: [6.5368, 46.5613],
  languages: [{ name: "German", value: 6.3 }, { name: "French", value: 83.3 }, { name: "Italian", value: 5.3 }, { name: "Romansh", value: 0.1 }]
}, {
  id: 23,
  canton: "Valais",
  coordinates: [7.5449, 46.1905],
  languages: [{ name: "German", value: 25.5 }, { name: "French", value: 67.7 }, { name: "Italian", value: 4.2 }, { name: "Romansh", value: 0.1 }]
}, {
  id: 13,
  canton: "Neuchatel",
  coordinates: [6.7716, 46.9752],
  languages: [{ name: "German", value: 5.2 }, { name: "French", value: 87.8 }, { name: "Italian", value: 5.8 }, { name: "Romansh", value: null }]
}, {
  id: 8,
  canton: "Geneva",
  coordinates: [6.1217, 46.2180],
  languages: [{ name: "German", value: 5.1 }, { name: "French", value: 81 }, { name: "Italian", value: 6.7 }, { name: "Romansh", value: 0 }]
}, {
  id: 11,
  canton: "Jura",
  coordinates: [7.1431, 47.3444],
  languages: [{ name: "German", value: 7.7 }, { name: "French", value: 90.4 }, { name: "Italian", value: 3.1 }, { name: "Romansh", value: null }]
}];

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__ = __webpack_require__("react-simple-maps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_simple_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_simple_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_geo__ = __webpack_require__("d3-geo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_geo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3_geo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_victory__ = __webpack_require__("victory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_victory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_victory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__("./data/index.js");
var _jsxFileName = "D:\\YEAR4TERM2\\Senior Project\\Front-end\\front-end-forensic\\pages\\index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
};

var MapWithVictory = function (_Component) {
  _inherits(MapWithVictory, _Component);

  function MapWithVictory() {
    _classCallCheck(this, MapWithVictory);

    var _this = _possibleConstructorReturn(this, (MapWithVictory.__proto__ || Object.getPrototypeOf(MapWithVictory)).call(this));

    _this.state = {
      cantons: []
    };
    return _this;
  }

  _createClass(MapWithVictory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        cantons: __WEBPACK_IMPORTED_MODULE_4__data__["a" /* cantons */]
      });
    }
  }, {
    key: "projection",
    value: function projection(width, height) {
      return Object(__WEBPACK_IMPORTED_MODULE_2_d3_geo__["geoAlbers"])().rotate([0, 0]).center([8.3, 46.8]).scale(14000).translate([width / 2, height / 2]);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { style: wrapperStyles, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["ComposableMap"],
          {
            projection: this.projection,
            width: 980,
            height: 551,
            style: {
              width: "100%",
              height: "auto"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["ZoomableGroup"],
            { center: [-8.3, -46.8], disablePanning: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["Geographies"],
              { geography: "/static/cantons.json", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              },
              function (geographies, projection) {
                return geographies.map(function (geography, i) {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["Geography"], {
                    key: i,
                    round: true,
                    geography: geography,
                    projection: projection,
                    style: {
                      default: {
                        fill: "#ECEFF1",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none"
                      },
                      hover: {
                        fill: "#607D8B",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none"
                      },
                      pressed: {
                        fill: "#FF5722",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none"
                      }
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57
                    }
                  });
                });
              }
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["Markers"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
                }
              },
              this.state.cantons.map(function (canton, i) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["Marker"],
                  {
                    key: "canton-" + canton.id,
                    marker: canton,
                    style: {
                      default: {
                        outline: "none"
                      },
                      hover: {
                        outline: "none"
                      },
                      pressed: {
                        outline: "none"
                      }
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 87
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "g",
                    { transform: "translate(-15,-15)", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", { cx: 20, cy: 20, r: 21, fill: "transparent", stroke: "#607D8B", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 103
                      }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", { cx: 20, cy: 20, r: 9, fill: "transparent", stroke: "#607D8B", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 104
                      }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_victory__["VictoryPie"], {
                      standalone: false,
                      width: 40,
                      height: 40,
                      padding: 0,
                      innerRadius: 10,
                      style: {
                        labels: { fill: "transparent" },
                        data: { stroke: "#ECEFF1" }
                      },
                      data: [{ x: null, y: canton.languages[0].value, fill: "#FF5722" }, { x: null, y: canton.languages[1].value, fill: "#00BCD4" }, { x: null, y: canton.languages[2].value, fill: "#FFC107" }, { x: null, y: canton.languages[3].value, fill: "#8BC34A" }],
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 105
                      }
                    })
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return MapWithVictory;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MapWithVictory);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "d3-geo":
/***/ (function(module, exports) {

module.exports = require("d3-geo");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-simple-maps":
/***/ (function(module, exports) {

module.exports = require("react-simple-maps");

/***/ }),

/***/ "victory":
/***/ (function(module, exports) {

module.exports = require("victory");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map