import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { LoginRequest } from 'src/shared/types';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  postLogin(@Body() data: LoginRequest) {
    return this.authService.login(data);
  }

  @Get('profile')
  getProfile(@Headers('Authorization') token: string) {
    return this.authService.getProfile(token);
  }
}
