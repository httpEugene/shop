import React from 'react';
import {
    StyleSheet,
    PixelRatio
} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
  },
  fieldContainer: {
    display: 'flex',
    margin: 50
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  login: {
      fontSize: 30,
      color: "#333"
  },
  validation: {
      fontSize: 12,
      color: "green"
  },
  error: {
      color: 'red'
  },
  input: {
      fontSize: 30,
      color: "#666",
      borderWidth: 1/PixelRatio.get(),
      borderColor: "#dadada"
  }
});
