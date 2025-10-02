import { Table } from 'antd';

import { useGetUsersQuery } from '@/hooks/api-hooks';

const columns = [
  {
    title: '姓名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: '注册时间',
    dataIndex: 'createAt',
    key: 'createAt',
  },
];

const NormalUser = () => {
  const { data, isLoading } = useGetUsersQuery();
  const dataList = data?.users || [];
  const total = data?.total || 0;

  return (
    <div>
      <Table columns={columns} dataSource={dataList} loading={isLoading} />
    </div>
  );
};
export default NormalUser;
