import React from "react";
import "./Square.css";

type Props = {
  player: any;
  onPlayerChange: any;
  row: number;
  col: number;
  symbol: any;
};
type State = {
  touch: Boolean;
};

class Square extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      touch: false,
    }
  }
  onPlayerClick = () => {
    if (this.state.touch) {
      return
    }
    console.log(this.props.player);
    console.log(this.props.row);
    console.log(this.props.col);
    //if statement 26 is true cannot enter the button click.
   
    this.props.onPlayerChange(this.props.row, this.props.col);
    this.setState({
      touch: true,
    })
    console.log(this.props.player);
  };

  render() {
    return (
      <div>
        <button className="btn" onClick={this.onPlayerClick}>
          {this.props.symbol}
        </button>
      </div>
    );
  }
}

export default Square;
