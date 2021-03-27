import { ms } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const TitleHeader = styled.Text`
  color: ${({ theme }) => theme.colors.textColors.white};
  font-size: ${ms(24)}px;
  line-height: ${ms(30)}px;
  font-weight: bold;
`;
