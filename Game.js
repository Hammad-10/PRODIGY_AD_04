import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import Board from './Board';


const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState('X');
  const [winningPattern, setWinningPattern] = useState(null);
  const [winner, setWinner] = useState('A');
  const [winningline, setWinningLine] = useState('');



  useEffect(() => {
    const winner = calculateWinner(squares);
    setWinner(winner);
    
    if (winner) {
      setStatus('Winner: ' + winner);
      setWinningPattern(getWinningPattern(squares, winner));
     
    } else {
      setStatus(xIsNext ? 'X' : 'O');
      setWinningPattern(null);
    }
  }, [squares, xIsNext]);

  useEffect(()=>{
    WinningLineF();
  }, [winner])

  const WinningLineF = ()=>{
    if(winner === 'X'){
      setWinningLine('Player 1 Won')
    }
    else if(winner === 'O'){
      setWinningLine('Player 2 Won')
    }

  }

  const handleClick = (index) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[index]) {
      return;
    }
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinningPattern(null);
    setWinningLine('')
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./OIP.jpg')}
        style={styles.imageBackground}
        resizeMode='stretch'
      >
        <Text style = {{color:'white', fontSize:28, fontWeight:'bold', top:-60}}>{winningline}</Text>
        <View style={styles.playerturns}>
          {/* Player turns status */}
          <View style={styles.player}>
            <Text style={{ color: status === 'X' ? 'yellow' : 'rgb(128, 0, 128)', fontWeight: 'bold' }}>Player 1</Text>
            <Text style={{ marginBottom: 10, fontSize: 20, color: status === 'X' ? 'yellow' : 'rgb(128, 0, 128)', fontWeight: 'bold' }}>X</Text>
          </View>
          <View>
            <Text style={{ fontSize: 40, color: 'yellow' }}>OXO</Text>
          </View>
          <View style={styles.player}>
            <Text style={{ color: status === 'O' ? 'yellow' : 'rgb(128, 0, 128)', fontWeight: 'bold' }}>Player 2</Text>
            <Text style={{ marginBottom: 10, fontSize: 20, color: status === 'O' ? 'yellow' : 'rgb(128, 0, 128)', fontWeight: 'bold' }}>O</Text>
          </View>
        </View>
        {/* Game board */}
        <Board squares={squares} onPress={handleClick} winningPattern={winningPattern} />
        {/* Reset button */}
        <TouchableOpacity onPress={resetGame} style={styles.resetbtn}>
          <Text style = {{color:'black', fontWeight:'bold', fontSize:24}}> Reset Game   </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], // Horizontal lines
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Vertical lines
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonal lines
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

const getWinningPattern = (squares, winner) => {
  const lines = [
    [0, 1, 2], // Horizontal lines
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Vertical lines
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonal lines
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] === winner && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerturns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'yellow',
    width: '80%',
    marginBottom: 10,
    borderRadius: 30,
    padding: 12
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  player: {
    alignItems: 'center'
  },
  resetbtn:{
    backgroundColor:'yellow',
    marginTop:60,
    borderRadius:20,
    padding:10
  }
});

export default Game;
