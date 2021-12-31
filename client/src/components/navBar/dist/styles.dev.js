"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _colors = require("@material-ui/core/colors");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 50px'
    },
    heading: {
      color: 'rgba(0,183,255, 1)',
      textDecoration: 'none'
    },
    image: {
      marginLeft: '15px'
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '400px'
    },
    profile: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '400px'
    },
    userName: {
      display: 'flex',
      alignItems: 'center'
    },
    brandContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    purple: {
      color: theme.palette.getContrastText(_colors.deepPurple[500]),
      backgroundColor: _colors.deepPurple[500]
    }
  };
});

exports["default"] = _default;