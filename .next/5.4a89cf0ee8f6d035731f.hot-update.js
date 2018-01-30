webpackHotUpdate(5,{

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(393);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(403);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/natashakelly/common_app/components/Forecast.js';


var Forecast = function (_React$Component) {
  (0, _inherits3.default)(Forecast, _React$Component);

  function Forecast(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Forecast);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Forecast.__proto__ || (0, _getPrototypeOf2.default)(Forecast)).call(this, props));

    _this.componentWillMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.lookupWeatherAt(_this.props.zipcode);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.componentWillReceiveProps = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(nextProps) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.lookupWeatherAt(nextProps.zipcode);

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.lookupWeatherAt = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(zipcode) {
        var weather;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                console.log('Looking up weather at zipcode:', zipcode);
                _context3.next = 4;
                return _axios2.default.get('https://api.openweathermap.org/data/2.5/forecast?zip=' + zipcode + '&APPID=6f9e2f1d20bef61a529b8dbdb3fd82ae&units=imperial');

              case 4:
                weather = _context3.sent;

                console.log('Retrieved weather at zipcode', zipcode, weather.data);
                _this.setState({ weather: weather.data });
                _context3.next = 13;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3['catch'](0);

                console.log('Error retrieving weather', _context3.t0.message);
                _this.setState({ error: _context3.t0.message });

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[0, 9]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.state = {
      weather: { list: [] }
    };
    return _this;
  }

  (0, _createClass3.default)(Forecast, [{
    key: 'render',
    value: function render() {
      console.log(this.state);
      return _react2.default.createElement('div', {
        className: 'jsx-3713678472' + ' ' + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3713678472',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('h4', {
        className: 'jsx-3713678472' + ' ' + 'header--section-two',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Here is your forecast')), _react2.default.createElement('div', {
        className: 'jsx-3713678472' + ' ' + 'container--section-two',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('h4', {
        className: 'jsx-3713678472',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, this.state.weather.city.name), this.state.weather.list.map(function (item, index) {
        return _react2.default.createElement('div', { key: index, className: 'jsx-3713678472' + ' ' + 'content',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react2.default.createElement('p', {
          className: 'jsx-3713678472',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, item.dt_txt, ' ', _react2.default.createElement('br', {
          className: 'jsx-3713678472',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }), 'Description: ', item.weather[0].description, ' ', _react2.default.createElement('br', {
          className: 'jsx-3713678472',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }), 'Temperature: ', item.main.temp, ' ', _react2.default.createElement('br', {
          className: 'jsx-3713678472',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }), 'Max Temp: ', item.main.temp_max, ' ', _react2.default.createElement('br', {
          className: 'jsx-3713678472',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }), 'Humidity: ', item.main.humidity));
      })), _react2.default.createElement(_style2.default, {
        styleId: '3713678472',
        css: '.header--section-two.jsx-3713678472{font-family:\'Tiempos Headline\',\'sans-serif\';-webkit-letter-spacing:1.2px;-moz-letter-spacing:1.2px;-ms-letter-spacing:1.2px;letter-spacing:1.2px;font-size:2rem;color:rgb(221,105,41);}.wrapper.jsx-3713678472{margin-top:400px;}.container--section-two.jsx-3713678472{height:450px;width:910px;border:1px solid rgb(78,93,107);margin-top:20px;margin-bottom:40px;background:rgb(78,93,107);overflow:scroll;}@media screen and (max-width :320px){}@media screen and (max-width :800px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9yZWNhc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRvQixBQUcwRCxBQU81QixBQUlKLGFBQ0QsSUFKZCxRQUtvQyxtQkFaYixhQWFMLGdCQUNHLG1CQUNTLDBCQUNaLGdCQUNsQixXQWhCaUIsZUFDUyxzQkFDMUIiLCJmaWxlIjoiY29tcG9uZW50cy9Gb3JlY2FzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmF0YXNoYWtlbGx5L2NvbW1vbl9hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JlY2FzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2VhdGhlcjogeyBsaXN0OltdIH1cbiAgICB9XG4gIH1cblxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCA9IGFzeW5jKCkgPT4ge1xuICAgICAgdGhpcy5sb29rdXBXZWF0aGVyQXQodGhpcy5wcm9wcy56aXBjb2RlKTtcbiAgICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGFzeW5jKG5leHRQcm9wcykgPT4ge1xuICAgIHRoaXMubG9va3VwV2VhdGhlckF0KG5leHRQcm9wcy56aXBjb2RlKTtcbiAgfVxuXG4gIGxvb2t1cFdlYXRoZXJBdCA9IGFzeW5jKHppcGNvZGUpID0+IHtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc29sZS5sb2coJ0xvb2tpbmcgdXAgd2VhdGhlciBhdCB6aXBjb2RlOicsIHppcGNvZGUpO1xuICAgICAgICBsZXQgd2VhdGhlciA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3ppcD0ke3ppcGNvZGV9JkFQUElEPTZmOWUyZjFkMjBiZWY2MWE1MjliOGRiZGIzZmQ4MmFlJnVuaXRzPWltcGVyaWFsYClcbiAgICAgICAgY29uc29sZS5sb2coJ1JldHJpZXZlZCB3ZWF0aGVyIGF0IHppcGNvZGUnLCB6aXBjb2RlLCB3ZWF0aGVyLmRhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2VhdGhlcjogd2VhdGhlci5kYXRhfSlcbiAgICAgIH1cbiAgICAgIGNhdGNoKGVyKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHJldHJpZXZpbmcgd2VhdGhlcicsIGVyLm1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IGVyLm1lc3NhZ2UgfSk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWRlci0tc2VjdGlvbi10d29cIj5IZXJlIGlzIHlvdXIgZm9yZWNhc3Q8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItLXNlY3Rpb24tdHdvXCI+XG4gICAgICAgICAgPGg0Pnt0aGlzLnN0YXRlLndlYXRoZXIuY2l0eS5uYW1lfTwvaDQ+XG4gICAgICAgICAge3RoaXMuc3RhdGUud2VhdGhlci5saXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8cD57aXRlbS5kdF90eHR9IDxiciAvPlxuICAgICAgICAgICAgICBEZXNjcmlwdGlvbjoge2l0ZW0ud2VhdGhlclswXS5kZXNjcmlwdGlvbn0gPGJyIC8+XG4gICAgICAgICAgICAgIFRlbXBlcmF0dXJlOiB7aXRlbS5tYWluLnRlbXB9IDxiciAvPlxuICAgICAgICAgICAgICBNYXggVGVtcDoge2l0ZW0ubWFpbi50ZW1wX21heH0gPGJyIC8+XG4gICAgICAgICAgICAgIEh1bWlkaXR5OiB7aXRlbS5tYWluLmh1bWlkaXR5fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oZWFkZXItLXNlY3Rpb24tdHdve1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdUaWVtcG9zIEhlYWRsaW5lJywgJ3NhbnMtc2VyaWYnO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgY29sb3I6IHJnYigyMjEsIDEwNSwgNDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cmFwcGVye1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhaW5lci0tc2VjdGlvbi10d297XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDkxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDc4LCA5MywgMTA3KTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDc4LCA5MywgMTA3KTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDMyMHB4KSB7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogODAwcHgpIHtcblxuXG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Forecast.js */'
      }));
    }
  }]);

  return Forecast;
}(_react2.default.Component);

exports.default = Forecast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9yZWNhc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsIkZvcmVjYXN0IiwicHJvcHMiLCJjb21wb25lbnRXaWxsTW91bnQiLCJsb29rdXBXZWF0aGVyQXQiLCJ6aXBjb2RlIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJ3ZWF0aGVyIiwiZGF0YSIsInNldFN0YXRlIiwibWVzc2FnZSIsImVycm9yIiwic3RhdGUiLCJsaXN0IiwiY2l0eSIsIm5hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkdF90eHQiLCJkZXNjcmlwdGlvbiIsIm1haW4iLCJ0ZW1wIiwidGVtcF9tYXgiLCJodW1pZGl0eSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0lBTWMsQTtvQ0FDbkI7O29CQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7OzBJQUFBLEFBQ1g7O1VBRFcsQUFTbkIsOEZBQXFCLG1CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUNqQjtvQkFBQSxBQUFLLGdCQUFnQixNQUFBLEFBQUssTUFEVCxBQUNqQixBQUFnQzs7aUJBRGY7aUJBQUE7OEJBQUE7O0FBQUE7a0JBQUE7QUFURjs7VUFBQSxBQWFuQix3Q0FibUI7MkZBYVMsa0JBQUEsQUFBTSxXQUFOO3dFQUFBO29CQUFBOytDQUFBO21CQUMxQjtzQkFBQSxBQUFLLGdCQUFnQixVQURLLEFBQzFCLEFBQStCOzttQkFETDttQkFBQTtpQ0FBQTs7QUFBQTtxQkFBQTtBQWJUOzsyQkFBQTtpQ0FBQTtBQUFBO0FBQUE7O1VBQUEsQUFpQm5CLDhCQWpCbUI7MkZBaUJELGtCQUFBLEFBQU0sU0FBTjtZQUFBO3dFQUFBO29CQUFBOytDQUFBO21CQUFBO2lDQUVaOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxrQ0FGQSxBQUVaLEFBQThDO2lDQUZsQzt1QkFHUSxnQkFBQSxBQUFNLDhEQUFOLEFBQWtFLFVBSDFFOzttQkFHUjtBQUhRLG9DQUlaOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxnQ0FBWixBQUE0QyxTQUFTLFFBQXJELEFBQTZELEFBQzdEO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQVMsUUFMYixBQUtaLEFBQWMsQUFBbUI7aUNBTHJCO0FBQUE7O21CQUFBO2lDQUFBO2tEQVFaOzt3QkFBQSxBQUFRLElBQVIsQUFBWSw0QkFBNEIsYUFBeEMsQUFBMkMsQUFDM0M7c0JBQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxhQVRYLEFBU1osQUFBYyxBQUFZOzttQkFUZDttQkFBQTtpQ0FBQTs7QUFBQTtrQ0FBQTtBQWpCQzs7NEJBQUE7aUNBQUE7QUFBQTtBQUdqQjs7VUFBQSxBQUFLO2VBQ00sRUFBRSxNQUpJLEFBR2pCLEFBQWEsQUFDRixBQUFPO0FBREwsQUFDWDtXQUVIOzs7Ozs2QkF5QlEsQUFDUDtjQUFBLEFBQVEsSUFBSSxLQUFaLEFBQWlCLEFBQ2pCOzZCQUNJLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBQ0EsQUFDRSxBQUVGLDJDQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFBSztBQUFMO0FBQUEsY0FBSyxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLEtBRDFCLEFBQ0UsQUFBNkIsQUFDNUIsWUFBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLEtBQW5CLEFBQXdCLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxPQUFVLEFBQzdDOytCQUFPLGNBQUEsU0FBeUIsS0FBekIsQUFBOEIsMkNBQTlCLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0o7QUFESTtTQUFBLGtCQUNKLGNBQUE7cUJBQUE7O3NCQUFBO3dCQUFBLEFBQUk7QUFBSjtBQUFBLGdCQUFBLEFBQVMsUUFBUTtxQkFBQTs7c0JBQUE7d0JBQWpCLEFBQWlCO0FBQUE7QUFBQSxZQUNILHNCQUFBLEFBQUssUUFBTCxBQUFhLEdBRDNCLEFBQzhCLGFBQWE7cUJBQUE7O3NCQUFBO3dCQUQzQyxBQUMyQztBQUFBO0FBQUEsWUFDN0Isc0JBQUEsQUFBSyxLQUZuQixBQUV3QixNQUFNO3FCQUFBOztzQkFBQTt3QkFGOUIsQUFFOEI7QUFBQTtBQUFBLFlBQ25CLG1CQUFBLEFBQUssS0FIaEIsQUFHcUIsVUFBVTtxQkFBQTs7c0JBQUE7d0JBSC9CLEFBRytCO0FBQUE7QUFBQSxZQUNwQixtQkFBQSxBQUFLLEtBTG5CLEFBQU8sQUFDSixBQUlxQixBQUV0QjtBQWRMLEFBSUEsQUFFRztpQkFOSDthQURKLEFBQ0ksQUFrREw7QUFsREs7Ozs7O0VBbkM4QixnQkFBTSxBOztrQkFBdkIsQSIsImZpbGUiOiJGb3JlY2FzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmF0YXNoYWtlbGx5L2NvbW1vbl9hcHAifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/natashakelly/common_app/components/Forecast.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/natashakelly/common_app/components/Forecast.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40YTg5Y2YwZWU4ZjZkMDM1NzMxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JlY2FzdC5qcz9hY2JkZTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmVjYXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB3ZWF0aGVyOiB7IGxpc3Q6W10gfVxuICAgIH1cbiAgfVxuXG5cbiAgY29tcG9uZW50V2lsbE1vdW50ID0gYXN5bmMoKSA9PiB7XG4gICAgICB0aGlzLmxvb2t1cFdlYXRoZXJBdCh0aGlzLnByb3BzLnppcGNvZGUpO1xuICAgIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gYXN5bmMobmV4dFByb3BzKSA9PiB7XG4gICAgdGhpcy5sb29rdXBXZWF0aGVyQXQobmV4dFByb3BzLnppcGNvZGUpO1xuICB9XG5cbiAgbG9va3VwV2VhdGhlckF0ID0gYXN5bmMoemlwY29kZSkgPT4ge1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zb2xlLmxvZygnTG9va2luZyB1cCB3ZWF0aGVyIGF0IHppcGNvZGU6JywgemlwY29kZSk7XG4gICAgICAgIGxldCB3ZWF0aGVyID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/emlwPSR7emlwY29kZX0mQVBQSUQ9NmY5ZTJmMWQyMGJlZjYxYTUyOWI4ZGJkYjNmZDgyYWUmdW5pdHM9aW1wZXJpYWxgKVxuICAgICAgICBjb25zb2xlLmxvZygnUmV0cmlldmVkIHdlYXRoZXIgYXQgemlwY29kZScsIHppcGNvZGUsIHdlYXRoZXIuZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWF0aGVyOiB3ZWF0aGVyLmRhdGF9KVxuICAgICAgfVxuICAgICAgY2F0Y2goZXIpe1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcmV0cmlldmluZyB3ZWF0aGVyJywgZXIubWVzc2FnZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogZXIubWVzc2FnZSB9KTtcbiAgICAgIH1cbiAgICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyLS1zZWN0aW9uLXR3b1wiPkhlcmUgaXMgeW91ciBmb3JlY2FzdDwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci0tc2VjdGlvbi10d29cIj5cbiAgICAgICAgICA8aDQ+e3RoaXMuc3RhdGUud2VhdGhlci5jaXR5Lm5hbWV9PC9oND5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS53ZWF0aGVyLmxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxwPntpdGVtLmR0X3R4dH0gPGJyIC8+XG4gICAgICAgICAgICAgIERlc2NyaXB0aW9uOiB7aXRlbS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufSA8YnIgLz5cbiAgICAgICAgICAgICAgVGVtcGVyYXR1cmU6IHtpdGVtLm1haW4udGVtcH0gPGJyIC8+XG4gICAgICAgICAgICAgIE1heCBUZW1wOiB7aXRlbS5tYWluLnRlbXBfbWF4fSA8YnIgLz5cbiAgICAgICAgICAgICAgSHVtaWRpdHk6IHtpdGVtLm1haW4uaHVtaWRpdHl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmhlYWRlci0tc2VjdGlvbi10d297XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1RpZW1wb3MgSGVhZGxpbmUnLCAnc2Fucy1zZXJpZic7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBjb2xvcjogcmdiKDIyMSwgMTA1LCA0MSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyYXBwZXJ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFpbmVyLS1zZWN0aW9uLXR3b3tcbiAgICAgICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogOTEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNzgsIDkzLCAxMDcpO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNzgsIDkzLCAxMDcpO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMzIwcHgpIHtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA4MDBweCkge1xuXG5cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb3JlY2FzdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBVEE7QUFDQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFIQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBVkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFqQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUEwQkE7QUFBQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBTkE7QUFrREE7QUFsREE7Ozs7O0FBbkNBO0FBQ0E7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=