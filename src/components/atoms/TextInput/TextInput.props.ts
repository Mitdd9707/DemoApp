import {TextInput as RNTextInput, TextInputProps} from 'react-native-paper';

export type CustomTextInputProps = React.ComponentProps<typeof RNTextInput> &
  TextInputProps;
