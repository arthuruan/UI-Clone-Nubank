import { s, mvs } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { BaseText } from '..';

const eyeIcon = require('../../assets/icons/eye.png');
const noEyeIcon = require('../../assets/icons/no-eye.png');
const settingsIcon = require('../../assets/icons/settings.png');

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.purpleColors.purple0};
`;

export const SafeAreaContainer = styled.SafeAreaView`
  margin: 0 ${s(16)}px;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  min-height: ${mvs(100)}px;
`;

export const Title = styled(BaseText.TitleHeader)``;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`;

export const RoundedButton = styled.TouchableOpacity`
  width: ${s(40)}px;
  height: ${s(40)}px;
  border-radius: ${s(40 / 2)}px;
  background-color: ${({ theme }) => theme.colors.purpleColors.purple1};
  margin-left: ${mvs(16)}px;
  align-items: center;
  justify-content: center;
`;

export const EyeIcon = styled.Image.attrs({ source: eyeIcon })``;

export const NoEyeIcon = styled.Image.attrs({ source: noEyeIcon })``;

export const SettingsIcon = styled.Image.attrs({ source: settingsIcon })``;
