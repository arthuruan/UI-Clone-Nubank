import React from 'react';

import {
  Container,
  SafeAreaContainer,
  ContentContainer,
  Title,
  ContainerButtons,
  RoundedButton,
  NoEyeIcon,
  SettingsIcon,
} from './styles';

interface MyProps {
  title: string;
}

const Header: React.FC<MyProps> = ({ title }) => {
  return (
    <Container>
      <SafeAreaContainer>
        <ContentContainer>
          <Title>{title}</Title>
          <ContainerButtons>
            <RoundedButton>
              <NoEyeIcon />
            </RoundedButton>
            <RoundedButton>
              <SettingsIcon />
            </RoundedButton>
          </ContainerButtons>
        </ContentContainer>
      </SafeAreaContainer>
    </Container>
  );
};

export default Header;
