import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
  controllers: [ProjectsController], // ✅ OBLIGATOIRE
  providers: [ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}
