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

  onSquareClicked = (row: number, col: number) => {
    let player = this.state.player;
    player = player === "player 1" ? "player 2" : "player 1";
    let symbol = this.getSymbol(row, col);
    let board = this.state.board;
    // update board with the correct symbol;
    board[row][col] = symbol;
    this.setState(
      {
        player: player,
        board: board,
      },
      () => {
        // Post setState call back.
        let gameOver = this.checkGameOver(row, col);
        console.log("gameOver", gameOver);

        if (gameOver) {
          this.setState(
            {
              gameOver: gameOver,
            },
            () => {
              //alert("GAME OVER !");
              console.log("Game Over");
            }
          );
          // console.log(this.state.player);
          return;
        }
      }
    );

    // Game is not over.
    console.log("game is not over");
  };
  checkGameOver = (row: number, col: number): boolean => {
    let gameOver: boolean = false;
    console.log(
      this.state.board[0][0],
      this.state.board[0][1],
      this.state.board[0][2]
    );
    if (
      this.state.board[0][0] === this.state.board[0][1] &&
      this.state.board[0][1] === this.state.board[0][2] &&
      this.state.board[0][0] !== ""
    ) {
      gameOver = true;
    }
    return gameOver;
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
          <h2>
            {this.state.gameOver && (
              <div>
                Game Over ! Refresh to play next Game.{this.state.gameOver}
              </div>
            )}
          </h2>
          <h2>
            {this.state.gameOver === false && (
              <div>Now Playing {this.state.player}</div>
            )}
          </h2>
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
                    onPlayerChange={this.onSquareClicked}
                  />
                </td>
                <td>
                  <Square
                    symbol={this.state.board[0][1]}
                    row={0}
                    col={1}
                    player={this.state.player}
                    onPlayerChange={this.onSquareClicked}
                  />
                </td>
                <td>
                  <Square
                    row={0}
                    col={2}
                    symbol={this.state.board[0][2]}
                    player={this.state.player}
                    onPlayerChange={this.onSquareClicked}
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
                    onPlayerChange={this.onSquareClicked}
                  />
                </td>
                <td>
                  <Square
                    row={1}
                    col={1}
                    symbol={this.state.board[1][1]}
                    player={this.state.player}
                    onPlayerChange={this.onSquareClicked}
                  />
                </td>
                <td>
                  <Square
                    row={1}
                    col={2}
                    symbol={this.state.board[1][2]}
                    player={this.state.player}
                    onPlayerChange={this.onSquareClicked}
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
                    onPlayerChange={this.onSquareClicked}
                  />
                </td>
                <td>
                  <Square
                    row={2}
                    col={1}
                    symbol={this.state.board[2][1]}
                    player={this.state.player}
                    onPlayerChange={this.onSquareClicked}
                  />
                </td>
                <td>
                  <Square
                    row={2}
                    col={2}
                    symbol={this.state.board[2][2]}
                    player={this.state.player}
                    onPlayerChange={this.onSquareClicked}
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
