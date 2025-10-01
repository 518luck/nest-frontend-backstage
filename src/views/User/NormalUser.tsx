import { Table } from 'antd';

import { getUsers } from '@/api';
import { useState, useEffect } from 'react';

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
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <Table columns={columns} dataSource={[]} />
    </div>
  );
};
export default NormalUser;
