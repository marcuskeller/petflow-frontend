export interface UserModel {
  username: string;
  email: string;
  password?: string;
  confirm_password?: string;
}

export interface UserResponse {
  id: string;
  message: string;
  token?: string;
}
