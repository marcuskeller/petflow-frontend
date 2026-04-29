export interface UserModel {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface UserResponse {
  id: string;
  message: string;
  token?: string;
}
