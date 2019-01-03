import { mount } from "enzyme";
import React from "react";
import App from "../../../src/components/jest_mock/App";
import * as ExportMulti from "../../../src/components/jest_mock/export_multi";
jest.mock("../../../src/components/jest_mock/export_default", () => {
  return "mock default string";
});

describe("App.tsx", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("all import mock", () => {
    /** 準備 */
    const returnFunctionMock = jest.spyOn(ExportMulti, "returnFunction");
    returnFunctionMock.mockReturnValueOnce("mock multi function");
    /** 実行 */
    const wrapper = mount(<App />);
    /** 検証 */
    expect(returnFunctionMock).toBeCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });
});
