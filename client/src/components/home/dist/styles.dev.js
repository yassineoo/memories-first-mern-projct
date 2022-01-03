"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _styles.makeStyles)(function (theme) {
  return _defineProperty({
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    heading: {
      color: 'rgba(0,183,255, 1)'
    },
    image: {
      marginLeft: '15px'
    }
  }, theme.breakpoints.down('xs'), {
    mainCon: {
      flexDirection: 'column-reverse'
    }
  });
});

exports["default"] = _default;