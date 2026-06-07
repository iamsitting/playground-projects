# slice-08 (cleanup)

## Goal
Harden auth feature for release with observability and protective controls.

## Touched paths
- `apps/api/src/infrastructure/logging/**`
- `apps/api/src/features/auth/**` (rate limit hooks, metrics)
- CI/release docs and runbooks

## Risk level
Low

## Tests
- Verify logs emitted on register/login success/failure.
- Verify rate-limit behavior and error responses.
- Regression run for auth endpoints + mobile bootstrap.

## Rollback strategy
- Disable rate-limit hooks via config toggle if needed.
- Revert observability-only code paths without affecting business logic.

## PR checklist
- [ ] Add structured auth event logs and key metrics.
- [ ] Add route-level rate limiting hooks.
- [ ] Add release checklist and rollback notes.
- [ ] Complete regression and release sign-off.
