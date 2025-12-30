import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [AuthModule, OrganizationsModule, UsersModule, ProjectsModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
