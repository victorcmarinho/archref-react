import React from 'react';

import { act, render } from '@testing-library/react';
import { AxiosResponse } from 'axios';
import * as ThemeContext from 'hooks/ThemeContext';
import * as resquestFunctions from 'services/requestExample';

import { IGitHubUsers, Type } from './interfaces';
import { Proxy } from './Proxy';

jest.mock('services/requestExample');

describe('<Proxy/>', () => {
  const toggle = jest.fn();
  beforeEach(() => {
    jest.spyOn(ThemeContext, 'useTheme').mockReturnValue({
      toggle,
      themeState: { mode: 'light' },
    });
  });

  it('should render', () => {
    const component = render(<Proxy />);
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    const axiosResponse: AxiosResponse<IGitHubUsers[]> = {
      data: [
        {
          login: 'mojombo',
          id: 1,
          node_id: 'MDQ6VXNlcjE=',
          avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/mojombo',
          html_url: 'https://github.com/mojombo',
          followers_url: 'https://api.github.com/users/mojombo/followers',
          following_url:
            'https://api.github.com/users/mojombo/following{/other_user}',
          gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/mojombo/subscriptions',
          organizations_url: 'https://api.github.com/users/mojombo/orgs',
          repos_url: 'https://api.github.com/users/mojombo/repos',
          events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/mojombo/received_events',
          type: Type.User,
          site_admin: false,
        },
      ],
      config: {},
      headers: {},
      status: 200,
      statusText: '200',
    };

    const promise = new Promise<AxiosResponse<IGitHubUsers[]>>(resolver =>
      resolver(axiosResponse),
    );
    jest.spyOn(resquestFunctions, 'getExample').mockReturnValue(promise);

    act(() => {
      const component = render(<Proxy />);
      expect(component).toBeTruthy();
    });
  });
});
