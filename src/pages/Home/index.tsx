import React from 'react';

import { Header } from '../../components';
import { usePageHeader } from '../../hooks';
import { Strings } from './strings';
import { Container } from './styles';

const Home: React.FC = () => {
  usePageHeader(() => <Header title={`${Strings.HELLO} ${Strings.MY_NAME}`} />);

  return <Container />;
};

export default Home;
