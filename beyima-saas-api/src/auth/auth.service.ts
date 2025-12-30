import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('User not found');
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid password');
    return user;
  }

  async login(user: any) {
    const payload = { sub: user.id, organizationId: user.organizationId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
