import { api } from '@/utils';

export const getUsers = () => api.get('/users');
