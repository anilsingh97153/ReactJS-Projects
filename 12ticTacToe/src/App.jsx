import { useState } from 'react';
import './App.css'

// 0. Component =>  In React, a component is a piece of reusable code that represents a part of a user interface.
// 1. function => defines a function called Square.
// 2. export => JavaScript keyword makes this function accessible outside of this file.
// 3. keyword => tells other files using your code that it’s the main function in your file.
// 4. React components need to return a single JSX element
// 5. We can use Fragments (<> and </>) to wrap multiple adjacent JSX elements

// 6. useState => React provides a special function called useState that you can call from your component to let it “remember” things. Let’s store the current value of the Square in state, and change it when the Square is clicked.

function Square({ value, onSquareClick }) {
  return (
    <>
      <div
        className="square"
        onClick={onSquareClick}
      >
        {value}
      </div>
    </>
  );
}
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  function handleClick(i) {
    if(squares[i]){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board">
        <div className="borad-row">
          <Square value={squares[0]} onSquareClick={ () => handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={ () => handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={ () => handleClick(2)}/>
        </div>
        <div className="borad-row">
          <Square value={squares[3]} onSquareClick={ () => handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={ () => handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={ () => handleClick(5)}/>
        </div>
        <div className="borad-row">
          <Square value={squares[6]} onSquareClick={ () => handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={ () => handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={ () => handleClick(8)}/>
        </div>
      </div>
    </>
  );
}



