# slice-02 (infra)

## Goal
Add Prisma persistence primitives for authentication (password hash and refresh token lifecycle).

## Touched paths
- `apps/api/prisma/schema.prisma`
- `apps/api/prisma/migrations/**`
- `apps/api/src/features/auth/infrastructure/**`
- `apps/api/src/features/users/infrastructure/**`

## Risk level
Medium

## Tests
- `npm run api:prisma:generate`
- `npm run api:prisma:migrate`
- Repository adapter integration tests against local postgres.

## Rollback strategy
- Rollback migration with paired down migration script.
- Keep schema additive to minimize rollback impact.

## PR checklist
- [ ] Extend `User` model and add `RefreshToken` model.
- [ ] Add indexes and relations.
- [ ] Add repository interfaces + Prisma implementations.
- [ ] Validate migration on local docker postgres.
