import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Initial } from '~/pages/Initial';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Initial} />
  </Switch>
);

export default Routes;
