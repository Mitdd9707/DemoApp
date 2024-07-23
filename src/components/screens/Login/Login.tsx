import React, {useState} from 'react';
import ScreenTemplate from '@templates/ScreenTemplate/ScreenTemplate';
import {Spacer} from '@atoms/common/common.styles';
import LoginForm from '@organisms/LoginForm/LoginForm';
import {useAuthNavigation} from '@navigation/hooks';
import {LoginFormData} from './Login.props';
import {Container, LogoView, Welcometext} from './Login.styles';
import Config from 'react-native-config';
import {Image} from 'react-native';

const Login = () => {
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
        <LogoView source={{uri: Config.LOGO_URL}} resizeMode="cover" />
        <Spacer size={20} />
        <Welcometext>{Config.APP_NAME}</Welcometext>
        <Spacer size={50} />
        <LoginForm onSubmit={onLoginPress} isloading={loading} />
      </Container>
    </ScreenTemplate>
  );
};

export default Login;
