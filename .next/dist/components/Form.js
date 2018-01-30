'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Forecast = require('../components/Forecast');

var _Forecast2 = _interopRequireDefault(_Forecast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/natashakelly/common_app/components/Form.js';


var Form = function (_React$Component) {
  (0, _inherits3.default)(Form, _React$Component);

  function Form(props) {
    (0, _classCallCheck3.default)(this, Form);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call(this, props));

    _this.onChange = function (e) {
      _this.setState({ zipcode: e.target.value });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.setState({ zipcode: '' });
    };

    _this.state = {
      zipcode: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Form, [{
    key: 'render',
    value: function render() {
      var zipcode = this.state.zipcode;

      console.log(this.state);
      return _react2.default.createElement('div', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3485905059' + ' ' + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3485905059' + ' ' + 'form-group',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-3485905059' + ' ' + 'header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Enter your zipcode'), _react2.default.createElement('input', {
        type: 'text',

        placeholder: 'zipcode',
        id: 'inputDefault',
        value: this.state.zipcode,
        onChange: this.onChange,
        className: 'jsx-3485905059' + ' ' + 'form-control',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })), _react2.default.createElement('button', { type: 'button', onClick: this.handleSubmit, className: 'jsx-3485905059' + ' ' + 'btn btn-success',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Submit'), _react2.default.createElement(_style2.default, {
        styleId: '3485905059',
        css: 'body.jsx-3485905059{height:100vh;width:100vw;}.header.jsx-3485905059{color:#fff;font-weight:600;font-family:\'Apercu\',\'sans-serif\';}div.jsx-3485905059{margin-top:300px;}@media screen and (max-width :320px){}@media screen and (max-width :800px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q3NCLEFBRzRCLEFBS0YsQUFLTSxXQUpELEVBTEosSUFVZCxRQVRBLEVBS3FDLGtDQUNyQyIsImZpbGUiOiJjb21wb25lbnRzL0Zvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25hdGFzaGFrZWxseS9jb21tb25fYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5pbXBvcnQgRm9yZWNhc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JlY2FzdCc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB6aXBjb2RlOiAnJ1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgemlwY29kZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7emlwY29kZTogJyd9KTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0eyB6aXBjb2RlIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaGVhZGVyXCI+RW50ZXIgeW91ciB6aXBjb2RlPC9oMz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiemlwY29kZVwiXG4gICAgICAgICAgICBpZD1cImlucHV0RGVmYXVsdFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS56aXBjb2RlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGVye1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcGVyY3UnLCAnc2Fucy1zZXJpZic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMDBweDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMzIwcHgpIHtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogODAwcHgpIHtcblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxGb3JlY2FzdCAgemlwY29kZT17dGhpcy5zdGF0ZS56aXBjb2RlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Form.js */'
      }), _react2.default.createElement(_Forecast2.default, { zipcode: this.state.zipcode, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })));
    }
  }]);

  return Form;
}(_react2.default.Component);

exports.default = Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcmVjYXN0IiwiRm9ybSIsInByb3BzIiwib25DaGFuZ2UiLCJzZXRTdGF0ZSIsInppcGNvZGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUdQLEFBQU8sQUFBYzs7Ozs7Ozs7O0lBSUEsQTtnQ0FDbkI7O2dCQUFBLEFBQVksT0FBTzt3Q0FBQTs7a0lBQUEsQUFDWDs7VUFEVyxBQVFuQixXQUFXLGFBQUssQUFDWjtZQUFBLEFBQUssU0FBUyxFQUFFLFNBQVMsRUFBQSxBQUFFLE9BQTNCLEFBQWMsQUFBb0IsQUFDbkM7QUFWZ0I7O1VBQUEsQUFZbkIsZUFBZSxhQUFLLEFBQ2xCO1FBQUEsQUFBRSxBQUNGO1lBQUEsQUFBSyxTQUFTLEVBQUMsU0FBZixBQUFjLEFBQVUsQUFDekI7QUFma0IsQUFHakI7O1VBQUEsQUFBSztlQUhZLEFBR2pCLEFBQWEsQUFDRjtBQURFLEFBQ1g7V0FFSDs7Ozs7NkJBWVE7VUFBQSxBQUNBLFVBQVksS0FEWixBQUNpQixNQURqQixBQUNBLEFBQ1A7O2NBQUEsQUFBUSxJQUFJLEtBQVosQUFBaUIsQUFDakI7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFjOztvQkFBZDtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7Y0FBQSxBQUNLLEFBRUw7O3FCQUhBLEFBR1ksQUFDWjtZQUpBLEFBSUcsQUFDSDtlQUFPLEtBQUEsQUFBSyxNQUxaLEFBS2tCLEFBQ2xCO2tCQUFVLEtBTlYsQUFNZTs0Q0FOZixBQUVVOztvQkFGVjtzQkFISixBQUNFLEFBRUUsQUFTRjtBQVRFO0FBQ0EsMkJBUUYsY0FBQSxZQUFRLE1BQVIsQUFBYSxVQUFxQyxTQUFTLEtBQTNELEFBQWdFLGtEQUFoRSxBQUFnQzs7b0JBQWhDO3NCQUFBO0FBQUE7U0FaRixBQVlFO2lCQVpGO2FBQUEsQUF1Q0U7QUF2Q0YsMEJBdUNFLEFBQUMsb0NBQVUsU0FBUyxLQUFBLEFBQUssTUFBekIsQUFBK0I7b0JBQS9CO3NCQXpDTixBQUNFLEFBQ0UsQUF1Q0UsQUFJUDtBQUpPOzs7Ozs7RUEvRHdCLGdCQUFNLEE7O2tCQUFuQixBIiwiZmlsZSI6IkZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25hdGFzaGFrZWxseS9jb21tb25fYXBwIn0=