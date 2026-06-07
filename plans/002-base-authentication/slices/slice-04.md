# slice-04 (behavior)

## Goal
Deliver login endpoint using Passport local strategy and token issuance.

## Touched paths
- `apps/api/src/features/auth/api/login/**`
- `apps/api/src/features/auth/application/commands/login-user/**`
- `apps/api/src/features/auth/domain/events/user-logged-in.event.ts`
- `apps/api/src/infrastructure/auth/**`

## Risk level
Medium

## Tests
- Unit: credential verification and token generation.
- Integration: strategy + guard + controller behavior.
- E2E: invalid credentials and success token response.

## Rollback strategy
- Revert local strategy wiring and login endpoint files.
- Preserve prior register and persistence slices.

## PR checklist
- [ ] Add local strategy and guard wiring.
- [ ] Add login request/response DTOs.
- [ ] Add command/handler + event emission.
- [ ] Add comprehensive negative-path tests.
