import React from 'react';
import {Container} from './ScreenTemplate.styles';
import {ScreenTemplateProps} from './ScreenTemplate.props';

const ScreenTemplate: React.FC<ScreenTemplateProps> = ({
  children,
  safeAreaProps,
}) => {
  return <Container {...safeAreaProps}>{children}</Container>;
};

export default ScreenTemplate;
