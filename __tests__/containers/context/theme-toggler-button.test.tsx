import { mount } from "enzyme";
import React from "react";
import ThemeTogglerButton from "../../../src/components/context/theme-toggler-button";
/** ThemeContext.Consumerをモック化 */
let theme: any;
let toggleTheme: jest.Mock<{}>;
jest.mock("../../../src/containers/context/theme-context", () => {
  return {
    Consumer: (props: any) => props.children({ theme, toggleTheme }),
  };
});

describe("theme-toggler-button.tsx", () => {
  beforeEach(() => {
    jest.resetModules();
    theme = {
      background: "green",
    };
    toggleTheme = jest.fn();
  });
  it("snapshot test", () => {
    /** 準備 */
    /** 実行 */
    const wrapper = mount(<ThemeTogglerButton />);
    expect(wrapper).toMatchSnapshot();
    /** 検証 */
  });

  it("onClick test", () => {
    /** 準備 */
    /** 実行 */
    const wrapper = mount(<ThemeTogglerButton />);
    wrapper.simulate("click");
    /** 検証 */
    expect(toggleTheme).toBeCalledTimes(1);
  });
});
