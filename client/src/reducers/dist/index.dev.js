"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _posts = _interopRequireDefault(require("./posts.js"));

var _auth = _interopRequireDefault(require("./auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  posts: _posts["default"],
  auth: _auth["default"]
});

exports["default"] = _default;