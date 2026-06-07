# Planning: Authentication and Profile Bootstrap

## Ordered slice list

1. `slice-01` - type: `scaffold`
- Goal: establish auth/user feature folder scaffolds, shared auth types/constants, and minimal wiring points.
- Dependency: none.

2. `slice-02` - type: `infra`
- Goal: add Prisma schema updates and migration for auth persistence primitives.
- Dependency: `slice-01`.

3. `slice-03` - type: `behavior`
- Goal: implement register endpoint with Request-Handler-Response + command flow.
- Dependency: `slice-02`.

4. `slice-04` - type: `behavior`
- Goal: implement login endpoint with Passport local strategy and token issuance.
- Dependency: `slice-03`.

5. `slice-05` - type: `behavior`
- Goal: implement JWT auth guard + `GET /api/users/me` query endpoint.
- Dependency: `slice-04`.

6. `slice-06` - type: `contract`
- Goal: expose Swagger contracts and regenerate Orval SDK artifacts.
- Dependency: `slice-05`.

7. `slice-07` - type: `behavior`
- Goal: integrate mobile auth bootstrap with generated SDK + TanStack Query.
- Dependency: `slice-06`.

8. `slice-08` - type: `cleanup`
- Goal: add observability, security hardening hooks, and release readiness checks.
- Dependency: `slice-07`.

## PR checklist per slice

### `slice-01`
- [x] Create feature folders for `auth` and `users` vertical slices.
- [x] Add shared auth constants/enums/types in `apps/api/src/types`.
- [x] Add placeholder module/controller registration paths in `apps/api/src/api`.
- [x] Add baseline unit test stubs and compile checks.

### `slice-02`
- [ ] Update `schema.prisma` for `User` extensions and `RefreshToken` model.
- [ ] Create and validate Prisma migration.
- [ ] Add repository interfaces and prisma adapters.
- [ ] Verify migrate up/down path in local docker postgres.

### `slice-03`
- [ ] Add `POST /api/auth/register` request/response DTOs with validation/OpenAPI.
- [ ] Add command + handler + domain event emission (`UserRegisteredEvent`).
- [ ] Add controller wiring and API error mapping.
- [ ] Add unit/integration tests for success + duplicate email.

### `slice-04`
- [ ] Add Passport local strategy and auth guard wiring.
- [ ] Add `POST /api/auth/login` request/response DTOs.
- [ ] Add command + handler + event emission (`UserLoggedInEvent`).
- [ ] Add unit/integration tests for invalid credentials and success.

### `slice-05`
- [ ] Add JWT strategy and `JwtAuthGuard`.
- [ ] Add `GET /api/users/me` query + handler + response DTO.
- [ ] Add auth context mapping from request to transport-independent input.
- [ ] Add unauthorized/authorized integration and e2e tests.

### `slice-06`
- [ ] Ensure Swagger exposes auth schemes and DTO schemas.
- [ ] Export OpenAPI artifact to `packages/contracts`.
- [ ] Regenerate Orval client in `packages/client-sdk`.
- [ ] Validate generated client compile and endpoint typings.

### `slice-07`
- [ ] Add mobile auth service using generated SDK methods.
- [ ] Add React Query mutations/queries for login/register/me.
- [ ] Add secure token storage abstraction and bootstrap logic.
- [ ] Add Baylor-theme-consistent auth screens and smoke tests.

### `slice-08`
- [ ] Add structured auth event logging and failure metrics.
- [ ] Add rate-limiting hooks for auth routes.
- [ ] Add release checklist and rollback runbook notes.
- [ ] Final regression sweep across API/mobile/contracts.

## Risk register

1. Risk: Prisma 7 adapter/runtime misconfiguration in non-dev environments.
- Probability: Medium
- Impact: High
- Mitigation: validate `prisma.config.ts` + env handling in CI and Render pre-deploy checks.

2. Risk: auth contract churn before SDK generation stabilizes.
- Probability: Medium
- Impact: Medium
- Mitigation: freeze DTO names and response shape before `slice-06` generation.

3. Risk: token lifecycle bugs (refresh rotation/revocation).
- Probability: Medium
- Impact: High
- Mitigation: explicit token hashing + expiry tests, phased release behind mobile flag.

4. Risk: security regressions in auth errors leaking account state.
- Probability: Low
- Impact: High
- Mitigation: standardized auth error messages and negative-path tests.

5. Risk: mobile auth bootstrap race conditions.
- Probability: Medium
- Impact: Medium
- Mitigation: guard app boot sequence and add deterministic query enable conditions.

## Compatibility notes
- Plan is additive and backward-compatible by default.
- No existing endpoint behavior is removed.
- Guarded `me` endpoint is new and opt-in for clients.
- Breaking changes expected: none.

Potential future breaking areas and mitigation:
- Token response shape changes:
  - Mitigation: version endpoint or add additive fields only.
- User profile contract changes:
  - Mitigation: additive field evolution, maintain old fields until client migration.

## Release notes draft
- Added authentication foundation with register/login and protected profile retrieval.
- Introduced CQRS-based auth command/query flows and domain events.
- Added OpenAPI auth contracts and generated client updates for mobile integration.
- Added mobile auth bootstrap using TanStack Query and Baylor-themed UI continuity.
- Added auth observability and guardrails for safer rollout.

## Requirement-to-slice mapping
- Req 1-2 (environments + postgres): `slice-02`, `slice-08`
- Req 3 (Nest + Prisma): `slice-01`, `slice-02`
- Req 4 (CQRS + events): `slice-03`, `slice-04`, `slice-05`
- Req 5 (vertical slice): all slices, especially `slice-01`
- Req 6 (Request-Handler-Response + OpenAPI): `slice-03`, `slice-04`, `slice-05`, `slice-06`
- Req 6 auth infra (Passport + infrastructure): `slice-04`, `slice-05`, `slice-08`
- Req 7 (types/constants/enums): `slice-01`
- Req 8 (separate api exposure): `slice-01`, `slice-03` to `slice-05`
- Req 9 (Swagger + Orval): `slice-06`
- Req 11 (TanStack Query): `slice-07`
- Req 12-13 (Expo + Baylor theme): `slice-07`
- Req 16 (deployment): `slice-08`
- Req 17 (out of scope): acknowledged, no slices allocated.
