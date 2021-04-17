import { AxiosResponse } from 'axios';
import { api } from 'configs/axios.config';

export const GetExample = (): Promise<AxiosResponse<string>> => {
  return api.get<string>('');
};
