import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/api';

export const useGetUsersQuery = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });
};
