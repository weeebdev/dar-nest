export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterRequest {
  firstname: string;
  lastname: string;
  avatar: string;
  username: string;
  password: string;
}
