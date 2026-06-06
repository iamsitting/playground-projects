# Skill: Feature Implementation

## Purpose
Implement planned slices with traceability to plan requirements and maintain a running changelog in the plan directory.

## Inputs
- Plan path, for example `plans/001-platform-design`.
- Selected slice from planning output.

## Process
1. Confirm slice scope and touched files.
2. Implement minimum viable code for the slice.
3. Add or update tests.
4. Run validation commands for changed components.
5. Update `plans/<plan>/changelog.md` with a new entry.

## Changelog Entry Format
- Date: YYYY-MM-DD
- Slice: short name
- Summary: what changed
- Compatibility: backward-compatible | breaking
- Validation: lint/test/build commands run
- Follow-ups: remaining tasks

## Rules
- Keep handlers transport-independent.
- Respect Request-Handler-Response pattern.
- Keep cross-cutting concerns in infrastructure layer.
- Do not bundle unrelated refactors.
- Prefer small commits and incremental delivery.
