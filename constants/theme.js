import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // app dimensions
  width,
  height,
};

const appTheme = { COLORS, SIZES };

export default appTheme;
