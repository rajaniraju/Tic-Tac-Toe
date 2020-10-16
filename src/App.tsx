import React from "react";
import "./App.css";
import Square from "./Square";
type Props = {
  player: any;
};
type State = {
  player: any;
};
class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      player: "player 1",
    };
  }
  onPlayerChange = () => {
    if (this.state.player === "player 1") {
      this.setState ({
        player: "player 2",
      });
    }
  };

  render() {
    return (
      <div className="App-body">
        <div>
          <h1>Tic Tac Toe</h1>
        </div>
        <div>
          <h2> Now Playing {this.state.player}</h2>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <Square value={0} symbol={""} player={this.state.player}  />
                </td>
                <td>
                  <Square value={1} symbol={""} player={this.state.player} />
                </td>
                <td>
                  <Square value={2} symbol={""} player={this.state.player} />
                </td>
              </tr>
              <tr>
                <td>
                  <Square value={3} symbol={""} player={this.state.player} />
                </td>
                <td>
                  <Square value={4} symbol={""} player={this.state.player} />
                </td>
                <td>
                  <Square value={5} symbol={""} player={this.state.player} />
                </td>
              </tr>
              <tr>
                <td>
                  <Square value={6} symbol={""} player={this.state.player} />
                </td>
                <td>
                  <Square value={7} symbol={""} player={this.state.player} />
                </td>
                <td>
                  <Square value={8} symbol={""} player={this.state.player} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
