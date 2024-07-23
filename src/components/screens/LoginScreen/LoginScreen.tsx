import React, {useState} from 'react';
import ScreenTemplate from '@templates/ScreenTemplate/ScreenTemplate';
import {Spacer} from '@atoms/common/common.styles';
import LoginForm from '@organisms/LoginForm/LoginForm';
import {useAuthNavigation} from '@navigation/hooks';
import {LoginFormData} from './LoginScreen.props';
import {Container, Welcometext} from './LoginScreen.styles';
import Config from 'react-native-config';

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useAuthNavigation();

  const onLoginPress = async (values: LoginFormData) => {
    setLoading(true);
    try {
      await fetch(Config.BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: values.username,
          password: values.password,
          expiresInMins: 60,
        }),
      })
        .then(res => res.json())
        .then(respone => {
          navigation.navigate('Home', {param: respone});
          setLoading(false);
        })
        .catch(error => {
          console.log('Error:', error);
          setLoading(false);
        });
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
    }
  };

  return (
    <ScreenTemplate>
      <Container>
        <Spacer size={50} />
        <Welcometext>Welcome {Config.APP_NAME}</Welcometext>
        <Spacer size={50} />
        <LoginForm onSubmit={onLoginPress} isloading={loading} />
      </Container>
    </ScreenTemplate>
  );
};

export default LoginScreen;
