import { api } from '@/utils';
import type { UserList } from '@/types';

export const getUsers = async (): Promise<UserList> => {
  const res = await api.get('/users');
  return res.data;
};
