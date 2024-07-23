import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  ErrorText,
  LoginFormContainer,
  TextInputField,
} from './LoginForm.styles';
import Button from '@atoms/Button/Button';

const LoginForm = ({
  onSubmit,
  isloading,
}: {
  onSubmit: (val: any) => void;
  isloading?: boolean;
}) => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
  return (
    <Formik
      initialValues={{username: 'emilys', password: 'emilyspass'}}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <LoginFormContainer>
          <TextInputField
            placeholder="Username"
            placeholderTextColor={'#000000'}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
            label={'Username'}
          />
          {touched.username && errors.username && (
            <ErrorText>{errors.username}</ErrorText>
          )}
          <TextInputField
            placeholder="Password"
            placeholderTextColor={'#000000'}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            label={'Password'}
            value={values.password}
            secureTextEntry
          />
          {touched.password && errors.password && (
            <ErrorText>{errors.password}</ErrorText>
          )}
          <Button loading={isloading} onPress={handleSubmit}>
            Login
          </Button>
        </LoginFormContainer>
      )}
    </Formik>
  );
};

export default LoginForm;
