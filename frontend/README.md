# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).



**********Structure du projet


src/
├── api/                # Appels API (axios)
│   ├── auth.js
    ── Dashboard.js
│   ├── projects.js
│   └── organizations.js
│
├── store/              # Pinia stores
│   └── auth.js
    ── projects.js
│
├── pages/              # Pages
│   ├── Login.vue
│   ├── Dashboard.vue
│   ├── ProjectsList.vue
    ── ProjectsDetail.vue
│   └── OrganizationsList.vue
│
├── router/
│   └── index.js
│
├── layouts/
│   └── MainLayout.vue
│
├── App.vue
└── main.js





***********Authentification

Connexion via /auth/login

Token JWT stocké dans Pinia

Token automatiquement injecté dans les headers :

Authorization: Bearer <token>


***************Les routes protégées sont accessibles uniquement après connexion

*************Installation & Lancement
1 Installer les dépendances
npm install

2 Lancer le serveur de développement
npm run dev


*****Application accessible sur :

http://localhost:5173

********* Configuration API

Les appels API pointent vers le backend NestJS :

baseURL: http://localhost:3000


**********S'assurer que :

le backend est lancé

le CORS est activé

le token JWT est valide

 *********Pages disponibles
********** Connexion

URL : /login

Authentification utilisateur

Redirection automatique vers le dashboard

****************Dashboard

Accessible après connexion

Vue globale de l’application

*************** Projets / Transactions

Liste des projets

Création et consultation

Données isolées par organisation (multi-tenant)

***************Organisations

Liste des organisations accessibles à l’utilisateur

Création via backend

Visibilité selon les droits et le tenant

*************** Gestion des états UI

Chaque page gère :

loading

error

empty state

Exemple :

<p v-if="loading">Chargement...</p>
<p v-else-if="error">{{ error }}</p>
<p v-else-if="items.length === 0">Aucun élément</p>

************ Sécurité

Routes protégées par guards côté backend

Token JWT obligatoire pour chaque appel API

Isolation logique des données par organisation

**************** Améliorations possibles

Sélecteur d’organisation

Rôles & permissions

Pagination / recherche

Refresh token

Dark mode

Tests unitaires (Vitest)

************** Auteur

Développé par N’DA Cédric
Frontend Vue.js – Backend NestJS
Projet à vocation pédagogique et professionnelle