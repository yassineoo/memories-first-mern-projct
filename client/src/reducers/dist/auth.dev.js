"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionTypes = require("../constants/actionTypes");

var _default = function _default() {
  var posts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes.AUTH:
      return action.payload;
      break;

    default:
      return posts;
      break;
  }
};

exports["default"] = _default;