# OpenAI ChatKit Helper (Work in Progress)

⚠️ **This project is a work in progress.**  
If you try it out, I would genuinely appreciate feedback on what works, what’s confusing, and where things break.

---

## What This Project Is

This is a lightweight helper tool designed to solve a specific problem with OpenAI Agent Builder:

> Agents built in OpenAI are not easily shareable with others unless they are deployed.

This tool helps bridge that gap by generating a **ready-to-deploy web app** that connects to your Agent Builder workflow.

---

## What It Does

The app allows a user to:

1. Enter an app name
2. Paste a Workflow ID from OpenAI Agent Builder
3. Add a simple welcome message
4. Generate a downloadable **zip file**

That zip file contains everything needed to:
- Upload to GitHub
- Deploy to Vercel
- Connect back to the OpenAI Agent Builder workflow

---

## How It Works (High Level)

```
OpenAI Agent Builder (your agent)
→ This Helper App (generates deployable project)
→ GitHub (store project)
→ Vercel (host project)
→ Add domain back to Agent Builder
→ Shareable web app
```

---

## Important Notes

### 🔑 You Must Use Your Own OpenAI API Key

This project does **not** include or require the developer’s API key.

Each user must:
- Create their own OpenAI API key
- Add it to their own Vercel project as an environment variable

This ensures:
- Proper usage tracking
- No shared billing

---

### 🌐 Domain Allowlist Requirement

After deploying to Vercel, you must:

1. Go back to OpenAI Agent Builder
2. Click **"Add Domain"**
3. Paste your Vercel URL

Without this step, your deployed app will load but **the chat will not work**.

---

### ⚙️ Deployment Required for Sharing

- Running inside Agent Builder is fine for testing
- Sharing with others requires deployment

This tool exists specifically to make that deployment process easier for non-developers

---

## Limitations

- Still evolving — expect rough edges
- Assumes basic familiarity with:
  - GitHub
  - Vercel
- Does not yet include advanced error handling or validation
- UI/UX is intentionally simple (focused on function over polish)

---

## Who This Is For

- Students learning AI workflows
- Non-developers trying to deploy agents
- Developers who want a quick starting point
- Instructors teaching Agent Builder concepts

---

## Feedback

If you use this and run into issues or confusion, that’s extremely valuable.

You can share feedback in two ways:

**1. GitHub Issues (preferred for bugs and feature requests)**
- Open an issue in this repository

**2. Email (best for general feedback or questions)**
- timothy@theaihandyman.ai

Please include:
- Where you got stuck
- What didn’t make sense
- What you expected vs what happened

That feedback directly shapes the next version.

---

## License

Currently no formal license. This may change as the project evolves.
