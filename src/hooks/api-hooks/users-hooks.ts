import { useQuery } from 'react-query';

import { getUsers } from '@/api';

export const useGetUsersQuery = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });
};
