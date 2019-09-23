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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/autocomplete.tsx":
/*!******************************!*\
  !*** ./src/autocomplete.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nclass Autocomplete extends react_1.default.Component {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.state = {\r\n            options: this.props.options,\r\n            filteredOptions: this.props.options,\r\n            currentOption: ''\r\n        };\r\n        this.filter = (event) => {\r\n            let { value } = event.target;\r\n            this.setState({\r\n                currentOption: value,\r\n                filteredOptions: (this.state.options.filter(option => (value === option.name.substr(0, value.length))))\r\n            });\r\n        };\r\n        this.addOption = () => {\r\n            let { currentOption } = this.state;\r\n            axios_1.default.post(this.props.url, { name: currentOption })\r\n                .then(response => response.data)\r\n                .then(body => {\r\n                if (!body) {\r\n                    return console.error('Failed to save');\r\n                }\r\n                this.setState({\r\n                    options: [body].concat(this.state.options)\r\n                }, () => {\r\n                    this.filter({\r\n                        target: { value: currentOption }\r\n                    });\r\n                });\r\n            })\r\n                .catch(console.error);\r\n        };\r\n        this.handleKeyUp = (event) => {\r\n            if (event.keyCode === 13) {\r\n                this.addOption();\r\n            }\r\n        };\r\n    }\r\n    componentDidMount() {\r\n        if (this.props.url === 'test')\r\n            return true;\r\n        axios_1.default.get(this.props.url)\r\n            .then(response => response.data)\r\n            .then(body => {\r\n            if (!body) {\r\n                return console.error('Failed to load');\r\n            }\r\n            this.setState({\r\n                options: body\r\n            });\r\n        })\r\n            .catch(console.error);\r\n    }\r\n    render() {\r\n        return (react_1.default.createElement(\"div\", { className: \"form-group\" },\r\n            react_1.default.createElement(\"input\", { type: \"text\", value: this.state.currentOption, className: \"form-control option-name\", placeholder: \"React.js\", onChange: this.filter, onKeyUp: this.handleKeyUp }),\r\n            this.state.filteredOptions.map(option => (react_1.default.createElement(\"div\", { key: option._id },\r\n                react_1.default.createElement(\"a\", { href: '/#/' + option.name, className: \"btn btn-default option-list-item\", target: \"_blank\" }, '#' + option.name)))),\r\n            (() => {\r\n                if (this.state.filteredOptions.length === 0\r\n                    && this.state.currentOption !== '') {\r\n                    return react_1.default.createElement(\"a\", { onClick: this.addOption, className: \"btn btn-info option-add\" }, 'Add #' + this.state.currentOption);\r\n                }\r\n            })()));\r\n    }\r\n}\r\nexports.default = Autocomplete;\r\n\n\n//# sourceURL=webpack:///./src/autocomplete.tsx?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst mongodb_1 = __webpack_require__(/*! mongodb */ \"mongodb\");\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nconst server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\r\nconst body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\r\nconst compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\nconst errorhandler_1 = __importDefault(__webpack_require__(/*! errorhandler */ \"errorhandler\"));\r\nconst morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\r\nconst express_validator_1 = __webpack_require__(/*! express-validator */ \"express-validator\");\r\nconst autocomplete_1 = __importDefault(__webpack_require__(/*! ./autocomplete */ \"./src/autocomplete.tsx\"));\r\nconst PORT = 3000;\r\nconst URL = 'mongodb://192.168.99.100:27017/autocomplete';\r\nconst app = express_1.default();\r\nmongodb_1.MongoClient.connect(URL, {\r\n    useNewUrlParser: true,\r\n    useUnifiedTopology: true\r\n}, (err, client) => {\r\n    if (err) {\r\n        console.error('Unable to connect to DB server', err);\r\n        process.exit(1);\r\n    }\r\n    const db = client.db('autocomplete');\r\n    app.set('view engine', 'hbs');\r\n    app.use(compression_1.default());\r\n    app.use(morgan_1.default('dev'));\r\n    app.use(errorhandler_1.default());\r\n    app.use(body_parser_1.default.urlencoded({ extended: true }));\r\n    app.use(body_parser_1.default.json());\r\n    app.use(express_1.default.static('public'));\r\n    app.use((req, _, next) => {\r\n        req.rooms = db.collection('rooms');\r\n        next();\r\n    });\r\n    const getRooms = (req, res, next) => {\r\n        req.rooms\r\n            .find({}, { sort: { _id: -1 } })\r\n            .toArray((err, docs) => {\r\n            if (err)\r\n                return next(err);\r\n            else\r\n                return res.json(docs);\r\n        });\r\n    };\r\n    const postRooms = (req, res, next) => {\r\n        let errors = express_validator_1.validationResult(req);\r\n        if (!errors.isEmpty()) {\r\n            return next(errors);\r\n        }\r\n        req.rooms.insertOne(req.body, (err, result) => {\r\n            if (err)\r\n                return next(err);\r\n            else\r\n                return res.json(result.ops[0]);\r\n        });\r\n    };\r\n    app.route('/rooms')\r\n        .get(getRooms)\r\n        .post(express_validator_1.body('name', 'Invalid name in body').not().isEmpty())\r\n        .post(postRooms);\r\n    app.get('/', (req, res, next) => {\r\n        let url = `http://localhost:${PORT}/rooms`;\r\n        req.rooms\r\n            .find({}, { sort: { _id: -1 } })\r\n            .toArray((err, rooms) => {\r\n            if (err)\r\n                return next(err);\r\n            res.render('index', {\r\n                autocomplete: server_1.renderToString(react_1.createElement(autocomplete_1.default, { options: rooms, url })),\r\n                data: `<script>var __autocomplete_data = { rooms: ${JSON.stringify(rooms, null, 2)}, url: \"${url}\" }</script>`\r\n            });\r\n        });\r\n    });\r\n    app.listen(PORT, () => {\r\n        console.log('Listening on port ' + PORT);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "errorhandler":
/*!*******************************!*\
  !*** external "errorhandler" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"errorhandler\");\n\n//# sourceURL=webpack:///external_%22errorhandler%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validator\");\n\n//# sourceURL=webpack:///external_%22express-validator%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });