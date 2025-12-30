import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // Créer utilisateur
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() body: { email: string; password: string }, @Request() req) {
    return this.usersService.create(body.email, body.password, req.user.organizationId);
  }

  // Lister utilisateurs
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req) {
    return this.usersService.findByOrganization(req.user.organizationId);
  }
}
