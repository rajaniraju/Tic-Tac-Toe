import React from "react";
import "./Square.css";

type Props = {
  symbol: any;
  value: number;
  player: any;
};
type State = {
  symbol: any;
  player: any;
};

class Square extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      symbol: "",
      player: "Player1",
    };
  }

  
  onNextPlayerClick = () => {
    let myPlayer = this.state.player;
    myPlayer = "player1" ? "player2" : "player1");
    if (this.state.player === "player1") {
      this.setState({
        symbol: "O",
        player: myPlayer,
      });
     }
    console.log(this.props.value);
  };

  render() {
    return (
      <div>
        <button
          className="btn"
          onClick={this.onNextPlayerClick}
          value={this.props.value}
        >
          {this.state.symbol}
        </button>
      </div>
    );
  }
}

export default Square;
