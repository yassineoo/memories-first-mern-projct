"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var postSchema = _mongoose["default"].Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    "default": 0
  },
  likes: [String],
  createdAt: {
    type: Date,
    "default": new Date()
  }
});

var PostMessage = _mongoose["default"].model("postMessage", postSchema);

var _default = PostMessage;
exports["default"] = _default;