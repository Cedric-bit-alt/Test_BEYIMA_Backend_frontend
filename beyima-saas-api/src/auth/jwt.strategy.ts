import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'SECRET_KEY', // tu peux mettre process.env.JWT_SECRET
    });
  }

  async validate(payload: any) {
    // ce payload sera accessible dans @Request() user
    return { userId: payload.sub, organizationId: payload.organizationId };
  }
}
