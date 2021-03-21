import React, { memo, useEffect, useState } from 'react';

import axios from 'axios';

import { IGitHubUsers } from './interfaces';
import { GitList } from './styles';

export const Proxy: React.FC = memo(() => {
  const [userList, setUserList] = useState<IGitHubUsers[]>([]);

  useEffect(() => {
    const request = async () => {
      const response = await axios.get<IGitHubUsers[]>('users');
      setUserList(response.data);
    };
    request();
  }, []);

  return (
    <GitList>
      {userList.map((user, index) => (
        <img key={index} src={user.avatar_url} alt={user.login} />
      ))}
    </GitList>
  );
});
