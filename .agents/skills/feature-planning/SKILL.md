# Skill: Feature Planning

## Purpose
Convert designed features into implementation plans that optimize for small pull requests, backward compatibility, and low-risk rollout.

## Inputs
- Feature design output.
- Current repository state.
- Delivery constraints and timeline.

## Planning Principles
- Small PRs (target 200-500 lines when practical).
- Vertical slices by behavior, not by technical layer.
- Backward-compatible defaults first.
- Migrations staged with safe rollout and rollback path.

## Process
1. Split work into minimal, independently mergeable slices.
2. Mark each slice as one of:
   - scaffold
   - behavior
   - contract
   - infra
   - cleanup
3. For each slice, define:
   - goal
   - touched paths
   - risk level
   - tests
   - rollback strategy
4. Order slices by dependency with early value delivery.
5. Call out breaking changes separately with mitigation.
6. Document the plan in `plans/<plan>/planning.md` and child slices in `plans/<plan>/slices/<slice-0X>.md`.

## Output Template
- Ordered slice list
- PR checklist per slice
- Risk register
- Compatibility notes
- Release notes draft

## Done Criteria
- Every requirement maps to at least one slice.
- No slice depends on unmerged hidden prerequisites.
- Testing and rollback are explicit.
