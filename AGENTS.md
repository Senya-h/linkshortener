# Agent Instructions (LLM-focused)

This repository includes a set of machine-readable and human-friendly agent instructions that LLMs and assistant agents should follow when contributing to this project.

Files are split into focused documents inside the `docs/` directory. Follow the documents below in order when performing changes.

- `docs/LLM_INSTRUCTIONS.md` — LLM behavior, tool usage, and collaboration rules.
- `docs/CODING_STANDARDS.md` — TypeScript/Next.js coding standards and conventions for this repo.
- `docs/UI_COMPONENTS.md` — shadcn/ui usage requirements and component guidelines.
- `docs/AUTHENTICATION.md` — Clerk-based authentication requirements and implementation guidelines.
- `docs/PR_WORKFLOW.md` — Branching, commit message style, and CI expectations.
- `docs/SECURITY_AND_PRIVACY.md` — Handling secrets, input validation, and privacy guidance specific to this link-shortener.

## ⚠️ CRITICAL: READ INSTRUCTIONS BEFORE CODING ⚠️

**IT IS INCREDIBLY IMPORTANT** to ALWAYS read the relevant individual instruction files within the `/docs` directory BEFORE generating ANY code. This is not optional.

**DO NOT skip this step.** Each document contains essential project-specific requirements that must be followed:

1. Start by reading `docs/LLM_INSTRUCTIONS.md` for general behavior and tool usage
2. Consult `docs/CODING_STANDARDS.md` for TypeScript/Next.js conventions
3. Check `docs/UI_COMPONENTS.md` before creating or modifying UI components
4. Review `docs/AUTHENTICATION.md` when working with auth-related features
5. Reference other relevant docs based on the specific task

Failure to follow these instructions will result in code that does not meet project standards and will require rework.

When editing the code, prefer making focused changes and follow the repo's formatting and testing workflow described in the coding standards document.

If you're an LLM or an automated agent: start by reading `docs/LLM_INSTRUCTIONS.md` and then update or apply changes using the process described there.
