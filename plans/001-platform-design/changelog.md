# Platform Design Changelog

## 2026-06-06 - Baseline Architecture Scaffolding
- Slice: planning-bootstrap
- Summary: Created monorepo scaffolding, architecture documentation, CI/CD workflow stubs, local Postgres Docker Compose file, and agent skill definitions.
- Compatibility: backward-compatible
- Validation: file structure and content verification
- Follow-ups: initialize package manager workspace and scaffold Nest + Expo applications.

## 2026-06-06 - Step 1 App Scaffolding
- Slice: app-scaffold
- Summary: Scaffolded NestJS API at `apps/api` and Expo TypeScript mobile app at `apps/mobile`, then configured root npm workspaces and app run/build scripts.
- Compatibility: backward-compatible
- Validation: scaffold generators completed successfully
- Follow-ups: align local Node runtime to >=20.19.4 (prefer 22 via .nvmrc), migrate to a single root lockfile, and add shared tooling scripts for lint/test/typecheck/generate.

## 2026-06-06 - Platform Baseline Wiring
- Slice: baseline-wiring
- Summary: Added root lint/test/typecheck/generate scripts, API Prisma scaffold (schema, module, service, env example), Swagger + validation bootstrap, and mobile Baylor light/dark theming with React Query provider.
- Compatibility: backward-compatible
- Validation: dependency install and workspace script validation
- Follow-ups: run first Prisma migration after Node upgrade, then add first vertical slice endpoint with Request-Handler-Response classes.

## 2026-06-06 - Runtime Upgrade to Node 22 + Prisma 7
- Slice: runtime-upgrade
- Summary: Switched terminal/runtime to Node 22 via `nvm use 22`, updated workspace engine baseline to Node 22, and upgraded API Prisma dependencies to v7.
- Compatibility: backward-compatible
- Validation: install, Prisma client generation, API build, and workspace typecheck
- Follow-ups: create first migration and apply to local PostgreSQL.

## 2026-06-06 - Remove npm Workspaces Dependency
- Slice: tooling-simplification
- Summary: Removed npm workspaces from root package configuration and replaced root scripts with direct `cd apps/...` script execution.
- Compatibility: backward-compatible
- Validation: root api build/start scripts run from app directory context
- Follow-ups: maintain independent dependency installs for `apps/api` and `apps/mobile`.
