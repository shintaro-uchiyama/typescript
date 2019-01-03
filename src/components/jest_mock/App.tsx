import React from "react";
import ExportDefault from "./export_default";
import * as ExportMulti from "./export_multi";

const App = () => {
  const stringMulti = ExportMulti.returnString;
  const functionMulti = ExportMulti.returnFunction;
  const stringDefault = ExportDefault;
  return (
    <>
      <div id="stringMulti">stringMulti: {stringMulti}</div>
      <div id="functionMulti">functionMulti: {functionMulti()}</div>
      <div id="stringDefault">stringDefault: {stringDefault}</div>
    </>
  );
};

export default App;
