import React from "react";
import "./App.css";
import Square from "./Square";

type State = {
  player: string;
  board: string[][];
  gameOver: any;
};
class App extends React.Component<null, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      player: "player 1",
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      gameOver: false,
    };
  }

  onPlayerChange = (row: number, col: number) => {
    this.checkGameOver();
    if (this.state.gameOver) {
      alert("GAME OVER !");
      console.log("Game Over");
      return;
    }
    console.log(this.state.board);
    let symbol = this.getSymbol(row, col);
    let board = this.state.board;
    //connecting symbol to board;
    board[row][col] = symbol;
    console.log(board);
    let player = this.state.player;
    if (player === "player 1") {
      player = "player 2";
    } else if (player === "player 2") {
      player = "player 1";
    }
    this.setState({
      player: player,
      board: board,
      });
  };
  checkGameOver = () => {
    let gameOver = false;
    if (
      this.state.board[0][0] === this.state.board[0][1] &&
      this.state.board[0][1] === this.state.board[0][2] &&
      this.state.board[0][0] !== ""
    ) {
      gameOver = true;
    }
    this.setState({
      gameOver: gameOver,
    });
  };
  
  getSymbol(row: number, col: number): string {
    let symbol = "";
    if (this.state.board[row][col] === "") {
      if (this.state.player === "player 1") {
        symbol = "X";
      } else if (this.state.player === "player 2") {
        symbol = "O";
      }
    }
    return symbol;
  }

  render() {
    return (
      <div className="App-body">
        <div>
          <h1>Tic Tac Toe</h1>
        </div>
        <div>
          <h2>{this.state.gameOver && (
            <div>Game Over ! Refresh to play next Game.{this.state.gameOver}</div>
          )}</h2>
          <h2> Now Playing {this.state.player}</h2>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <Square
                    row={0}
                    col={0}
                    symbol={this.state.board[0][0]}
                    player={this.state.player}
                    onPlayerChange={this.onPlayerChange}
                  />
                </td>
                <td>
                  <Square
                    symbol={this.state.board[0][1]}
                    row={0}
                    col={1}
                    player={this.state.player}
                    onPlayerChange={this.onPlayerChange}
                  />
                </td>
                <td>
                  <Square
                    row={0}
                    col={2}
                    symbol={this.state.board[0][2]}
                    player={this.state.player}
                    onPlayerChange={this.onPlayerChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Square
                    row={1}
                    col={0}
                    symbol={this.state.board[1][0]}
                    player={this.state.player}
                    onPlayerChange={this.onPlayerChange}
                  />
                </td>
                <td>
                  <Square
                    row={1}
                    col={1}
                    symbol={this.state.board[1][1]}
                    player={this.state.player}
                    onPlayerChange={this.onPlayerChange}
                  />
                </td>
                <td>
                  <Square
                    row={1}
                    col={2}
                    symbol={this.state.board[1][2]}
                    player={this.state.player}
                    onPlayerChange={this.onPlayerChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Square
                    row={2}
                    col={0}
                    symbol={this.state.board[2][0]}
                    player={this.state.player}
                    onPlayerChange={this.onPlayerChange}
                  />
                </td>
                <td>
                  <Square
                    row={2}
                    col={1}
                    symbol={this.state.board[2][1]}
                    player={this.state.player}
                    onPlayerChange={this.onPlayerChange}
                  />
                </td>
                <td>
                  <Square
                    row={2}
                    col={2}
                    symbol={this.state.board[2][2]}
                    player={this.state.player}
                    onPlayerChange={this.onPlayerChange}
                  />
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
