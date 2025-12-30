# Mini API SaaS – BEYIMA

## Description
API REST simulant une brique d’une plateforme SaaS multi-tenant :
- Authentification JWT
- Gestion des organisations (tenants)
- Gestion des utilisateurs
- Gestion de projets / transactions
- Isolation logique par organisation
- Stockage en mémoire (simple pour test technique)
- Validation et gestion des erreurs

## Stack
- NestJS
- TypeScript
- JWT pour Auth
- bcrypt pour hash des mots de passe
- UUID pour identifiants

## Installation
```bash
git clone <repo-url>
cd beyima-saas-api
npm install
npm run start:dev


## Endpoints

****Auth

POST /auth/login
Body: { "email": "admin@beyima.com", "password": "password" }
→ Retourne access_token JWT


***Organizations

POST /organizations { "name": "OrgName" }

GET /organizations

Users (protégé JWT)

POST /users { "email": "...", "password": "..." }

GET /users


****Projects (protégé JWT)

POST /projects { "name": "ProjectName" }

GET /projects

Test rapide

Login → récupère JWT

Ajouter Header Authorization: Bearer <token> pour /users et /projects

Vérifier isolation multi-tenant

Notes

Toutes les données sont en mémoire (recréées à chaque redémarrage)

On peut remplace par DB (PostgreSQL, MongoDB, etc.)