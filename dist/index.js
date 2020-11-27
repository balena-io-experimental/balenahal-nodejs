"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hal = void 0;

var _GpioApi = _interopRequireDefault(require("./api/GpioApi"));

var _LedsApi = _interopRequireDefault(require("./api/LedsApi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var execFile = require('child_process').execFileSync;

var os = require('os');

var Hal = function Hal() {
  _classCallCheck(this, Hal);

  this.gpio = new _GpioApi["default"]();
  this.leds = new _LedsApi["default"]();
  var jsArch = os.arch();
  this.arch = jsArch;

  if (jsArch == "x64") {
    this.arch = "x86_64";
  } else if (jsArch == "arm64") {
    this.arch = "aarch64";
  }

  var clientScriptPath = __dirname;
  var proxyPath = clientScriptPath + "/bin/http-cli-proxy-" + this.arch;
  execFile(proxyPath, ['iwasm'], function (err, stdout, stderr) {
    if (err) {
      throw err;
    }

    console.log("Proxy running ...");
  });
};

exports.Hal = Hal;