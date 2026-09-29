/*
 * Portfolio content — the single place to update impact cards, case studies,
 * timeline entries, learning and links. `main.js` renders everything below
 * into the matching sections of index.html.
 *
 * Content rules (keep these when editing):
 *  - First person, strongest accurate verb, no invented metrics or ownership.
 *  - Describe the skill and the lesson, not the product: no employer, product,
 *    application, team or customer names, and no business-specific terms.
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

  var impact = [
    {
      status: "validated",
      title: "Traced a data mismatch to its root cause",
      body:
        "I followed values through the UI, services and SQL, found aggregate results being reused on more granular rows, and rebuilt the calculation per segment.",
      href: "#case-data",
    },
    {
      status: "shipped",
      title: "Replaced a deprecated authentication path",
      body:
        "I moved a scheduled email service to an Azure AD app registration with Vault-backed settings, then confirmed it sent through the production job flow again.",
      href: "#case-auth",
    },
    {
      status: "contributed",
      title: "Integrated multiple sources behind one API",
      body:
        "I added multi-repository source support to an API and connected it to the UI, working across separate codebases.",
      href: "#case-integration",
    },
    {
      status: "contributed",
      title: "Contributed to a Vue 2 → Vue 3 migration",
      body:
        "I worked on routing, hydration, navigation and shared-component fixes while moving a large application to Vue 3.",
      href: "#more-work",
    },
    {
      status: "supported",
      title: "Helped rehearse disaster recovery",
      body:
        "I helped build DR configuration, a deployment workflow, Terraform and Azure AD registration changes, and Vault secret handling, and documented them.",
      href: "#more-work",
    },
  ];

  var caseStudies = [
    {
      id: "case-data",
      status: "validated",
      title: "Data correctness, end to end",
      kicker:
        "Tracing calculation mismatches through a Vue frontend, C# services and SQL in a large enterprise application.",
      tags: ["C# / .NET", "SQL Server", "PostgreSQL", "Vue 3", "TypeScript", "Technical writing"],
      problem:
        "The same records, captured through two different paths, produced different results whenever a record covered more than one segment — and the numbers had to agree.",
      role:
        "I analyzed the process end to end, traced the mismatch to its root cause, implemented the fix, and documented the formulas and the impact of the change.",
      learned:
        "“Almost matching” is a clue, not a rounding error. Aligning with the inputs the UI already trusts fixed more than patching fields one by one would have, and writing the formulas down made every later change faster to review.",
      outcome:
        "Both capture paths now agree on business values for multi-segment records, with only the expected metadata differences, and the process is documented for the next person.",
      visual: "reconcile",
      did: [
        "Mapped a multi-step calculation process across database schemas, formulas, server-side services, UI behavior and stored results.",
        "Traced a mismatch between two capture paths to aggregate-level values being reused for more granular rows.",
        "Implemented per-segment calculations so each row is computed from its own inputs instead of inheriting one aggregate result.",
        "Aligned the server-side calculation with the same input basis the UI uses.",
        "Worked through downstream calculation issues in derived units, revenue and profitability measures, conversion factors and allocations.",
        "Resolved edge cases: null and zero values, past and future records, status-dependent logic, repeated loads, and mismatches between stored data and the UI.",
        "Documented the process, formulas and change impact in functional and technical documentation.",
      ],
      approach:
        "I followed single values through every layer (UI, server-side service, stored data) until I found where the two paths diverged, then fixed the calculation at that point instead of patching columns one at a time.",
      validation:
        "I checked per-segment results against a known multi-segment scenario, confirmed the segments reconcile back to the total, and compared both capture paths field by field before the change moved through QA.",
    },
    {
      id: "case-integration",
      status: "contributed",
      title: "Integration & enterprise readiness",
      kicker:
        "Connecting multiple repository sources, identity and secrets for an internal developer-tooling web app with separate UI and API codebases.",
      tags: ["Vue", "TypeScript", "C# / .NET API", "GitHub Apps", "OAuth", "Azure AD", "Vault", "WCAG 2.2"],
      problem:
        "Content lived in several separate repositories. The app had to pull from all of them securely, with login, credentials and configuration working in every environment.",
      role:
        "Working across the UI and API repositories, I added multi-source support to the API, connected sources to the UI, contributed redesign work, and helped with deployment readiness across development, QA and production.",
      learned:
        "Enterprise readiness is mostly the unglamorous parts: identity, secrets, network paths and credential handling. Drawing the architecture first is often the fastest way to line up UI and API work.",
      outcome:
        "The app can draw from multiple source repositories, and its object model is documented in diagrams that make onboarding easier.",
      visual: "pipeline",
      pipeline: [
        { label: "Source repositories", note: "multiple origins" },
        { label: "Catalog & validation", note: "metadata, checks, caching" },
        { label: "API", note: "multi-source support" },
        { label: "Generated artifacts", note: "per target tool" },
        { label: "UI", note: "browse, discover, install" },
      ],
      did: [
        "Contributed UI changes and redesign work while preserving existing content and functionality.",
        "Added support for multiple source repositories in the API and connected those sources to the UI.",
        "Mapped how discovery, source repositories, metadata, generated artifacts and tool-specific output relate across the two codebases.",
        "Contributed to deployment readiness across development, QA and production: GitHub App connectivity, OAuth login behavior and environment configuration.",
        "Worked on enterprise-readiness concerns: Azure AD integration, Vault-backed configuration, network access, source validation, caching and secure handling of repository credentials.",
        "Created UML-style object hierarchy and mapping diagrams for the API.",
        "Took part in UI discussions about brand guidelines and WCAG 2.2 accessibility expectations.",
        "Demonstrated the app to senior engineering and architecture stakeholders, and helped junior developers with branch merging and GitHub workflows.",
      ],
      approach:
        "I treated the system as a pipeline and learned each stage before changing it: where content comes from, how it's cataloged, what the API exposes, and what each target tool needs. Drawing the object hierarchy first made the multi-source change much easier to reason about.",
      validation:
        "I checked behavior one environment at a time (GitHub App connectivity, OAuth login and configuration in development, QA and production) alongside the UI flows that surface each source.",
    },
    {
      id: "case-ai",
      status: "explored",
      title: "Evaluating AI-assisted engineering",
      kicker:
        "Practical, measured experiments with Claude Code, GitHub Copilot and reusable assistant skills.",
      tags: ["Claude Code", "GitHub Copilot", "Reusable skills", "ESLint", "ADK", "Python", "Evaluation"],
      problem:
        "Do reusable skills make coding assistants more useful on real enterprise code? And how would you tell, beyond a good-looking demo?",
      role:
        "During a pilot I researched Claude Code and reusable skills, built and tested an ESLint-related skill with two assistants, and compared their behavior with a repeatable scorecard.",
      learned:
        "Assistants are most useful when the task is well scoped and the expected behavior is written down. A skill is a small piece of engineering, so it deserves tests and a scorecard like any other code.",
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
        "Built a small IT-service-desk triage prototype at a hackathon using an agent development kit (ADK).",
        "Summarized findings and helped think through deployment and enterprise-readiness considerations.",
      ],
      approach:
        "I kept the evaluation boring on purpose: the same skill, the same tasks and the same scorecard for each assistant, run against both a controlled project and a real one.",
      validation:
        "Running the skill against a live codebase, not only a sample project, was the check that made the comparison meaningful.",
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
        status: "contributed",
        title: "Frontend framework migration",
        body:
          "Contributed to a Vue 2 → Vue 3 migration (routing, hydration, navigation, filters, modals and shared components) and fixed functional and styling defects along the way.",
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
        title: "Production support",
        body:
          "Resolved issues involving directory/API synchronization, report ordering, database refreshes, application configuration and user-facing behavior.",
      },
      {
        status: "supported",
        title: "Knowledge transfer & enablement",
        body:
          "Supported knowledge transfer between teams, and helped other developers with deployment setup, branch merging and GitHub workflows.",
      },
    ],
  };

  var approach = [
    { step: "Diagnose", text: "Reproduce the symptom, then follow one value through UI, service and database until the paths diverge." },
    { step: "Design", text: "Match the source of truth: align calculations and configuration with the path users already trust." },
    { step: "Implement", text: "Make targeted changes, such as a per-segment calculation, a new auth path or a multi-source API." },
    { step: "Validate", text: "Compare against a known scenario, reconcile parts to the whole, and prove it in QA first." },
    { step: "Document", text: "Write down formulas, change impact and resolution steps so the next person starts ahead." },
    { step: "Deploy", text: "Plan the release, resolve conflicts, prepare rollback and hypercare, and follow the change into production." },
  ];

  var toolkit = [
    {
      group: "Backend",
      items: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "LINQ", "VB.NET"],
      evidence: "Calculation services, data-correctness fixes, Vault-backed authentication.",
    },
    {
      group: "Frontend",
      items: ["Vue 3", "Vue 2 → 3 migration", "TypeScript", "JavaScript", "HTML & CSS", "WCAG 2.2"],
      evidence: "Framework migration, UI defect fixes and redesign work.",
    },
    {
      group: "Data",
      items: ["SQL Server", "Stored procedures", "PostgreSQL", "PL/SQL", "Python"],
      evidence: "Tracing schemas, formulas and stored data during root-cause analysis.",
    },
    {
      group: "Cloud & platform",
      items: ["GitHub Actions", "Azure AD", "Vault", "Docker", "Kubernetes / GitOps", "Terraform"],
      evidence: "DR configuration, app registrations, secrets, multi-environment releases.",
    },
    {
      group: "Developer productivity",
      items: ["Claude Code", "GitHub Copilot", "Reusable skills", "Evaluation scorecards", "UML & technical docs"],
      evidence: "Assistant evaluations, architecture diagrams, process documentation.",
    },
  ];

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
        "Built foundations in C#, SQL Server, ASP.NET Core, Entity Framework Core and GitHub workflows, then applied them to real application support.",
    },
    {
      phase: "Support & reliability",
      title: "Keeping applications healthy",
      body:
        "Vulnerability fixes, deployments, production support and an authentication modernization.",
    },
    {
      phase: "Enterprise engineering",
      title: "Delivering in a large codebase",
      body:
        "Vue 3 migration work, calculation analysis and fixes, releases, and a disaster-recovery exercise.",
    },
    {
      phase: "Developer productivity",
      title: "AI-assisted engineering & internal tooling",
      body:
        "Evaluating coding assistants and reusable skills, a hackathon prototype, and UI/API integration work.",
    },
    {
      phase: "Now",
      title: "Deepening domain expertise",
      body:
        "Learning more of the business domain and continuing the Vue 3 path alongside delivery work.",
      current: true,
    },
  ];

  var learning = [
    {
      learned: ["C# fundamentals", "ASP.NET Core fundamentals", "ASP.NET Core with EF Core", ".NET LINQ for databases"],
      applied: "Reading and changing server-side services and calculation logic.",
    },
    {
      learned: ["SQL Server fundamentals", "Functions & stored procedures"],
      applied: "Tracing schemas, formulas and stored data to find where values diverged.",
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
      learned: ["Python fundamentals"],
      applied: "Prototyping an IT-service-desk triage agent at a hackathon.",
    },
    {
      learned: ["Engaging Leader Behaviour"],
      applied: "Stakeholder demos, knowledge transfer, and supporting junior developers.",
    },
    {
      learned: ["VB.NET fundamentals"],
      inProgress: ["Business-domain onboarding"],
      applied: "Broadening my .NET range and the business context behind the code I change.",
    },
  ];

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
    impact: impact,
    caseStudies: caseStudies,
    moreWork: moreWork,
    approach: approach,
    toolkit: toolkit,
    timeline: timeline,
    learning: learning,
    earlierProjects: earlierProjects,
  };
})();
