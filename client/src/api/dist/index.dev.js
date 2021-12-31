"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = exports.signUp = exports.likePost = exports.deletePost = exports.updatePost = exports.createPost = exports.fetchPosts = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = 'http://localhost:8000/posts';

var Api = _axios["default"].create({
  baseURL: 'http://localhost:8000/'
});

Api.interceptors.request.use(function (req) {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = "Bearer ".concat(JSON.stringify(JSON.parse(localStorage.getItem('profile')).token));
  }

  return req;
});

var fetchPosts = function fetchPosts() {
  return Api.get('/posts');
};

exports.fetchPosts = fetchPosts;

var createPost = function createPost(newPost) {
  return Api.post('/posts', newPost);
};

exports.createPost = createPost;

var updatePost = function updatePost(id, _updatePost) {
  return Api.patch("/posts/".concat(id), _updatePost);
};

exports.updatePost = updatePost;

var deletePost = function deletePost(id) {
  return Api["delete"]("/posts/".concat(id));
};

exports.deletePost = deletePost;

var likePost = function likePost(id) {
  return Api.patch("/posts/like/".concat(id));
};

exports.likePost = likePost;

var signUp = function signUp(compte) {
  console.log('signUp ', compte);
  return Api.post('/users/up', compte);
};

exports.signUp = signUp;

var signIn = function signIn(compte) {
  return Api.post('/users/in', compte);
};

exports.signIn = signIn;