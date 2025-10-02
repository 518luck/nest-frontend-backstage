export interface User {
  id: number;
  username: string;
  password: string;
  gender: '男' | '女';
  age: number;
  description: string;
  createdAt: string;
}

export interface UserList {
  data: User[];
  total: number;
}
