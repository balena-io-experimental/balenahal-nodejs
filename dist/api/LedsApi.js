"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LedsApi = /*#__PURE__*/function () {
  function LedsApi(apiClient) {
    _classCallCheck(this, LedsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  _createClass(LedsApi, [{
    key: "offWithHttpInfo",
    value: function offWithHttpInfo(led) {
      var postBody = null; // verify the required parameter 'led' is set

      if (led === undefined || led === null) {
        throw new Error("Missing the required parameter 'led' when calling off");
      }

      var pathParams = {};
      var queryParams = {
        'led': led
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/leds/off', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
  }, {
    key: "off",
    value: function off(led) {
      return this.offWithHttpInfo(led).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: "onWithHttpInfo",
    value: function onWithHttpInfo(led) {
      var postBody = null; // verify the required parameter 'led' is set

      if (led === undefined || led === null) {
        throw new Error("Missing the required parameter 'led' when calling on");
      }

      var pathParams = {};
      var queryParams = {
        'led': led
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/leds/on', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
  }, {
    key: "on",
    value: function on(led) {
      return this.onWithHttpInfo(led).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LedsApi;
}();

exports["default"] = LedsApi;