import { Controller, Get, Post,UseGuards, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(private orgService: OrganizationsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body('name') name: string) {
    return this.orgService.create(name);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.orgService.findAll();
  }
}
