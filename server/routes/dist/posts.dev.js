"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _posts = require("../controllers/posts.js");

var _auth = _interopRequireDefault(require("../middelware/auth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var route = _express["default"].Router();

route.get("/", _posts.getPosts);
route.post("/", _auth["default"], _posts.creatPost);
route.patch("/:id", _auth["default"], _posts.updatePost);
route["delete"]('/:id', _auth["default"], _posts.deletePost);
route.patch('/like/:id', _auth["default"], _posts.likePost);
var _default = route;
exports["default"] = _default;