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
        <h2> Now Playing</h2>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <Square value={0} symbol={""} player={""} />
                </td>
                <td>
                  <Square value={1} symbol={""} player={""} />
                </td>
                <td>
                  <Square value={2} symbol={""} player={""} />
                </td>
              </tr>
              <tr>
                <td>
                  <Square value={3} symbol={""} player={""} />
                </td>
                <td>
                  <Square value={4} symbol={""} player={""} />
                </td>
                <td>
                  <Square value={5} symbol={""} player={""} />
                </td>
              </tr>
              <tr>
                <td>
                  <Square value={6} symbol={""} player={""} />
                </td>
                <td>
                  <Square value={7}symbol={""} player={""} />
                </td>
                <td>
                  <Square value={8}symbol={""} player={""} />
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
