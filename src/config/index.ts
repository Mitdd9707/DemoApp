import Config from 'react-native-config';
import defaultTheme from '../themes/default';
import whiteLabelTheme from '../themes/whiteLabel';

export const Theme =
  Config.THEME === 'whiteLabel' ? whiteLabelTheme : defaultTheme;

export default {
  baseUrl: Config.BASE_URL,
  appName: Config.APP_NAME,
  logoUrl: Config.LOGO_URL,
  Theme,
};
