import React from "react";
import "./App.css";
import Square from "./Square";

class App extends React.Component {
  render() {
    return (
      <div className="App-body">
        <div>
          <h1>Tic Tac Toe</h1>
        </div>
        <div>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <Square value={0} symbol={0} player1={"any"}/>
                </td>
                <td>
                  <Square value={1} symbol={0} player1={"any"}/>
                </td>
                <td>
                  <Square value={2} symbol={0} player1={"any"}/>
                </td>
              </tr>
              <tr>
                <td>
                  <Square value={3} symbol={0} player1={"any"}/>
                </td>
                <td>
                  <Square value={4} symbol={0} player1={"any"}/>
                </td>
                <td>
                  <Square value={5} symbol={0} player1={"any"} />
                </td>
              </tr>
              <tr>
                <td>
                  <Square value={6} symbol={0} player1={"any"}/>
                </td>
                <td>
                  <Square value={7} symbol={0} player1={"any"}/>
                </td>
                <td>
                  <Square value={8} symbol={0} player1={"any"}/>
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
