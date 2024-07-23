import React from 'react';
import ScreenTemplate from '@templates/ScreenTemplate/ScreenTemplate';
import {Spacer} from '@atoms/common/common.styles';
import {
  AppNameView,
  HomeContainer,
  Images,
  ImageView,
  LabelText,
} from './Home.styles';
import {TextInputField} from '@organisms/LoginForm/LoginForm.styles';

const Home = (props: {route: {params: any}}) => {
  const params = props.route.params.param;
  console.log('props.route.params', params);

  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderlabelList = (value: any) => {
    return (
      <>
        <TextInputField
          placeholder={value}
          placeholderTextColor={'#000000'}
          value={value}
          editable={false}
        />
        <Spacer size={10} />
      </>
    );
  };

  return (
    <ScreenTemplate>
      <HomeContainer>
        <AppNameView>
          <ImageView>
            <Images source={{uri: params?.image}} resizeMode="contain" />
          </ImageView>
          <LabelText>{'Username'}</LabelText>
          {RenderlabelList(params?.username)}
          <LabelText>{'First Name'}</LabelText>
          {RenderlabelList(params?.firstName)}
          <LabelText>{'Last Name'}</LabelText>
          {RenderlabelList(params?.lastName)}
          <LabelText>{'Email'}</LabelText>
          {RenderlabelList(params?.email)}
        </AppNameView>
      </HomeContainer>
    </ScreenTemplate>
  );
};

export default Home;
