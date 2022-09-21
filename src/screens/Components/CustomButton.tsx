import React, {FC} from 'react';
import {Button, ButtonProps, StyleSheet, View} from 'react-native';

type CustomButtonProps = {
  backgroundColor: string;
} & Partial<ButtonProps>;
export const CustomButton: FC<CustomButtonProps> = ({
  backgroundColor,
  title = '',
  ...orthers
}) => {
  return (
    <View style={[styles.button, {backgroundColor}]}>
      <Button {...orthers} title={title!} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    marginVertical: 40,
  },
});
