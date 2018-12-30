import React from "react";

interface Props {
  id: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface State {
  status: string;
  hasError: boolean;
}

class Lifecyle extends React.Component<Props, State> {

  public static getDerivedStateFromProps(props: Props, state: State) {
    // tslint:disable-next-line:no-console
    console.log("getDerivedStateFromProps called");
    if (props.id === "target") {
      // tslint:disable-next-line:no-console
      console.log("state is changed");
      return {
        status: "state changed",
      };
    }
    // tslint:disable-next-line:no-console
    console.log("state is not changed");
    return null;
  }

  public static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
    };
  }
  constructor(props: Props) {
    super(props);
    // tslint:disable-next-line:no-console
    console.log("constructor called");
    this.state = {
      hasError: false,
      status: "",
    };
  }

  public shouldComponentUpdate(nextProps: Props, nextState: State) {
    // tslint:disable-next-line:no-console
    console.log("shouldComponentUpdate called");
    if (this.props.id !== nextProps.id) {
      // tslint:disable-next-line:no-console
      console.log("current prop id !== next prop id let's update component!");
      return true;
    }
    // tslint:disable-next-line:no-console
    console.log("current prop id === next prop id don't update component!");
    return false;
  }

  public render() {
    const { id, handleInput } = this.props;
    const { status } = this.state;
    if (this.state.hasError) {
      return (
        <div>error happened</div>
      );
    } else {
      return (
        <>
          <input type="text" value={id} onChange={handleInput} />
          <div>{status}</div>
        </>
      );
    }
  }

  /**
   * componentがmountされた直後に実行
   * リモートからデータロードするときに良い
   * ここでsetStateすべきではない。2回renderして遅くなる
   */
  public componentDidMount() {
    // tslint:disable-next-line:no-console
    console.log("componentDidMount called");
  }

  public getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    // tslint:disable-next-line:no-console
    console.log("getSnapshotBeforeUpdate called");
    if (prevProps.id === "target") {
      // tslint:disable-next-line:no-console
      console.log("prevProps.id === target carry snapshot to update component!");
      return true;
    }
    // tslint:disable-next-line:no-console
    console.log("prevProps.id !== target don't carry snapshot to update component!");
    return null;
  }

  /**
   * componentがアップデートされた直後に実行
   * 前回の引数と今回の引数を比較して処理を判定
   * setStateするときは分岐に入れないと無限ループ
   * getSnapshotBeforeUpdate()がある場合snapshot引数が有効
   */
  public componentDidUpdate(prevProps: Props, prevState: State, snapshot: boolean) {
    // tslint:disable-next-line:no-console
    console.log("componentDidUpdate called");
    if (this.props.id !== prevProps.id) {
      // tslint:disable-next-line:no-console
      console.log("prev prop id !== curren prop id do something after update component");
    } else if (snapshot) {
      // tslint:disable-next-line:no-console
      console.log("true snapshot is carried");
    }
  }

  /**
   * componentがunmountされる直前に実行
   * クリーンアップ作業を一通り実行
   * もうコンポーネントもいなくなるのでsetStateここで呼ばないで
   */
  public componentWillUnmount() {
    // tslint:disable-next-line:no-console
    console.log("componentWillUnmount called");
  }

  public componentDidCatch(error: any, info: any) {
    // tslint:disable-next-line:no-console
    console.log("componentDidCatch called");
  }
}

export default Lifecyle;
