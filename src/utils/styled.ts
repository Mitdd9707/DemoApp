import {ThemedStyledInterface} from 'styled-components/index';
import baseStyled from 'styled-components/native';
import Theme from '../config/index';

export const styled = baseStyled as unknown as ThemedStyledInterface<
  typeof Theme
>;
