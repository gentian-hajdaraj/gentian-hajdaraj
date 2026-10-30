# AI Engineering Skills — first public edition

Four **original, lightweight Agent Skills** built around a single engineering principle: **claims should be supported by observable evidence**.

They are written as standalone `SKILL.md` instructions using the open Agent Skills format. They are **not** copied from Matt Pocock's skills; the workflow focus comes from practical code review, controlled deployment, safe open-source extraction and evidence-backed project handoffs.

| Skill | Use when |
|---|---|
| [Evidence-first PR Review](.agents/skills/evidence-first-pr-review/SKILL.md) | Reviewing complex or AI-generated changes where a green test suite alone is insufficient |
| [Release Regression Gate](.agents/skills/release-regression-gate/SKILL.md) | Deciding whether a code change can be safely shipped to staging or production |
| [Safe Open Source Extraction](.agents/skills/safe-open-source-extraction/SKILL.md) | Publishing standalone tools derived from private business applications |
| [Verified Agent Handoff](.agents/skills/verified-agent-handoff/SKILL.md) | Preserving checked progress, branch identity, CI results, and open risks between AI agents and long sessions |

## Use with Codex and other agents

Copy the selected skill folder under your project's `.agents/skills/` directory, preserving the `SKILL.md` filename and YAML frontmatter. The model can then discover the skill by name and description in supported setups.

You may also package one skill folder as a ZIP for environments that support uploaded skills. Follow the official instructions for your agent/runtime. These files **contain no executable installation scripts** and grant no additional access or permissions.

## Principles

- Inspect evidence before asserting correctness.
- Label missing checks **unverified** rather than turning them into a green check.
- Keep permission, production, customer and IP boundaries explicit.
- Prefer narrow, inspectable changes and repeatable checks.
- Preserve a human approval gate for sensitive operations.

These skills are general-purpose public instructions, not a disclosure of private Quantiq, Telescop or Malrix software internals.

**License:** [MIT](.agents/skills/LICENSE). Contributions and corrections are welcome via GitHub issues and pull requests after adopting a dedicated public skills repository.

Reference: [OpenAI's Agent Skills overview](https://developers.openai.com/api/docs/guides/tools-skills).
