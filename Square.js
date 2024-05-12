import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const Square = ({ value, onPress, isWinning }) => {
  const squareStyle = [styles.square, isWinning && styles.winningSquare];

  return (
    <TouchableOpacity style={squareStyle} onPress={onPress}>
      {isWinning && <View style={styles.winningLine} />}
      <Text style={styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'yellow',
    position: 'relative', // Make the square container relative for positioning the winning line
  },
  winningSquare: {
    backgroundColor: 'rgba(255, 255, 0, 0.5)', // Semi-transparent yellow color for the winning squares
  },
  winningLine: {
    position: 'absolute',
    backgroundColor: 'yellow',
    height: 2, // Set the height of the line
    width: '100%', // Make the line span the entire width of the square
    top: '50%', // Position the line vertically at the center of the square
    left: 0, // Align the line to the left edge of the square
  },
  squareText: {
    fontSize: 40,
    color: 'white',
  },
});

export default Square;
