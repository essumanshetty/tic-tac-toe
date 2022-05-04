import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import styled from "styled-components";

const Button = styled.button`
  outline: 0;
  border: 0;
  padding: 10px;
  background-color: orange;
  margin-top: 20px;
  border-radius: 6px;
`;

function App() {
  const [initialState, setInitialState] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [count, setCount] = useState(0);

  function getWinner(squares = initialState) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  
  useEffect(() => {
    const winner = getWinner();
    if (winner) {
      alert(` Hip Hip Hurray ${winner} has won the game`);
      resetGame();
    }
    if (!winner && count === 9) {
      alert("No one has won the game");
      resetGame();
    }
  }, [initialState, count]);

  const [isXRound, setIsXRound] = useState(true);

  const clickHandler = (index) => {
    let temp = [...initialState];
    temp[index] = isXRound ? "X" : "O";
    setInitialState(temp);
    setIsXRound(!isXRound);
    setCount((prevState) => prevState + 1);
  };

  function resetGame() {
    setInitialState(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
  }
  return (
    <div className="App">
      <h2> Tic Tac Toe</h2>

      <div className="container">
        {initialState.map((state, index) => (
          <Card
            key={index}
            state={state}
            index={index}
            clickHandler={clickHandler}
          />
        ))}
      </div>
      <Button onClick={resetGame}>Reset Game</Button>
    </div>
  );
}

export default App;
