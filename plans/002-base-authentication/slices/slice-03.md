# slice-03 (behavior)

## Goal
Deliver register endpoint with Request-Handler-Response pattern and CQRS command handling.

## Touched paths
- `apps/api/src/features/auth/api/register/**`
- `apps/api/src/features/auth/application/commands/register-user/**`
- `apps/api/src/features/auth/domain/events/user-registered.event.ts`
- `apps/api/src/api/**`

## Risk level
Medium

## Tests
- Unit: register handler happy + duplicate email path.
- Integration: DTO validation + controller mapping + response schema.
- E2E: `POST /api/auth/register` success and email-in-use path.

## Rollback strategy
- Revert endpoint/controller/handler files.
- Keep DB schema changes from prior slice intact (safe additive).

## PR checklist
- [ ] Add request/response DTOs with validation and OpenAPI decorators.
- [ ] Add command + handler with transport-independent input/output.
- [ ] Emit `UserRegisteredEvent`.
- [ ] Add error mapping to stable API error codes.
