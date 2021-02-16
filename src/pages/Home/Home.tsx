import React from 'react';

import { useTheme } from '~/hooks/ThemeContext';

import { Container, Header } from './styles';

const Home: React.FC = () => {
  const {
    toggle,
    themeState: { mode },
  } = useTheme();
  return (
    <Container>
      <Header>
        <input
          data-testid="input"
          type="checkbox"
          onClick={() => toggle()}
          defaultValue={mode}
          alt={mode}
        />
        {mode}
      </Header>
      <h1>Reference Architecture - ReactJS</h1>
      <p>A ReactJS + TypeScript structure.</p>
    </Container>
  );
};

export default Home;
