# Requirements

1) 2 environments: local and production
2) postgresql (docker for local and neon for production)
3) nest backend (node,typescript) with prisma orm (code-first approach)
4) cqrs, event driven architecture
5) vertical slice architecture in feature folders
6) each feature has Request-handler-Response pattern where request has request shape, nest validation, openapi definition, separate handler file containing business logic independent of request object, and response object with open api schema
6) passport for authentication, separate infrastrucutre folder for managing external services and cross cutting concerns such as logging
7) types folder should contain types and constants and enums
8) separate api folder for exposing routes/controllers
9) Swagger + orval generation (mono repo) for client to server integration
11) tanstack react query for client side state management
12) Expo/react native frontend (cross platform)
13) Baylor University green and yellow theme (support dark and light)
14) Create docs/architecture.md file for agentic context
15) in .agents/skills, create feature-design skill for designing requirement based on corresponding plan in plans folder, create feature-planning skill for implmentation planning prioritizing small PRs, backwards compatibility, breaking up plan into slices, and feature-implementation skill to implement skill and track plan progress via change log in plan
16) deployment via github actions and hosting on render
17) out of scope: publishing mobile apps, mobile notifications setup