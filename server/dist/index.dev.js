"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _posts = _interopRequireDefault(require("./routes/posts.js"));

var _users = _interopRequireDefault(require("./routes/users.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_dotenv["default"].config();

app.use(_bodyParser["default"].json({
  limite: "30mb",
  extended: true
}));
app.use(_bodyParser["default"].urlencoded({
  limite: "30mb",
  extended: true
}));
app.use((0, _cors["default"])());
app.get('/', function (req, res) {
  console.log('hi');
  res.send('welcome to memory api');
});
app.use('/posts', _posts["default"]);
app.use('/users', _users["default"]);
var URL = process.env.URL;
var PORT = process.env.PORT || 8000;

_mongoose["default"].connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return app.listen(PORT, console.log("server is running sucsessfully"));
})["catch"](function (err) {
  return console.log(err);
});