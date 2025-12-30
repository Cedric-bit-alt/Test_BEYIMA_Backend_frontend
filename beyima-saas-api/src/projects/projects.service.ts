import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';


export interface Project {
  id: string;
  name: string;
  organizationId: string; 
}


@Injectable()
export class ProjectsService {
  private projects: Project[] = [];

   // Créer projet dans une org
  create(name: string, organizationId: string) {
    const project = { id: uuidv4(), name, organizationId };
    this.projects.push(project);
    return project;
  }

  // Lister projets d'une org
  findAll(organizationId: string) {
    return this.projects.filter(p => p.organizationId === organizationId);
  }


   // Trouver un projet par ID
  findOne(id: string) {
  const project = this.projects.find(p => p.id === id);

  if (!project) {
    throw new NotFoundException('Project not found');
  }

  return project;
  }
}
