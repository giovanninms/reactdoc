//jogo da velha
import { useState, React   } from "react";

function Square({ value, onSquareClick }) {
  //const [value, setValue] = useState(null)
  return <button className='square' onClick={onSquareClick}>{value}</button>
}

function calcularVencedor(squares) {
  const linhas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < linhas.length; i++) {
    const [a, b, c] = linhas[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function Board({ xIsNext, squares, play }) {

  //const [xIsNext, setXIsNext] = useState(true)
  //const [squares, setSquare] = useState(Array(9).fill(null))

  function Click(i) {
    if (squares[i] || calcularVencedor(squares)) {
      return
    }
    const proxSquare = squares.slice()
    if (xIsNext) {
      proxSquare[i] = "X"
    } else {
      proxSquare[i] = "O"
    }
    play(proxSquare)
  }
  
  const vencedor = calcularVencedor(squares)
  let status
  let empate = []
  for (let i  = 0; i < squares.length; i++) {
    const square = squares[i];
    if (square == null) {
    }else{
      empate.push(true
      )
    }
  }
  if (vencedor) {
    status = "Vencedor: " + vencedor
  }else if(!vencedor && empate.length === 9){
    status =  "Empate"
  } else if (!vencedor) {
    status = "Proximo Jogador: " + (xIsNext ? "X" : "O")
  }
  
  return (
    <>
      <h3>Jogo da velha</h3>
      <div className='status'>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => Click(0)} />
        <Square value={squares[1]} onSquareClick={() => Click(1)} />
        <Square value={squares[2]} onSquareClick={() => Click(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => Click(3)} />
        <Square value={squares[4]} onSquareClick={() => Click(4)} />
        <Square value={squares[5]} onSquareClick={() => Click(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => Click(6)} />
        <Square value={squares[7]} onSquareClick={() => Click(7)} />
        <Square value={squares[8]} onSquareClick={() => Click(8)} />
      </div>
    </>
  )
}

function JogoDaVelha() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [movimentoAtual, setMovimentoAtual] = useState(0)
  const xIsNext = movimentoAtual % 2 === 0
  const currentSquares = history[movimentoAtual]

  function maniPlay(proxSquare) {
    const nextHistory = [...history.slice(0, movimentoAtual + 1), proxSquare]
    setHistory(nextHistory)
    setMovimentoAtual(nextHistory.length - 1)
    // console.log("Maniplay! " + nextHistory[9]) 
    // console.log("CurrenrSquares " + currentSquares[8])
  }

  function irPara(proxMovimento) {
    setMovimentoAtual(proxMovimento)
  }
  let descricao;
  const movimentos = history.map((squares, movimento) => {
    
    if (movimento > 0 ) {
      descricao = "Movimento " + movimento
    }  else if (!Board.vencedor) {
      descricao = "Inicio"
    }

    return (
      <li key={movimento}>
        <button onClick={() => irPara(movimento)}>{descricao}</button>
      </li>
    )
  })

  return (
    <div className="App">
      <div className='game'>
        <div className="board">
          <Board xIsNext={xIsNext} squares={currentSquares} play={maniPlay} />
        </div>
        <div className='game-info'>
          <small>{movimentos}</small>
        </div>
      </div >
    </div>
  )
}

export default JogoDaVelha