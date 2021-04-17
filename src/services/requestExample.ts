import { AxiosResponse } from 'axios';
import { IGitHubUsers } from 'components/Proxy/interfaces';
import { api } from 'configs';

export const getExample = (): Promise<AxiosResponse<IGitHubUsers[]>> => {
  return api.get<IGitHubUsers[]>('users');
};
