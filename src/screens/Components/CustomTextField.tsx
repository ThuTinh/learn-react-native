import React, {FC} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

type CustomTextFieldProps = {
  error?: string;
} & Partial<TextInputProps>;

export const CustomTextField: FC<CustomTextFieldProps> = ({
  error,
  ...orthers
}) => {
  console.log(error);
  return (
    <View style={styles.root}>
      <TextInput style={styles.input} {...orthers} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginVertical: 12,
    width: '100%',
  },
  input: {
    height: 45,
    padding: 10,
    borderColor: '#e8e8e8',
    borderRadius: 4,
    borderWidth: 1,
  },
  error: {
    marginTop: 4,
    color: 'red',
    fontSize: 10,
    fontWeight: '500',
  },
});
