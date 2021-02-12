const { spawn, execSync } = require("child_process");

import * as apis from "./index_gen";

export class BalenaHal {
  constructor() {
    const arch = execSync("uname -m").toString().trim();

    var clientScriptPath = __dirname;
    var proxyPath = clientScriptPath + "/bin/wamr-proxy-" + arch;

    const child = spawn(proxyPath, {
      detached: true,
      stdio: "ignore",
    });

    child.unref();
    process.on("exit", () => child.kill());

    let apisDescription = Reflect.ownKeys(apis).filter((key) =>
      key.endsWith("Api")
    );

    apisDescription.map((key) => {
      let propName = key.slice(0, key.length - 3).toLowerCase();
      let instance = new apis[key]();
      Reflect.set(this, propName, instance);
    });
  }
}
