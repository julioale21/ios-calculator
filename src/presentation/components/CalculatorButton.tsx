import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors, globalStyles} from '../../config/themes/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

const CalculatorButton: React.FC<Props> = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        buttonStyles.button,
        {
          backgroundColor: color,
          width: doubleSize ? 160 : 80,
          opacity: pressed ? 0.8 : 1,
        },
      ]}>
      <Text
        style={[
          buttonStyles.buttonText,
          blackText ? buttonStyles.blackText : buttonStyles.whiteText,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
};

const buttonStyles = StyleSheet.create({
  button: {
    ...globalStyles.button,
  },
  buttonText: {
    ...globalStyles.buttonText,
  },
  blackText: {
    color: 'black',
  },
  whiteText: {
    color: 'white',
  },
});
export {CalculatorButton};
