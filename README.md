# Local Setup

## Prerequisites
- Node 22
- Docker Desktop

If you use nvm:

```bash
nvm use 22
```

## 1) Install dependencies
Install API and mobile dependencies:

```bash
npm run api:install
npm run mobile:install
```

## 2) Start local PostgreSQL

```bash
docker compose -f infra/docker/docker-compose.yml up -d
```

## 3) Configure API environment

```bash
cp apps/api/.env.example apps/api/.env
```

## 4) Generate Prisma client

```bash
npm run api:prisma:generate
```

## 5) Run API

```bash
npm run api:start
```

API runs at http://localhost:3000
Swagger runs at http://localhost:3000/api/docs

## 6) Run mobile app (new terminal)

```bash
npm run mobile:start
```

Press `i`, `a`, or `w` in Expo terminal for iOS, Android, or web.
