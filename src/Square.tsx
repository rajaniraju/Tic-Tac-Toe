import React from "react";
import "./Square.css";

type Props = {
  symbol: any;
  value: number;
  player: any;
};
type State = {
  symbol: any;
  //player: any;
};

class Square extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      symbol: "",
      //player: "player1",
    };
  }

  
  onPlayerClick = () => {
    
    console.log(this.props.player);
    if (this.props.player == "player 1") {
      this.setState({
        symbol: "X"
      })
      if (this.props.player == "player 2") {
        this.setState({
          symbol: "O"
        })
      }
      console.log(this.props.player);
    
      console.log(this.props.value);
    }
  }

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
