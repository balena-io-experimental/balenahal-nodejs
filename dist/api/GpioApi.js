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

var GpioApi = /*#__PURE__*/function () {
  function GpioApi(apiClient) {
    _classCallCheck(this, GpioApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  _createClass(GpioApi, [{
    key: "exportGpioWithHttpInfo",
    value: function exportGpioWithHttpInfo(pin) {
      var postBody = null; // verify the required parameter 'pin' is set

      if (pin === undefined || pin === null) {
        throw new Error("Missing the required parameter 'pin' when calling exportGpio");
      }

      var pathParams = {};
      var queryParams = {
        'pin': pin
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/gpio/export', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
  }, {
    key: "exportGpio",
    value: function exportGpio(pin) {
      return this.exportGpioWithHttpInfo(pin).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: "getValueWithHttpInfo",
    value: function getValueWithHttpInfo(pin) {
      var postBody = null; // verify the required parameter 'pin' is set

      if (pin === undefined || pin === null) {
        throw new Error("Missing the required parameter 'pin' when calling getValue");
      }

      var pathParams = {};
      var queryParams = {
        'pin': pin
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/gpio/get_value', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
  }, {
    key: "getValue",
    value: function getValue(pin) {
      return this.getValueWithHttpInfo(pin).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: "setValueWithHttpInfo",
    value: function setValueWithHttpInfo(value) {
      var postBody = null; // verify the required parameter 'value' is set

      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling setValue");
      }

      var pathParams = {};
      var queryParams = {
        'value': value
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/gpio/set_value', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      return this.setValueWithHttpInfo(value).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }, {
    key: "unexportGpioWithHttpInfo",
    value: function unexportGpioWithHttpInfo(pin) {
      var postBody = null; // verify the required parameter 'pin' is set

      if (pin === undefined || pin === null) {
        throw new Error("Missing the required parameter 'pin' when calling unexportGpio");
      }

      var pathParams = {};
      var queryParams = {
        'pin': pin
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/gpio/unexport', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
  }, {
    key: "unexportGpio",
    value: function unexportGpio(pin) {
      return this.unexportGpioWithHttpInfo(pin).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return GpioApi;
}();

exports["default"] = GpioApi;