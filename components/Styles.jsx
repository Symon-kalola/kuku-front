import styled from 'styled-components';
import { View } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
  primary: 'green',
  secondary: 'blue',
};
const { primary, secondary } = Colors;

export default StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: $(statusBarHeight + 10);
  background-color: ${primary};
`;
