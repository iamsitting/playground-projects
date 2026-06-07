# slice-06 (contract)

## Goal
Publish stable API contracts for auth/user endpoints and regenerate Orval client artifacts.

## Touched paths
- `apps/api/src/main.ts` (swagger config as needed)
- `packages/contracts/**`
- `packages/client-sdk/**`
- generation scripts/config files

## Risk level
Low

## Tests
- Validate generated OpenAPI spec includes auth schemas/security.
- Typecheck generated SDK.
- Smoke call typings for register/login/me methods.

## Rollback strategy
- Revert generated artifacts and config changes.
- Keep runtime API behavior unchanged.

## PR checklist
- [ ] Ensure OpenAPI contains endpoint and error schemas.
- [ ] Export spec artifact to contracts package.
- [ ] Regenerate Orval SDK.
- [ ] Verify compile and lint for generated client.
