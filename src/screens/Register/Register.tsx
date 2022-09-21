import React from 'react';
import {
  View,
  // KeyboardAvoidingView,
  Text,
  // TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {CustomTextField} from '../Components/CustomTextField';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {CustomButton} from '../Components/CustomButton';
export const RegisterScreen = () => {
  const LoginValidateSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .min(2, 'Password too Short!')
      .max(50, 'Password too Long!')
      .required('Password is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text>Login</Text>
        <Formik
          initialValues={{username: '', password: '', email: ''}}
          validateOnMount={true}
          validationSchema={LoginValidateSchema}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View style={styles.form}>
              <CustomTextField
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                placeholder="Username"
                error={errors.username}
              />
              <CustomTextField
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.username}
                placeholder="Email"
                error={errors.email}
              />
              <CustomTextField
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
                error={errors.password}
                secureTextEntry
              />
              <CustomButton
                onPress={handleSubmit}
                title="Login"
                backgroundColor="#A1C298"
                color="#FBF2CF"
              />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 30,
    alignItems: 'center',
  },
  form: {
    width: '100%',
  },
});
