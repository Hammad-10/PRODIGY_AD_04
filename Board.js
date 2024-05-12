import React from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './Square';

const Board = ({ squares, onPress, winningPattern }) => {
  const renderSquare = (row, col) => {
    const index = row * 3 + col;
    const isWinningSquare = winningPattern && winningPattern.includes(index);
    return (
      <Square 
        key={index} 
        value={squares[index]} 
        onPress={() => onPress(index)} 
        isWinning={isWinningSquare}
      />
    );
  };

  return (
    <View style={styles.board}>
      {[0, 1, 2].map(row => (
        <View key={row} style={styles.row}>
          {[0, 1, 2].map(col => (
            renderSquare(row, col)
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    borderWidth: 2,
    borderColor: 'yellow',
  },
  row: {
    flexDirection: 'row',
  },
});

export default Board;
