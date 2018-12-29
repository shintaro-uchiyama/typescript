import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Config from "./common/environment/config";

ReactDOM.render(
  <div>
    <div>
      someKey: {Config.env.someKey}
    </div>
    <div>
      commonKey: {Config.commonValue}
    </div>
  </div>,
  document.getElementById("container"),
);