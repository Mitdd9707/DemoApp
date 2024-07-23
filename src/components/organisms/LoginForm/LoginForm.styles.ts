import {View} from 'react-native';
import TextInput from '@atoms/TextInput/TextInput';
import Text from '@atoms/Text/Text';
import {styled} from '@utils/styled';

export const LoginFormContainer = styled(View)`
  margin-top: 36px;
  background-color: ${({theme}: any) => theme.backgroundColor};

  width: 80%;
`;

export const ErrorText = styled(Text)`
  color: red;
  margin-bottom: 10px;
`;

export const TextInputField = styled(TextInput)`
  height: 40px;
  border-color: gray;
  margin-bottom: 10px;
  padding-left: 10px;
`;
