import GpioApi from './api/GpioApi';
import LedsApi from './api/LedsApi';
const execFile = require('child_process').execFileSync;
const os = require('os');

export class Hal{
    constructor(){
        this.gpio = new GpioApi();
        this.leds = new LedsApi();

        const jsArch = os.arch();
        this.arch = jsArch;

        if(jsArch == "x64") {
            this.arch = "x86_64";
        } else if(jsArch == "arm64") {
            this.arch = "aarch64";
        }

        var clientScriptPath = __dirname;
        var proxyPath = clientScriptPath + "/bin/http-cli-proxy-" + this.arch;

        execFile(proxyPath, ['iwasm'], (err, stdout, stderr) => {
            if (err) {
              throw err;
            }

            console.log("Proxy running ...");
          });

        
    }
}