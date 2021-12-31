"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.likePost = exports.deletePost = exports.updatePost = exports.creatPost = exports.getPosts = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _postMessage = _interopRequireDefault(require("../models/postMessage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log(_postMessage["default"]);

var getPosts = function getPosts(req, res) {
  var postMessages;
  return regeneratorRuntime.async(function getPosts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_postMessage["default"].find());

        case 3:
          postMessages = _context.sent;
          res.status(200).json(postMessages);
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(404).json(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getPosts = getPosts;

var creatPost = function creatPost(req, res) {
  var post, newPost;
  return regeneratorRuntime.async(function creatPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          post = req.body;
          _context2.prev = 1;
          newPost = (0, _postMessage["default"])(_objectSpread({}, post, {
            creator: req.userId,
            createdAt: new Date().toISOString()
          }));
          console.log(newPost);
          _context2.next = 6;
          return regeneratorRuntime.awrap(newPost.save());

        case 6:
          res.status(201).json(newPost);
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
          res.status(409).json(_context2.t0);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

exports.creatPost = creatPost;

var updatePost = function updatePost(req, res) {
  var id, _req$body, title, message, creator, selectedFile, tags, updatedPost;

  return regeneratorRuntime.async(function updatePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _req$body = req.body, title = _req$body.title, message = _req$body.message, creator = _req$body.creator, selectedFile = _req$body.selectedFile, tags = _req$body.tags;

          if (_mongoose["default"].Types.ObjectId.isValid(id)) {
            _context3.next = 4;
            break;
          }

          return _context3.abrupt("return", res.status(404).send("No post with id: ".concat(id)));

        case 4:
          updatedPost = {
            creator: creator,
            title: title,
            message: message,
            tags: tags,
            selectedFile: selectedFile,
            _id: id
          };
          _context3.next = 7;
          return regeneratorRuntime.awrap(_postMessage["default"].findByIdAndUpdate(id, updatedPost, {
            "new": true
          }));

        case 7:
          console.log('update lllll', id, '---/n', title, ' /n ', message, ' /n ', creator, '    ', '     ', tags);
          res.json(updatedPost);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.updatePost = updatePost;

var likePost = function likePost(req, res) {
  var id, post, index, updated;
  return regeneratorRuntime.async(function likePost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log('start');
          id = req.params.id;

          if (_mongoose["default"].Types.ObjectId.isValid(id)) {
            _context4.next = 4;
            break;
          }

          return _context4.abrupt("return", res.status(404).send("No post with id: ".concat(id)));

        case 4:
          _context4.next = 6;
          return regeneratorRuntime.awrap(_postMessage["default"].findById(id));

        case 6:
          post = _context4.sent;
          console.log('id : ', id);
          console.log('id 2: ', req.userId);
          index = post.likes.findIndex(function (id) {
            return id == String(req.userId);
          });

          if (index == -1) {
            post.likes.push(req.userId);
            post.likeCount = post.likeCount + 1;
          } else {
            post.likes = post.likes.filter(function (id) {
              return id != String(req.userId);
            });
            post.likeCount = post.likeCount - 1;
          }

          _context4.next = 13;
          return regeneratorRuntime.awrap(_postMessage["default"].findByIdAndUpdate(id, post, {
            "new": true
          }));

        case 13:
          updated = _context4.sent;
          console.log(updated);
          res.status(200).json(updated);

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.likePost = likePost;

var deletePost = function deletePost(req, res) {
  var id, post;
  return regeneratorRuntime.async(function deletePost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          if (!req.userId) res.status(400).json({
            message: 'please sign in first'
          });

          if (_mongoose["default"].Types.ObjectId.isValid(id)) {
            _context5.next = 5;
            break;
          }

          return _context5.abrupt("return", res.status(404).send("No post with id: ".concat(id)));

        case 5:
          _context5.next = 7;
          return regeneratorRuntime.awrap(_postMessage["default"].findByIdAndDelete(id));

        case 7:
          post = _context5.sent;
          console.log('delete');
          res.json(post);
          _context5.next = 16;
          break;

        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](1);
          console.log(_context5.t0);
          res.status(500).json(_context5.t0);

        case 16:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 12]]);
};
/*

    const {id:_id}=req.params;
    const post = req.body;
    console.log (_id ,'    ', post);
    if(! Mongoose.Types.ObjectId.isValid(_id) ) return res.status(405).send('no post zith that Id');

    try {
        const updatedPost =  PostMessage.findByIdAndUpdate(_id,{...post,_id}, {new : true} )
        res.status(202).json(updatedPost)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
  

}
*/


exports.deletePost = deletePost;