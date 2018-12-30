import React from "react";
import Lifecycle from "./Lifecycle";

interface State {
  id: string;
}
class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      id: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }
  public render() {
    return (
      <Lifecycle id={this.state.id} handleInput={this.handleInput} />
    );
  }
  private handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    this.setState({
      id: value,
    });
  }
}

export default App;
