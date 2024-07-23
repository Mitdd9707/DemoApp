import Text from '@atoms/Text/Text';
import {styled} from '@utils/styled';
import {Image, View} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
`;

export const LogoView = styled(Image)`
  height: 150px;
  width: 150px;
  border-radius: ${150 / 2}px;
`;

export const Welcometext = styled(Text)`
  font-size: 30px;
  align-items: center;
`;
