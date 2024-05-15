import { Post } from '@/utils/api';

export const loginApi = (contents) => Post('/auth/login', contents);
