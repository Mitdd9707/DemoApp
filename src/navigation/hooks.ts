import {useNavigation} from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

export type AuthStackParamList = {
  Login: undefined;
  Home: undefined;
};

export type AuthStackNavigationProps = StackNavigationProp<AuthStackParamList>;
export const useAuthNavigation = () =>
  useNavigation<AuthStackNavigationProps>();
export const AuthStack = createStackNavigator<AuthStackParamList>();
