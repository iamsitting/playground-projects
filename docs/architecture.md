# Platform Architecture

## Scope
This document turns `plans/001-platform-design/requirements.md` into an implementation baseline.

In scope:
- Local and production environments.
- API backend, mobile app, shared contracts, and generated client SDK.
- CI/CD and deployment to Render.

Out of scope:
- Publishing mobile apps to stores.
- Mobile push notification setup.

## Architecture Decisions
- Monorepo layout with apps and packages.
- Backend: NestJS + TypeScript + Prisma ORM + PostgreSQL.
- Frontend: Expo React Native + TanStack Query.
- API integration: OpenAPI generated from backend + Orval client generation.
- Patterns: CQRS + event-driven internals + vertical slice per feature.
- Auth: Passport in backend.

Note: backend framework is confirmed as NestJS.

## Repository Layout
- `apps/api`: NestJS backend.
- `apps/mobile`: Expo React Native app.
- `packages/contracts`: OpenAPI and schema artifacts.
- `packages/client-sdk`: Orval-generated SDK.
- `infra/docker`: local Docker assets.
- `.github/workflows`: CI/CD automation.
- `.agents/skills`: agent skills for design, planning, and implementation.

## Environment Strategy

### Local
- PostgreSQL via Docker Compose.
- Backend reads local DB URL and runs Prisma migrations.
- Mobile app points to local API base URL.

### Production
- PostgreSQL via Neon.
- Backend deployed to Render.
- Secrets managed as Render environment variables and GitHub Actions secrets.

## Backend Conventions

### Vertical Slice
Each feature lives under:
- `apps/api/src/features/<feature-name>/api`
- `apps/api/src/features/<feature-name>/application`
- `apps/api/src/features/<feature-name>/domain`
- `apps/api/src/features/<feature-name>/infrastructure`

### Request-Handler-Response
For each endpoint:
- `request` class: request shape + Nest validation decorators + OpenAPI decorators.
- `handler` class: business logic, independent of transport/request object.
- `response` class: output schema + OpenAPI decorators.

### Cross-Cutting
- `apps/api/src/infrastructure`: logging, auth strategies, adapters, and external services.
- `apps/api/src/types`: shared types, enums, and constants.
- `apps/api/src/api`: route/controller composition layer.

## CQRS and Events
- Commands mutate state through command handlers.
- Queries read optimized projections via query handlers.
- Domain events emitted from command-side operations.
- Event handlers update projections, trigger side effects, and decouple integrations.

## API Contracts and Client Generation
- Swagger/OpenAPI from Nest endpoint decorators.
- Contract output stored/versioned in `packages/contracts`.
- Orval generates typed API client in `packages/client-sdk`.
- Mobile app consumes generated SDK with TanStack Query wrappers.

## Theming
- Baylor-inspired palette:
  - Green: `#154734`
  - Yellow: `#FFB81C`
- Support both light and dark themes in Expo.

## Delivery Pipeline
- CI workflow:
  - install dependencies
  - lint
  - test
  - typecheck
  - build
  - generate OpenAPI + Orval client
- CD workflow:
  - deploy backend to Render on main branch
  - run post-deploy health check

## Initial Milestones
1. Scaffold monorepo tooling and baseline apps.
2. Add auth slice with Passport and one protected endpoint.
3. Add first business feature using Request-Handler-Response.
4. Wire Swagger to Orval generation and consume from mobile app.
5. Enable CI and Render deployment.

## Changelog Process
Plan-level progress and implementation notes should be written in:
- `plans/001-platform-design/changelog.md`

Each entry should include:
- date
- feature slice name
- PR link or commit
- compatibility note
- follow-up tasks
