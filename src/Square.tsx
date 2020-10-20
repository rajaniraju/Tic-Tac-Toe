import React from "react";
import "./Square.css";

type Props = {
  symbol: any;
  value: number;
  player: any;
  onPlayerChange: any;
};
type State = {
  symbol: any;
  touch: Boolean;
};

class Square extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      symbol: "",
      touch: false,
    };
  }

  onPlayerClick = () => {
    console.log(this.props.player);
    //if statement 26 is true cannot enter the button click.
    if (this.state.touch) {
      return;
    }
    this.props.onPlayerChange();
    if (this.props.player === "player 1") {
      this.setState({
        symbol: "X",
        touch: true,
      });
    } else if (this.props.player === "player 2") {
      this.setState({
        symbol: "O",
        touch: true,
      });
    }
    console.log(this.props.player);
    console.log(this.props.value);
  };

  render() {
    return (
      <div>
        <button
          className="btn"
          onClick={this.onPlayerClick}
          value={this.props.value}
        >
          {this.state.symbol}
        </button>
      </div>
    );
  }
}

export default Square;
