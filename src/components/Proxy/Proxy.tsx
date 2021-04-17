import React, { memo, useEffect, useState } from 'react';

import { getExample } from 'services/requestExample';

import { IGitHubUsers } from './interfaces';
import { GitList } from './styles';

export const Proxy: React.FC = memo(() => {
  const [userList, setUserList] = useState<IGitHubUsers[]>([]);

  useEffect(() => {
    const request = async () => {
      const response = await getExample();
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
