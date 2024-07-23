import {
  DefaultTheme as RNPDefaultTheme,
  MD3DarkTheme as RNPDarkTheme,
  useTheme,
} from 'react-native-paper';

export const DefaultTheme = {
  myOwnProperty: true,
  ...RNPDefaultTheme,
  roundness: 2,
  colors: {
    ...RNPDefaultTheme.colors,
  },
};

export const DarkTheme: AppTheme = {
  myOwnProperty: true,
  ...RNPDarkTheme,
  roundness: 2,
  colors: {
    ...RNPDarkTheme.colors,
  },
};

export type AppTheme = typeof DefaultTheme;

export const useAppTheme = () => useTheme<AppTheme>();
