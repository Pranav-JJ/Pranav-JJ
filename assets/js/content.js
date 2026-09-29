/*
 * Portfolio content — the single place to update impact cards, case studies,
 * timeline entries, learning and links. `main.js` renders everything below
 * into any element with a matching `data-render` attribute, on any page.
 *
 * Content rules (keep these when editing):
 *  - First person, strongest accurate verb, no invented metrics or ownership.
 *  - Describe the skill and the lesson, not the product: no employer, product,
 *    application, team or customer names, and no business-specific terms.
 *  - Lead with data and AI work where it is genuinely accurate; don't claim
 *    tools or experience that aren't evidenced.
 *  - `status` must be one of the keys in STATUS below, so readers can tell
 *    shipped work from contributions, support, and exploration.
 *  - No ticket IDs, internal URLs, hostnames or secrets.
 */
window.PORTFOLIO = (function () {
  "use strict";

  var STATUS = {
    shipped: "Shipped",
    validated: "Implemented · validated",
    contributed: "Contributed",
    supported: "Supported",
    explored: "Explored",
    progress: "In progress",
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
      title: "Putting AI to work, with evidence",
      body:
        "My background is NLP and machine learning. Today I apply it to AI-assisted engineering: building reusable assistant skills, prototyping agents, and measuring whether they actually help.",
      points: [
        "Evaluating Claude Code and GitHub Copilot with a repeatable scorecard",
        "Building and testing reusable assistant skills on real codebases",
        "Prototyping a triage agent with an agent development kit (ADK) in Python",
        "University work in transformers, summarization and federated learning",
      ],
      href: "work.html#case-ai",
      cta: "Read the AI case study",
    },
  ];

  var explore = [
    { href: "work.html", title: "Work", body: "Three case studies in data correctness, AI evaluation and integration, plus delivery and support work." },
    { href: "skills.html", title: "Skills", body: "Toolkit, how I work through a problem, and how my training shows up in real work." },
    { href: "projects.html", title: "Projects", body: "University and independent projects in NLP, machine learning and security." },
    { href: "about.html", title: "About", body: "How I work with teams, the path so far, and how to reach me." },
  ];

  var impact = [
    {
      status: "validated",
      title: "Traced a data mismatch to its root cause",
      body:
        "I followed values through the UI, services and SQL, found aggregate results reused on more granular rows, and rebuilt the calculation so every segment reconciles to the total.",
      href: "work.html#case-data",
    },
    {
      status: "explored",
      title: "Measured AI coding assistants with a scorecard",
      body:
        "I built an ESLint-related skill, ran it in Claude Code and GitHub Copilot against a sample project and a live codebase, and compared the results the same way each time.",
      href: "work.html#case-ai",
    },
    {
      status: "explored",
      title: "Prototyped an AI triage agent",
      body:
        "At a hackathon I built a small IT-service-desk triage agent in Python with an agent development kit (ADK).",
      href: "work.html#case-ai",
    },
    {
      status: "contributed",
      title: "Integrated multiple data sources behind one API",
      body:
        "I added multi-repository source support to an API, connected it to the UI, and worked on source validation, caching and credential handling.",
      href: "work.html#case-integration",
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
      id: "case-ai",
      status: "explored",
      title: "Evaluating AI coding assistants & agents",
      kicker:
        "Hands-on, measured experiments with Claude Code, GitHub Copilot, reusable assistant skills and a small agent prototype.",
      tags: ["Claude Code", "GitHub Copilot", "Reusable skills", "Evaluation", "ADK", "Python", "ESLint"],
      problem:
        "Do reusable skills make AI coding assistants more useful on real enterprise code? And how would you tell, beyond a good-looking demo?",
      role:
        "During a pilot I researched Claude Code and reusable skills, built an ESLint-related skill, ran it in two assistants, and compared their behavior with a repeatable scorecard. Separately, I prototyped a triage agent at a hackathon.",
      learned:
        "Treat AI output like any other system under test: fix the inputs, write down the expected behavior, and score it the same way every time. A skill is a small piece of engineering, and it deserves tests like any other code.",
      outcome:
        "The findings informed how reusable skills could be shared and deployed across teams. The value was repeatability and shared learning, not a claim about replacing engineering work.",
      visual: "loop",
      pipeline: [
        { label: "Write the skill", note: "ESLint-focused" },
        { label: "Run in two assistants", note: "Claude Code & Copilot" },
        { label: "Score", note: "same scorecard each run" },
        { label: "Test on real code", note: "sample + live project" },
        { label: "Summarize", note: "findings & readiness" },
      ],
      did: [
        "Researched Claude Code and reusable engineering skills.",
        "Built and tested an ESLint-related skill with both Claude Code and GitHub Copilot.",
        "Compared skill behavior across the two assistants with a repeatable scorecard.",
        "Tested the skill on a sample project and on a live codebase to see how behavior changed with real code.",
        "Researched how reusable skills could be cataloged and shared across teams.",
        "Built a small IT-service-desk triage agent at a hackathon in Python, using an agent development kit (ADK).",
        "Summarized findings and helped think through deployment and enterprise-readiness considerations.",
      ],
      approach:
        "I kept the evaluation boring on purpose: the same skill, the same tasks and the same scorecard for each assistant, run against both a controlled project and a real one.",
      validation:
        "Running the skill against a live codebase, not only a sample project, was the check that made the comparison meaningful.",
    },
    {
      id: "case-integration",
      status: "contributed",
      title: "Multi-source integration",
      kicker:
        "Bringing content from several repositories through validation, caching and a metadata catalog into one API and UI, with identity and secrets handled properly.",
      tags: ["API integration", "Metadata", "Caching", "C# / .NET API", "OAuth", "Azure AD", "Vault", "Vue"],
      problem:
        "Content lived in several separate repositories. The app had to pull from all of them securely, validate and catalog what it found, and work the same way in every environment.",
      role:
        "Working across separate UI and API codebases, I added multi-source support to the API, connected the sources to the UI, and helped with deployment readiness across development, QA and production.",
      learned:
        "Integration work is mostly about the edges: where the data comes from, how it's validated, and who's allowed to read it. Drawing the object model first was the fastest way to line up UI and API work.",
      outcome:
        "The app can draw from multiple source repositories, and its object model is documented in diagrams that make onboarding easier.",
      visual: "pipeline",
      pipeline: [
        { label: "Source repositories", note: "multiple origins" },
        { label: "Ingest & validate", note: "source checks, credentials" },
        { label: "Catalog & metadata", note: "caching" },
        { label: "API", note: "multi-source support" },
        { label: "UI", note: "browse, discover, install" },
      ],
      did: [
        "Added support for multiple source repositories in the API and connected those sources to the UI.",
        "Mapped how sources, metadata, discovery, generated artifacts and tool-specific output relate across the two codebases.",
        "Worked on source validation, caching and secure handling of repository credentials.",
        "Contributed to deployment readiness across development, QA and production: GitHub App connectivity, OAuth login, Azure AD integration, Vault-backed configuration and network access.",
        "Created UML-style object hierarchy and mapping diagrams for the API.",
        "Contributed UI changes and redesign work, including discussions about brand guidelines and WCAG 2.2 accessibility.",
        "Demonstrated the app to senior engineering and architecture stakeholders, and helped junior developers with branch merging and GitHub workflows.",
      ],
      approach:
        "I treated the system as a pipeline and learned each stage before changing it: where content comes from, how it's validated and cataloged, what the API exposes, and what the UI needs. The object diagram came first.",
      validation:
        "I checked behavior one environment at a time (GitHub App connectivity, OAuth login and configuration in development, QA and production) alongside the UI flows that surface each source.",
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
        status: "contributed",
        title: "Frontend framework migration",
        body:
          "Contributed to a Vue 2 → Vue 3 migration (routing, hydration, navigation, filters, modals and shared components) and fixed functional and styling defects along the way.",
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
      evidence: "Assistant evaluations, a triage-agent prototype, and university NLP and federated-learning projects.",
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
      items: ["Vue 3", "TypeScript", "JavaScript", "WCAG 2.2", "UML diagrams", "Technical writing"],
      evidence: "Framework migration, UI fixes, architecture diagrams and process documentation.",
    },
  ];

  var learning = [
    {
      learned: ["SQL Server fundamentals", "Functions & stored procedures", ".NET LINQ for databases"],
      applied: "Tracing schemas, formulas and stored data to find where values diverged.",
    },
    {
      learned: ["Python fundamentals"],
      applied: "Building a triage-agent prototype at a hackathon.",
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
      applied: "Contributing to a Vue 2 → Vue 3 migration and UI redesign work.",
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
      phase: "Foundations",
      title: "Joined an enterprise engineering team as a trainee",
      body:
        "Built foundations in SQL Server, C#, ASP.NET Core, Entity Framework Core and GitHub workflows, then applied them to real application support.",
    },
    {
      phase: "Support & reliability",
      title: "Keeping applications healthy",
      body:
        "Database refreshes, vulnerability fixes, deployments, production support and an authentication modernization.",
    },
    {
      phase: "Data correctness",
      title: "Delivering in a large codebase",
      body:
        "Tracing and fixing calculation and reconciliation issues, framework migration work, releases, and a disaster-recovery exercise.",
    },
    {
      phase: "AI engineering",
      title: "AI-assisted engineering & integration",
      body:
        "Evaluating coding assistants and reusable skills, a triage-agent prototype, and multi-source API integration work.",
    },
    {
      phase: "Now",
      title: "Moving toward AI & data engineering",
      body:
        "Going deeper on SQL and data work, continuing hands-on AI experiments, and learning more of the business domain.",
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
