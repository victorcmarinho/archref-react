import React from 'react';

import { FormControlLabel, Switch } from '@material-ui/core';

import { useTheme } from '~/hooks/ThemeContext';

import { Container, Header } from './styles';

const Home: React.FC = () => {
  const { toggle, themeState } = useTheme();
  return (
    <Container>
      <Header>
        <FormControlLabel
          control={
            <Switch
              checked={themeState.mode === 'light' ? false : true}
              onChange={() => toggle()}
              name="DarkMode"
            />
          }
          data-testid="toggleButton"
          label="DarkMode"
        />
      </Header>
      <h1>Reference Architecture - ReactJS</h1>
      <p>A ReactJS + TypeScript structure.</p>
    </Container>
  );
};

export default Home;
