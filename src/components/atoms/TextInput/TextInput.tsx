import React, {forwardRef} from 'react';
import {TextInput as RNTextInput} from 'react-native-paper';
import {CustomTextInputProps} from './TextInput.props';
import {LabelText} from './TextInput.styles';

const TextInput = forwardRef<typeof RNTextInput, CustomTextInputProps>(
  ({label, ...props}) => {
    return (
      <>
        {!!label && <LabelText>{label}</LabelText>}
        <RNTextInput
          mode="outlined"
          enterKeyHint="done"
          autoCorrect={false}
          autoCapitalize="none"
          theme={{
            roundness: 6,
            colors: {
              primary: 'gray',
            },
          }}
          {...props}
          secureTextEntry={props?.secureTextEntry}
        />
      </>
    );
  },
);

export default TextInput;
