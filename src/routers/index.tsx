import ToggleTheme from 'pages/ToggleTheme';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={ToggleTheme} />
    </Switch>
);

export default Routes;
