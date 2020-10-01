import React from "react";
import "./Square.css";

type Props = {
    symbol: any;
    value: number;
    player1: any;
  
};
type State = {
    symbol: any;
    player1: any;
    
};

class Square extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
        symbol: "X",
        player1:"player1"
      
    };
    }
    
   
  changeSymbol = () => {
    this.setState({
      symbol: "/",
    });
      console.log(this.props.value)
  };

  render() {
    return (
      <div>
        <button className="btn" onClick={this.changeSymbol} value={this.props.value}>
          {this.state.symbol}
        </button>
      </div>
    );
  }
}

export default Square;
