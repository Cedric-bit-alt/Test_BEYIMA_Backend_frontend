import { Injectable, NotFoundException } from '@nestjs/common';
import { Organization } from './organization.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class OrganizationsService {
  private organizations: Organization[] = [];

  create(name: string): Organization {
    const org = { id: uuidv4(), name };
    this.organizations.push(org);
    return org;
  }

  findAll(): Organization[] {
    return this.organizations;
  }

  findById(id: string): Organization {
    const org = this.organizations.find(o => o.id === id);
    if (!org) throw new NotFoundException('Organization not found');
    return org;
  }
}
