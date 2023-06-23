export type Credentials = {
  email: string;
  password: string;
};

export type Role = 'admin' | 'user';

export type UserCred = {
  name: string;
  nickname: string;
  role: Role;
  id: string;
};
