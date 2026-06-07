# slice-07 (behavior)

## Goal
Integrate mobile authentication flow using generated SDK and TanStack Query.

## Touched paths
- `apps/mobile/App.tsx`
- `apps/mobile/src/**` (auth services/hooks/screens)
- `packages/client-sdk/**` consumption points

## Risk level
Medium

## Tests
- Typecheck mobile app.
- Manual flow: register/login/me in simulator.
- Add hook-level unit tests where practical.

## Rollback strategy
- Feature-flag mobile auth bootstrap.
- Revert only mobile integration while keeping API and contracts live.

## PR checklist
- [ ] Add auth API client wrappers and query/mutation hooks.
- [ ] Add token storage abstraction and bootstrap sequence.
- [ ] Add Baylor-consistent light/dark auth UI states.
- [ ] Validate login persistence and me query hydration.
