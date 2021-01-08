export enum UserRole {
  BUYER = 'BUYER',
  SELLER = 'SELLER',
}

export interface Credentials {
  email: string;
  password: string;
}

export interface RegisterData {
  credentials: Credentials;
  name: string;
  sureName: string;
  telephoneNumber: string;
  userRole: UserRole;
}
