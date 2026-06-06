# Skill: Feature Design

## Purpose
Design a feature from requirements in `plans/*` with explicit architecture fit, API contract, and implementation-ready artifacts.

## Inputs
- Plan directory path, for example `plans/001-platform-design`.
- Target feature name.
- Constraints, acceptance criteria, and non-goals.

## Process
1. Read `requirements.md` in the selected plan.
2. Identify impacted slices in `apps/api/src/features` and `apps/mobile`.
3. Define command/query boundaries (CQRS).
4. Define domain events and event handlers.
5. Design Request-Handler-Response contracts:
   - Request DTO with validation + OpenAPI schema.
   - Handler input/output model, transport independent.
   - Response DTO with OpenAPI schema.
6. Define auth requirements using Passport strategies/guards.
7. Define persistence model impact and Prisma migration shape.
8. Define generated contract impact:
   - Swagger change
   - Orval SDK update
9. Provide test strategy and rollout strategy.

## Output Template
- Feature summary
- User-facing behavior
- API endpoints and schemas
- Command/query handlers
- Domain events
- Data model changes
- Security and auth notes
- Backward compatibility notes
- Testing matrix
- Implementation slices (small PRs)

## Rules
- Keep transport concerns out of business handlers.
- Prefer additive changes to preserve compatibility.
- If a breaking change is required, explicitly label and justify it.
