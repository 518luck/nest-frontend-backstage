import { useQuery } from '@tanstack/react-query';
import { message } from 'antd';
import { getUsers } from '@/api';

export const useGetUsersQuery = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
    onSuccess: (data) => {
      // 请求成功回调
      message.success(`获取用户成功，共 ${data.length} 条`);
    },
  });
};
