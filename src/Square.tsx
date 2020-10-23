import React from "react";
import "./Square.css";

type Props = {
  player: any;
  onPlayerChange: any;
  row: number;
  col: number;
  symbol: any;
};

class Square extends React.Component<Props> {
  onPlayerClick = () => {
    console.log(this.props.player);
    console.log(this.props.row);
    console.log(this.props.col);
    //if statement 26 is true cannot enter the button click.

    this.props.onPlayerChange(this.props.row, this.props.col);

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
