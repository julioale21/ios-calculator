import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, globalStyles} from '../../config/themes/app-theme';
import {CalculatorButton} from '../components';
import {useCalculator} from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    formula,
    previousNumber,
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    calculateResult,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={styles.resultContainer}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.mainResult}>
          {formula}
        </Text>

        {formula === previousNumber ? (
          <Text style={globalStyles.subResult}> </Text>
        ) : (
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={globalStyles.subResult}>
            {previousNumber}
          </Text>
        )}
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={clean}
          blackText
          label="C"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={toggleSign}
          blackText
          label="+/-"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={deleteOperation}
          blackText
          label="del"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={divideOperation}
          label="÷"
          color={colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPress={multiplyOperation}
          label="x"
          color={colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" />
        <CalculatorButton
          onPress={substractOperation}
          label="-"
          color={colors.orange}
        />
      </View>

      <View style={[globalStyles.row]}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPress={addOperation}
          label="+"
          color={colors.orange}
        />
      </View>

      <View style={[globalStyles.row, styles.lastRow]}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          doubleSize
        />
        <CalculatorButton onPress={() => buildNumber('.')} label="." />
        <CalculatorButton
          onPress={calculateResult}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  lastRow: {
    paddingLeft: 20,
  },
});

export default CalculatorScreen;
