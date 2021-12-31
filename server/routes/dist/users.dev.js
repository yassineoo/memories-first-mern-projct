"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = require("../controllers/users.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var route = _express["default"].Router();

route.post("/in", _users.signIn);
route.post("/up", _users.signUp);
var _default = route;
exports["default"] = _default;