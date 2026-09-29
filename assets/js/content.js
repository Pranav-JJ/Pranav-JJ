/*
 * Portfolio content — the single place to update impact cards, case studies,
 * timeline entries, learning and links. `main.js` renders everything below
 * into any element with a matching `data-render` attribute, on any page.
 *
 * Content rules (keep these when editing):
 *  - First person, strongest accurate verb, no invented metrics or ownership.
 *  - Describe the skill and the lesson, not internal products: no internal
 *    application, team or customer names and no business-specific terms.
 *    The only named project is the public report site, by choice.
 *  - Never link private repositories; link public sites only.
 *  - Lead with data and AI work where it is genuinely accurate; don't claim
 *    tools or experience that aren't evidenced.
 *  - `status` must be one of the keys in STATUS below, so readers can tell
 *    what was built, implemented, contributed or supported.
 *  - No ticket IDs, internal URLs, hostnames or secrets.
 */
window.PORTFOLIO = (function () {
  "use strict";

  var STATUS = {
    built: "Built from scratch",
    solo: "Built solo · maintaining",
    researched: "Researched · implemented",
    shipped: "Shipped",
    validated: "Implemented · validated",
    contributed: "Contributed",
    supported: "Supported",
  };

  var links = [
    {
      id: "linkedin",
      label: "LinkedIn",
      handle: "in/pranav-joshi-168298231",
      href: "https://www.linkedin.com/in/pranav-joshi-168298231",
    },
    {
      id: "github",
      label: "GitHub",
      handle: "github.com/Pranav-JJ",
      href: "https://github.com/Pranav-JJ",
    },
    // TODO: add a public email address if you want one listed, e.g.
    // { id: "email", label: "Email", handle: "you@example.com", href: "mailto:you@example.com" },
  ];

  /* ---------- home page ---------- */

  var focus = [
    {
      id: "data",
      label: "Data engineering",
      title: "Making data add up",
      body:
        "The enterprise work I've learned most from came down to one question: is this number right? I answer it with SQL, with calculation logic, and by checking every layer until the data reconciles.",
      points: [
        "SQL Server, PostgreSQL and PL/SQL: schemas, functions and stored procedures",
        "Root-cause analysis across UI, services and stored data",
        "Reconciliation and field-by-field validation between data paths",
        "Documenting how values are derived and what a change affects",
      ],
      href: "work.html#case-data",
      cta: "Read the data case study",
    },
    {
      id: "ai",
      label: "AI engineering",
      title: "Building AI tooling that earns its place",
      body:
        "My background is NLP and machine learning. Today I apply it to AI-assisted engineering: building platforms and skills for AI coding assistants, building agents, and researching how the assistants actually behave.",
      points: [
        "Built an organization-wide skills platform for AI coding assistants from scratch",
        "Researched Claude Code vs GitHub Copilot with a repeatable scorecard",
        "Built an IT-service-desk triage agent in Python with an agent development kit (ADK)",
        "University work in transformers, summarization and federated learning",
      ],
      href: "work.html#case-platform",
      cta: "Read the skills platform case study",
    },
  ];

  var explore = [
    { href: "work.html", title: "Work", body: "Five case studies: data correctness, an AI skills platform, AI assistant research, a public report site and a Vue 3 migration." },
    { href: "skills.html", title: "Skills", body: "Toolkit, how I work through a problem, and how my training shows up in real work." },
    { href: "projects.html", title: "Projects", body: "University and independent projects in NLP, machine learning and security." },
    { href: "about.html", title: "About", body: "How I work with teams, the path so far, and how to reach me." },
  ];

  var impact = [
    {
      status: "built",
      title: "Built an org-wide AI skills platform",
      body:
        "I built a platform from scratch that makes reusable skills for AI coding assistants discoverable and installable for engineers across the organization.",
      href: "work.html#case-platform",
    },
    {
      status: "validated",
      title: "Traced a data mismatch to its root cause",
      body:
        "I followed values through the UI, services and SQL, found aggregate results reused on more granular rows, and rebuilt the calculation so every segment reconciles to the total.",
      href: "work.html#case-data",
    },
    {
      status: "researched",
      title: "Researched Claude Code vs GitHub Copilot",
      body:
        "I implemented an ESLint skill for both assistants, compared them with a repeatable scorecard on a sample and a live codebase, and built a triage agent at a hackathon.",
      href: "work.html#case-ai",
    },
    {
      status: "solo",
      title: "Built a public-facing report site solo",
      body:
        "During my internship I built the Global Responsibility Report web edition on my own with Next.js and Tailwind CSS, and I still maintain it.",
      href: "work.html#case-grp",
    },
  ];

  /* ---------- work page ---------- */

  var caseStudies = [
    {
      id: "case-data",
      status: "validated",
      title: "Data correctness & reconciliation",
      kicker:
        "Finding out why two data paths disagreed, using SQL, server-side calculation logic and field-by-field validation in a large enterprise application.",
      tags: ["SQL Server", "PostgreSQL", "Data validation", "Reconciliation", "C# / .NET", "Technical writing"],
      problem:
        "The same records, captured through two different data paths, produced different results whenever a record covered more than one segment. The numbers had to agree.",
      role:
        "I traced the data end to end (schemas, formulas, calculation services and stored results), found the root cause, implemented the fix, and documented how each value is derived.",
      learned:
        "Reconciliation is a test: if the parts don't sum to the whole, something upstream is wrong. “Almost matching” is a clue, not a rounding error, and writing the derivations down made every later change faster to review.",
      outcome:
        "Both data paths now agree on business values for multi-segment records, with only the expected metadata differences, and the derivation logic is documented for the next person.",
      visual: "reconcile",
      did: [
        "Mapped a multi-step calculation across database schemas, formulas, server-side services, UI behavior and stored results.",
        "Traced a mismatch between two capture paths to aggregate-level values being reused for more granular rows.",
        "Implemented per-segment calculations so each row is computed from its own inputs instead of inheriting one aggregate result.",
        "Aligned the server-side calculation with the same input basis the UI uses, so there's one source of truth.",
        "Worked through downstream calculation issues in derived units, revenue and profitability measures, conversion factors and allocations.",
        "Resolved data edge cases: null and zero values, past and future records, status-dependent logic, repeated loads, and mismatches between stored data and the UI.",
        "Documented the process, formulas and change impact in functional and technical documentation.",
      ],
      approach:
        "I followed single values through every layer (UI, server-side service, stored data) until I found where the two paths diverged, then fixed the calculation at that point instead of patching columns one at a time.",
      validation:
        "I checked per-segment results against a known multi-segment scenario, confirmed the segments reconcile back to the total, and compared both data paths field by field before the change moved through QA.",
    },
    {
      id: "case-platform",
      status: "built",
      title: "Organization-wide AI skills platform",
      kicker:
        "A platform I built from scratch that makes reusable skills for AI coding assistants discoverable and installable for engineers across the organization.",
      tags: ["AI coding assistants", "Reusable skills", "UI + API", "GitHub Apps", "OAuth", "Azure AD", "Vault", "WCAG 2.2"],
      problem:
        "Reusable engineering skills for AI coding assistants were scattered across repositories, with no single place for engineers to find them, trust them and install them for the assistant they use.",
      role:
        "I built the platform from scratch as a separate UI and API: connecting skill repositories, supporting multiple sources in the API, cataloging skill metadata, producing assistant-specific install artifacts, and handling identity, secrets and configuration for development, QA and production.",
      learned:
        "Building AI tooling for a whole organization is mostly enterprise engineering. Identity, secrets, network paths and credential handling decide whether it ships. Drawing the object model first was the fastest way to line up UI and API work.",
      outcome:
        "An organization-wide platform that pulls skills from multiple source repositories and serves assistant-specific installs. Its architecture is documented in UML-style diagrams, and I've demonstrated it to senior engineering and AI-architecture stakeholders.",
      visual: "pipeline",
      pipeline: [
        { label: "Skill repositories", note: "multiple sources" },
        { label: "Ingest & validate", note: "source checks, credentials, caching" },
        { label: "Catalog & metadata", note: "discovery" },
        { label: "API", note: "assistant-specific artifacts" },
        { label: "UI", note: "discover & install" },
      ],
      caption: "How a skill travels from a source repository to an engineer's AI coding assistant.",
      did: [
        "Built the UI and the API as separate codebases, from scratch.",
        "Connected skill repositories to the UI and added support for multiple source repositories in the API.",
        "Designed how discovery, source repositories, skill metadata, installation artifacts and assistant-specific output fit together.",
        "Handled enterprise readiness: Azure AD integration, Vault-backed configuration, network access, source validation, caching and secure handling of repository credentials.",
        "Made the app deployment-ready across development, QA and production, including GitHub App connectivity, OAuth login and environment configuration.",
        "Created UML-style object hierarchy and mapping diagrams for the API.",
        "Added and connected new skills, and aligned the UI with brand guidelines and WCAG 2.2 accessibility expectations.",
        "Demonstrated the platform to senior engineering and AI-architecture stakeholders, and helped junior developers with branch merging and GitHub workflows.",
      ],
      approach:
        "I treated the platform as a pipeline and designed each stage before building it: where skills come from, how they're validated and cataloged, what the API exposes, and what each assistant needs installed. The object diagram came first.",
      validation:
        "I checked behavior one environment at a time (GitHub App connectivity, OAuth login and configuration in development, QA and production) alongside the UI flows that surface each source's skills.",
    },
    {
      id: "case-ai",
      status: "researched",
      title: "Researching AI coding assistants & building agents",
      kicker:
        "Researching how Claude Code and GitHub Copilot handle reusable skills, implementing a skill for both, and building a triage agent.",
      tags: ["Claude Code", "GitHub Copilot", "Reusable skills", "Evaluation", "ADK", "Python", "ESLint"],
      problem:
        "Do reusable skills make AI coding assistants more useful on real enterprise code? And how would you tell, beyond a good-looking demo?",
      role:
        "During a pilot I researched Claude Code and reusable skills, implemented an ESLint-related skill for both Claude Code and GitHub Copilot, and researched how the two compared using a repeatable scorecard. I also researched and built an IT-service-desk triage agent at a hackathon.",
      learned:
        "Treat AI output like any other system under test: fix the inputs, write down the expected behavior, and score it the same way every time. A skill is a small piece of engineering, and it deserves tests like any other code.",
      outcome:
        "The research shaped the organization-wide skills platform I went on to build. It also produced a working ESLint skill for two assistants and a working triage-agent prototype.",
      visual: "loop",
      pipeline: [
        { label: "Implement the skill", note: "ESLint-focused" },
        { label: "Run in two assistants", note: "Claude Code & Copilot" },
        { label: "Score", note: "same scorecard each run" },
        { label: "Test on real code", note: "sample + live project" },
        { label: "Summarize", note: "findings & readiness" },
      ],
      did: [
        "Researched Claude Code, reusable engineering skills and how skills are packaged for different assistants.",
        "Implemented an ESLint-related skill and tested it in both Claude Code and GitHub Copilot.",
        "Researched Claude Code vs GitHub Copilot behavior with a repeatable scorecard, on a sample project and on a live codebase.",
        "Researched and built an IT-service-desk triage agent in Python at a hackathon, using an agent development kit (ADK).",
        "Turned the findings into the case for an organization-wide skills platform, and then built it.",
        "Summarized findings along with deployment and enterprise-readiness considerations.",
      ],
      approach:
        "I kept the comparison boring on purpose: the same skill, the same tasks and the same scorecard for each assistant, run against both a controlled project and a real one.",
      validation:
        "Running the skill against a live codebase, not only a sample project, was the check that made the comparison meaningful.",
    },
    {
      id: "case-grp",
      status: "solo",
      title: "Global Responsibility Report site",
      kicker:
        "The public web edition of the company's annual Global Responsibility Report. I built it solo during my internship and still maintain it.",
      tags: ["Next.js", "React", "Tailwind CSS", "Accessibility", "Vulnerability fixes", "Deployments"],
      site: { label: "globalresponsibility.generalmills.com", href: "https://globalresponsibility.generalmills.com/" },
      problem:
        "The annual Global Responsibility Report needed a public web edition that people could read page by page, link to, use accessibly, and download as a PDF.",
      role:
        "I built the site on my own during my internship with Next.js and Tailwind CSS. I still maintain it: vulnerability fixes, image-checker findings, deployment problems and reliability issues.",
      learned:
        "Owning something public end to end changes how you build. Accessibility, security findings and deployments aren't someone else's problem, and maintaining my own code after the internship taught me to write it for the next reader.",
      outcome:
        "The site is live and public, and I keep it secure and deployable.",
      visual: "features",
      features: [
        { label: "Page-by-page reader", note: "every page deep-linkable" },
        { label: "Contents view", note: "jump to any section" },
        { label: "Full-report PDF", note: "downloadable" },
        { label: "Accessibility page", note: "public statement" },
        { label: "Privacy choices", note: "cookie consent" },
      ],
      caption: "What the live site offers readers.",
      did: [
        "Built the external-facing site solo during my internship, with Next.js (React) and Tailwind CSS.",
        "Implemented page-by-page reading with deep-linkable pages, a contents view, and a downloadable PDF of the full report.",
        "Added an accessibility page and privacy choices for cookie consent.",
        "Maintain the site today: fixing vulnerabilities, image-checker findings, deployment problems and reliability issues.",
      ],
      approach:
        "I organized the site around the report's own page structure, so every page has its own link and readers can move through it the way they would through the printed report.",
      validation:
        "For maintenance work I check the public-facing behavior after each fix (pages, contents, PDF download) so security and deployment changes don't break what readers see.",
    },
    {
      id: "case-vue",
      status: "contributed",
      title: "Vue 2 → Vue 3 migration",
      kicker:
        "Moving a large enterprise application to Vue 3: routing, hydration, shared components and screen-by-screen behavior.",
      tags: ["Vue 3", "Vue 2", "Routing", "Shared components", "JavaScript / TypeScript", "CSS"],
      problem:
        "A large enterprise Vue 2 application had to move to Vue 3, with routing, navigation, shared components and many screens behaving the way users expected.",
      role:
        "I contributed across the migration: routing, hydration fixes, navigation, user preferences, admin and editing screens, filters, modals and shared components, plus the functional and styling defects found along the way.",
      learned:
        "Migrations are mostly about shared behavior. One fix in a shared component or the router can repair, or break, many screens at once, so it pays to understand the foundations before working screen by screen.",
      outcome:
        "Migrated screens work under Vue 3, with functional and styling defects fixed along the way and changes validated through QA.",
      visual: "pipeline",
      pipeline: [
        { label: "Routing & navigation", note: "route behavior" },
        { label: "Hydration", note: "rendering fixes" },
        { label: "Shared components", note: "filters, modals, common UI" },
        { label: "Screens", note: "preferences, admin, editing" },
        { label: "Behavior & styling", note: "defect fixes" },
      ],
      caption: "The areas of the migration I worked through.",
      did: [
        "Fixed routing and navigation behavior under Vue 3.",
        "Fixed hydration issues.",
        "Updated shared components (filters, modals and other common UI) to behave correctly under Vue 3.",
        "Worked through individual screens, including user preferences, admin and editing screens.",
        "Fixed functional and styling defects across related flows, including bulk-edit and scenario views.",
        "Delivered targeted follow-up fixes for issues found in production, such as comment and update behavior.",
      ],
      approach:
        "I worked from the foundations up (router and navigation, hydration, then shared components) before fixing individual screens, so each fix helped as many screens as possible.",
      validation:
        "Changes went through QA validation before release, and I followed up on defects found in testing and in production.",
    },
  ];

  var moreWork = {
    feature: {
      id: "case-auth",
      status: "shipped",
      title: "Modernizing a legacy authentication flow",
      summary:
        "An automated email service had stopped sending because it depended on a deprecated authentication method.",
      steps: [
        { label: "Investigate", text: "I traced the delivery failure to the deprecated authentication path." },
        { label: "Coordinate", text: "I worked with platform and support teams to set up the access and conditions the new approach needed." },
        { label: "Rebuild", text: "I built a new approach on an Azure AD app registration with Vault-backed settings, and updated the code for Vault authentication." },
        { label: "Validate", text: "I updated the QA scheduled jobs and confirmed emails were sent through the production job flow again." },
        { label: "Document", text: "I wrote up the resolution so future support starts from a known fix." },
      ],
      tags: ["C# / .NET", "Azure AD", "Vault", "Scheduled jobs"],
    },
    cards: [
      {
        status: "supported",
        title: "Data & production support",
        body:
          "Resolved issues involving database refreshes, directory/API synchronization, report ordering, application configuration and user-facing behavior.",
      },
      {
        status: "supported",
        title: "Releases & disaster recovery",
        body:
          "Supported QA validation, release planning, conflict resolution, and rollback and hypercare planning, and helped build disaster-recovery configuration with Terraform, Azure AD and Vault.",
      },
      {
        status: "supported",
        title: "Security & reliability",
        body:
          "Fixed or helped resolve vulnerabilities, image-scan findings, deployment problems and reliability issues across several applications.",
      },
      {
        status: "supported",
        title: "Knowledge transfer & enablement",
        body:
          "Supported knowledge transfer between teams, and helped other developers with deployment setup, branch merging and GitHub workflows.",
      },
    ],
  };

  /* ---------- skills page ---------- */

  var approach = [
    { step: "Diagnose", text: "Reproduce the symptom, then follow one value from the UI through services down to the tables until the paths diverge." },
    { step: "Design", text: "Find the source of truth and align calculations, data paths and configuration with it." },
    { step: "Implement", text: "Make targeted changes, such as a per-segment calculation, a multi-source API or a new auth path." },
    { step: "Validate", text: "Compare against a known scenario, reconcile parts to the whole, and score AI output against written expectations." },
    { step: "Document", text: "Write down derivations, change impact and resolution steps so the next person starts ahead." },
    { step: "Deploy", text: "Plan the release, resolve conflicts, prepare rollback and hypercare, and follow the change into production." },
  ];

  var toolkit = [
    {
      group: "Data & SQL",
      items: ["SQL Server", "PostgreSQL", "PL/SQL", "Stored procedures", "LINQ", "Entity Framework Core"],
      evidence: "Root-cause analysis, reconciliation and validation across schemas, formulas and stored data.",
    },
    {
      group: "AI & machine learning",
      items: ["Python", "Claude Code", "GitHub Copilot", "Reusable skills", "Evaluation scorecards", "ADK", "NLP / transformers"],
      evidence: "An organization-wide skills platform, assistant research, a triage agent, and university NLP work.",
    },
    {
      group: "Backend",
      items: ["C#", ".NET", "ASP.NET Core", "VB.NET"],
      evidence: "Calculation services, data-correctness fixes, Vault-backed authentication.",
    },
    {
      group: "Cloud & platform",
      items: ["GitHub Actions", "Azure AD", "Vault", "Docker", "Kubernetes / GitOps", "Terraform"],
      evidence: "DR configuration, app registrations, secrets, multi-environment releases.",
    },
    {
      group: "Frontend & docs",
      items: ["Next.js", "React", "Tailwind CSS", "Vue 3", "TypeScript", "WCAG 2.2", "UML diagrams"],
      evidence: "A public report site, a Vue 3 migration, platform UI and architecture diagrams.",
    },
  ];

  var learning = [
    {
      learned: ["SQL Server fundamentals", "Functions & stored procedures", ".NET LINQ for databases"],
      applied: "Tracing schemas, formulas and stored data to find where values diverged.",
    },
    {
      learned: ["Python fundamentals"],
      applied: "Building a triage agent at a hackathon.",
    },
    {
      learned: ["C# fundamentals", "ASP.NET Core fundamentals", "ASP.NET Core with EF Core"],
      applied: "Reading and changing server-side services and calculation logic.",
    },
    {
      learned: ["GitHub workflows", "Associate Cloud Engineer track"],
      applied: "Deployment workflows, DR configuration, environment setup, and helping others merge and deploy.",
    },
    {
      learned: ["React beginner path", "Angular beginner path"],
      inProgress: ["Vue 3 path"],
      applied: "Maintaining a Next.js (React) site and contributing to a Vue 2 → Vue 3 migration.",
    },
    {
      learned: ["Engaging Leader Behaviour"],
      applied: "Stakeholder demos, knowledge transfer, and supporting junior developers.",
    },
    {
      learned: ["VB.NET fundamentals"],
      inProgress: ["Business-domain onboarding"],
      applied: "Broadening my .NET range and the business context behind the data I work with.",
    },
  ];

  /* ---------- about page ---------- */

  // TODO: add dates (e.g. "2024 — 2025") once you're happy to publish them,
  // and confirm the order of the middle phases matches your actual history.
  var timeline = [
    {
      phase: "Before",
      title: "Computer Engineering, VIT Pune",
      body:
        "University projects in NLP, federated learning and systems security; runner-up at the IIT Madras Road Safety Hackathon.",
    },
    {
      phase: "Internship",
      title: "Built a public report site solo",
      body:
        "Built the Global Responsibility Report web edition on my own with Next.js and Tailwind CSS. I still maintain it.",
    },
    {
      phase: "Foundations",
      title: "Joined an enterprise engineering team as a trainee",
      body:
        "Built foundations in SQL Server, C#, ASP.NET Core, Entity Framework Core and GitHub workflows, then applied them to real application support.",
    },
    {
      phase: "Support & reliability",
      title: "Keeping applications healthy",
      body:
        "Maintaining the report site, database refreshes, vulnerability fixes, deployments, production support and an authentication modernization.",
    },
    {
      phase: "Data correctness",
      title: "Delivering in a large codebase",
      body:
        "Tracing and fixing calculation and reconciliation issues, the Vue 3 migration, releases, and a disaster-recovery exercise.",
    },
    {
      phase: "AI engineering",
      title: "AI research & an org-wide skills platform",
      body:
        "Researched Claude Code vs GitHub Copilot, built a triage agent, and built an organization-wide skills platform from scratch.",
    },
    {
      phase: "Now",
      title: "Moving toward AI & data engineering",
      body:
        "Going deeper on SQL and data work, continuing to build AI tooling, and learning more of the business domain.",
      current: true,
    },
  ];

  /* ---------- projects page (kept as-is) ---------- */

  var earlierProjects = [
    {
      title: "Abstractive summarization with transformers",
      body: "Fine-tuned t5-base for abstractive summarization of legal documents and news.",
      tags: ["NLP", "Transformers", "Python"],
      href: "https://github.com/Pranav-JJ/Transformers-Abstractive-Summarisation",
    },
    {
      title: "Federix",
      body: "Research project on training and fine-tuning transformer models with federated learning, on-device rather than in the cloud.",
      tags: ["Federated learning", "Deep learning"],
      href: "https://github.com/Pranav-JJ/Federix",
    },
    {
      title: "SmartHelmet",
      body: "Runner-up at the IIT Madras Road Safety Hackathon: a helmet designed to protect riders and summon help after an accident.",
      tags: ["Hackathon", "IoT"],
      // The original repository is no longer public; add a link here if it is republished.
    },
    {
      title: "SentinelOS",
      body: "A GUI toolkit for hardening Ubuntu-based systems, built for Smart India Hackathon 2023.",
      tags: ["Security", "Linux"],
      href: "https://github.com/Pranav-JJ/SentinelOS",
    },
    {
      title: "Nemo",
      body: "A web-based mental-wellness companion using NLP for conversation and sentiment analysis to track emotional patterns over time.",
      tags: ["NLP", "Web"],
      href: "https://github.com/Pranav-JJ/Nemo",
    },
  ];

  return {
    STATUS: STATUS,
    links: links,
    focus: focus,
    explore: explore,
    impact: impact,
    caseStudies: caseStudies,
    moreWork: moreWork,
    approach: approach,
    toolkit: toolkit,
    learning: learning,
    timeline: timeline,
    earlierProjects: earlierProjects,
  };
})();
