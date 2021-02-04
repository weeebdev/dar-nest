import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginRequest, LoginResponse } from 'src/shared/types';

const users = [
  {
    firstname: 'Adil',
    lastname: 'Akhmetov',
    avatar:
      'https://avatars.githubusercontent.com/u/48881444?s=460&u=a2317274ce4b7c57e3c87e604e55595d65d02a2a&v=4',
    username: 'magzomxzn',
    password: '123',
    token: '12345678',
  },
];
@Injectable()
export class AuthService {
  login(data: LoginRequest): LoginResponse {
    if (!data.password || !data.username) throw new BadRequestException();

    const user = users.find(
      (u) => u.username === data.username && u.password === data.password,
    );

    if (user)
      return {
        token: user.token,
      };

    throw new UnauthorizedException('User not found');
  }

  getProfile(token: string) {
    const user = users.find((u) => u.token === token);

    if (user) {
      return {
        ...user,
        password: '',
      };
    }

    throw new UnauthorizedException('User not found');
  }
}