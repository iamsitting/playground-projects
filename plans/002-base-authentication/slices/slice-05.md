# slice-05 (behavior)

## Goal
Add JWT-protected current-user query endpoint (`GET /api/users/me`).

## Touched paths
- `apps/api/src/features/users/api/me/**`
- `apps/api/src/features/users/application/queries/get-current-user/**`
- `apps/api/src/infrastructure/auth/jwt/**`
- `apps/api/src/api/**`

## Risk level
Medium

## Tests
- Unit: query handler profile retrieval.
- Integration: guard behavior and response shape.
- E2E: unauthorized 401 and authorized success.

## Rollback strategy
- Revert JWT strategy/guard and me endpoint files.
- Leave login/register endpoints intact.

## PR checklist
- [ ] Implement JWT strategy and guard.
- [ ] Add Request-Handler-Response classes for me endpoint.
- [ ] Map auth context to transport-independent query input.
- [ ] Add unauthorized and authorized tests.
