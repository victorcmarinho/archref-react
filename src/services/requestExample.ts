import { AxiosResponse } from 'axios';
import { api } from 'configs/axios.config';

export const getExample = (): Promise<AxiosResponse<string>> => {
  return api.get<string>('');
};
