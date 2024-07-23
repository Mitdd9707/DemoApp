import Text from '@atoms/Text/Text';
import View from '@atoms/View/View';
import {styled} from '@utils/styled';
import {Image} from 'react-native';

export const HomeContainer = styled(View)`
  flex: 1;
`;

export const AppNameView = styled(View)`
  justify-content: center;
  padding: 20px;
`;

export const LabelText = styled(Text)`
  font-size: 16px;
  font-weight: 700;
  color: #000;
`;

export const TitleText = styled(Text)`
  font-size: 22px;
  font-weight: 700;
  color: red;
`;

export const ImageView = styled(View)`
  height: 150px;
  width: 150px;
  justify-content: center;
  align-self: center;
`;

export const Images = styled(Image)`
  height: 150px;
  width: 150px;
  border-radius: ${150 / 2}px;
`;
