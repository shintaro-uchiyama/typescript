import React from "react";
import { Content } from "../../components/context/Context";
import ThemeContext from "./theme-context";
import { themes } from "./themes";

interface State {
  theme: {
    background: string;
    foreground: string;
  };
  toggleTheme: () => void;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.toggleThem = this.toggleThem.bind(this);
    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleThem,
    };
  }

  public render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }

  private toggleThem() {
    this.setState({
      theme:
        this.state.theme === themes.dark
          ? themes.light
          : themes.dark,
    });
  }
}

export default App;
