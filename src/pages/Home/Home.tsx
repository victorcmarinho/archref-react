import React from 'react';

import { Proxy } from 'components/Proxy';
import { useTheme } from 'hooks/ThemeContext';

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

      <h1>BFF - Proxy</h1>

      <Proxy />
    </Container>
  );
};

export default Home;
