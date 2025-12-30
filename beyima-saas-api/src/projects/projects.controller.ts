import { Controller, Get, Body, Post, UseGuards, Request, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private projectService: ProjectsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Request() req, @Body() body: { name: string }) {
    // Isolation multi-tenant
    return this.projectService.create(body.name, req.user.organizationId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req): any { // <- ici 'any' évite l'erreur surtout si tu ne veux pas exposer directement ton type Project depuis le service
    return this.projectService.findAll(req.user.organizationId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }
}

//Isolation multi-tenant : chaque user ne voit que les projets de son organisation