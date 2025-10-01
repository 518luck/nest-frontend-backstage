import { Table } from 'antd';

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
  return (
    <div>
      <Table columns={columns} dataSource={[]} />
    </div>
  );
};
export default NormalUser;
