"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var auth = function auth(req, res, next) {
  try {
    var token = req.headers.split(' ')[1];
    isCostume = token.length < 500;
    var decodedData;

    if (token && isCostume) {
      decodedData = _jsonwebtoken["default"].verify(token, 'secret');
      req.user.id = decodedData.id;
    }
  } catch (error) {
    console.error(error);
  }
};