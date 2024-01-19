import React, { useState } from 'react';
import './TicTacToe.css'; // Import the CSS file

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [winner, setWinner] = useState(null);

  const calculateWinner = (squares) => {
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  const handleClick = (i) => {
    if (winner || board[i]) {
      return;
    }

    const squares = [...board];
    squares[i] = isXNext ? 'X' : 'O';

    setBoard(squares);
    setIsXNext(!isXNext);

    const currentWinner = calculateWinner(squares);
    if (currentWinner) {
      setWinner(currentWinner);
    } else if (!squares.includes(null)) {
      // It's a draw when there is no winner and no empty squares left
      setWinner('Draw');
    }
  };

  const renderSquare = (i) => (
    <button
      className={`square ${winner && winner !== 'Draw' && board[i] === winner ? 'winner' : ''}`}
      onClick={() => handleClick(i)}
    >
      {board[i]}
    </button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="tic-tac-toe">
      
      <div className="players">
        <label>
          Player 1:
          <input type="text" value={player1} onChange={(e) => setPlayer1(e.target.value)} />
        </label>
        <label>
          Player 2:
          <input type="text" value={player2} onChange={(e) => setPlayer2(e.target.value)} />
        </label>
      </div>
      <div className="status">
        {winner ? (winner === 'Draw' ? 'It\'s a Draw!' : `Winner: ${winner}`) : `Next player: ${isXNext ? player1 || 'X' : player2 || 'O'}`}
      </div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button onClick={resetGame} className="reset-button">
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
