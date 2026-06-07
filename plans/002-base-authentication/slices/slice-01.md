# slice-01 (scaffold)

## Goal
Establish auth/users vertical slice scaffolding and shared auth typing surface so subsequent behavior PRs are mergeable without hidden prerequisites.

## Touched paths
- `apps/api/src/features/auth/**`
- `apps/api/src/features/users/**`
- `apps/api/src/api/**`
- `apps/api/src/types/**`

## Risk level
Low

## Tests
- `npm run api:build`
- `npm run typecheck`
- Minimal smoke unit tests for module/controller compilation.

## Rollback strategy
- Revert scaffold-only files and module registrations.
- No data migrations in this slice.

## PR checklist
- [ ] Add feature directories with placeholder files.
- [ ] Add shared enums/constants/types for auth errors and token metadata.
- [ ] Register feature modules in API composition layer.
- [ ] Ensure compile/typecheck green.
