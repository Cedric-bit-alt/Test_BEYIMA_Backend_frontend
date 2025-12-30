import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { User } from './user.model';
import * as bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      email: 'admin@beyima.com',
      password: bcrypt.hashSync('password', 10),
      organizationId: 'org1',
    },
  ];

  // Créer un utilisateur
  async create(email: string, password: string, organizationId: string) {
    const exists = this.users.find(u => u.email === email && u.organizationId === organizationId);
    if (exists) throw new BadRequestException('User already exists');

    const hash = await bcrypt.hash(password, 10);
    const user = { id: uuidv4(), email, password: hash, organizationId };
    this.users.push(user);
    return { id: user.id, email: user.email, organizationId: user.organizationId };
  }

  // Chercher un utilisateur par email
  async findByEmail(email: string) {
    return this.users.find(u => u.email === email);
  }

  // Lister tous les utilisateurs d'une organisation
  findByOrganization(organizationId: string) {
    return this.users
      .filter(u => u.organizationId === organizationId)
      .map(u => ({ id: u.id, email: u.email }));
  }
}
