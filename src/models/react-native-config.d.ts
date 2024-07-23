declare module 'react-native-config' {
  export interface NativeConfig {
    APP_NAME?: string;
    BASE_URL?: string;
    LOGO_URL?: string;
    THEME?: string;
    AVTAR?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
