/*
 * Portfolio content — the single place to update projects, tags, timeline
 * entries, learning and links. `main.js` renders everything below into the
 * matching sections of index.html.
 *
 * Content rules (keep these when editing):
 *  - First person, strongest accurate verb, no invented metrics or ownership.
 *  - `status` must be one of the keys in STATUS below, so readers can tell
 *    shipped work from contributions, support, and exploration.
 *  - No customer names, ticket IDs, internal URLs, hostnames or secrets.
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
      title: "Made multi-market snapshots reconcile",
      body:
        "I traced forecast-vs-import snapshot mismatches to aggregate values being reused on market rows, then rebuilt the calculation per planning group × market.",
      href: "#case-srm",
    },
    {
      status: "shipped",
      title: "Restored HR greeting emails",
      body:
        "I replaced a deprecated SharePoint authentication path with an Azure AD app registration and Vault-backed settings, then confirmed emails sent through the production job flow again.",
      href: "#case-greetings",
    },
    {
      status: "contributed",
      title: "Connected multiple skill sources to one marketplace",
      body:
        "I added multi-repository source support to the Skills Marketplace API and connected skill repositories to the UI.",
      href: "#case-marketplace",
    },
    {
      status: "contributed",
      title: "Moved planner screens to Vue 3",
      body:
        "I contributed routing, hydration, navigation and shared-component fixes to a Vue 2 → Vue 3 migration of an enterprise planning app.",
      href: "#case-srm",
    },
    {
      status: "supported",
      title: "Helped rehearse disaster recovery",
      body:
        "I helped build the DR configuration, deployment workflow, Terraform and Azure AD registration changes, and Vault secret handling — and documented them.",
      href: "#case-srm",
    },
  ];

  var caseStudies = [
    {
      id: "case-srm",
      status: "validated",
      title: "SRM planning engine",
      kicker:
        "Vue 3 frontend, C# services, snapshot calculations and releases for an enterprise revenue-management planning application.",
      tags: ["C# / .NET", "Vue 3", "TypeScript", "SQL Server", "PostgreSQL", "GitHub Actions", "Terraform", "Azure AD", "Vault"],
      problem:
        "When the same multi-market plan was captured through the forecast path and the import path, the snapshots disagreed on business columns — and the planner UI still had defects left over from a framework migration.",
      role:
        "I contributed to the Vue 3 migration, analyzed the snapshot process end to end, implemented the market-level calculation fix, and supported QA, releases and a disaster-recovery exercise.",
      outcome:
        "Multi-market forecast snapshots now reconcile with import snapshots on business columns, while the expected capture-type metadata differences remain. The process, formulas and change impact are documented.",
      visual: "reconcile",
      did: [
        "Contributed to the Vue 2 → Vue 3 migration: routing, hydration fixes, navigation, planner preferences, base price, new item, pitch sheet, admin, deal, filter, modal and shared component behavior.",
        "Fixed functional and styling defects across planner and merchandising flows — deal screens, EDLP, categories, volume options, mass edit, overlays and scenario planning.",
        "Analyzed the snapshot process end to end: database schemas, formulas, metric calculations, server-side services, UI behavior and captured data.",
        "Traced the forecast/import mismatch to aggregate, customer-level values being reused for market-level rows.",
        "Implemented market-level calculations that build one metrics bundle per planning group × market instead of resolving one aggregate bundle for every market row.",
        "Worked through downstream calculation issues: incremental units, revenue, profitability, equivalent-case factors, customer P&L, case-pack quantity, paid-on allocations, case upcharge, overlay/menu cost and modeled base price.",
        "Resolved snapshot edge cases — null and zero values, past and future plans, payment status, market-level nulls, volume columns, paid-on factors, multiple loads and snapshot/UI mismatches.",
        "Debugged production intake issues and delivered targeted fixes, including overlay comment and update behavior.",
        "Supported QA validation, deployment planning, conflict resolution, production releases, rollback/hypercare planning, and migration of changes into the merchandising pipeline.",
        "Helped create disaster-recovery configuration: the deployment workflow, Terraform and Azure AD registration changes, Vault secret handling and supporting documentation.",
      ],
      approach:
        "I followed single values through every layer — UI, server-side service, snapshot tables — until I found where the paths diverged. The fix was to align the server calculation to the same input basis the client/UI path uses, scoped per market, rather than patching columns one at a time.",
      validation:
        "I checked per-market results against a known multi-market scenario, confirmed the market values reconcile back to the aggregate, and compared forecast captures with import captures column by column before the change moved through QA.",
      learned:
        "In calculation-heavy systems, “almost matching” is a clue, not a rounding error. Writing the formulas down alongside the change made the next reviewer's job — and my own debugging — much faster.",
    },
    {
      id: "case-marketplace",
      status: "contributed",
      title: "SWE Skills Marketplace",
      kicker:
        "An internal application that makes reusable engineering skills discoverable and installable across different coding assistants.",
      tags: ["Vue", "TypeScript", "C# / .NET API", "GitHub Apps", "OAuth", "Azure AD", "Vault", "WCAG 2.2"],
      problem:
        "Reusable engineering skills lived in separate repositories and weren't easy to find, trust or install for each coding assistant developers actually use.",
      role:
        "I worked across the separate UI and API repositories — UI redesign work, multi-repository source support in the API, connecting skills to the UI, and helping the app get ready for development, QA and production.",
      outcome:
        "The marketplace can draw from multiple source repositories, new skills are connected to the UI, and the API's object model is documented in diagrams that make onboarding easier.",
      visual: "pipeline",
      pipeline: [
        { label: "Skill source repos", note: "multiple repositories" },
        { label: "Catalog & discovery", note: "metadata, validation, caching" },
        { label: "API", note: "multi-source support" },
        { label: "Install artifacts", note: "per coding assistant" },
        { label: "UI", note: "browse, discover, install" },
      ],
      did: [
        "Contributed UI changes and redesign work while preserving existing content and functionality.",
        "Helped connect skills repositories to the UI and added support for multiple source repositories in the API.",
        "Mapped how discovery, repository sources, skill metadata, installation artifacts and assistant-specific output relate across the UI and API repositories.",
        "Contributed to deployment readiness across development, QA and production — GitHub app connectivity, OAuth/login behavior and environment configuration.",
        "Worked on enterprise-readiness concerns: Azure AD integration, Vault-backed configuration, network access, source validation, caching and secure handling of repository credentials.",
        "Created UML-style object hierarchy and mapping diagrams for the API repository.",
        "Added and connected new skills to the UI.",
        "Took part in UI discussions about brand guidelines and WCAG 2.2 accessibility expectations.",
        "Demonstrated the marketplace to senior engineering and AI-architecture stakeholders, and helped junior developers with branch merging and GitHub workflows.",
      ],
      approach:
        "I treated the system as a pipeline and learned each stage before changing it: where skills come from, how they're cataloged, what the API exposes, and what each assistant needs installed. Drawing the object hierarchy first made the multi-source change much easier to reason about.",
      validation:
        "I checked behavior environment by environment — GitHub app connectivity, OAuth login and configuration in development, QA and production — alongside the UI flows that surface each source's skills.",
      learned:
        "Enterprise readiness is mostly the unglamorous parts: identity, secrets, network paths and credential handling. A clear diagram is often the fastest way to align UI and API work.",
    },
    {
      id: "case-ai",
      status: "explored",
      title: "AI-assisted engineering",
      kicker:
        "Practical experiments with Claude Code, GitHub Copilot and reusable skills — measured, not hyped.",
      tags: ["Claude Code", "GitHub Copilot", "Reusable skills", "ESLint", "ADK", "Python", "Evaluation"],
      problem:
        "Do reusable skills make coding assistants more useful on real enterprise code — and how would you tell, beyond a good-looking demo?",
      role:
        "During an internal pilot I researched Claude Code and reusable skills, built and tested an ESLint-related skill with two assistants, and compared their behavior using a repeatable scorecard.",
      outcome:
        "The findings fed into the reusable-skills marketplace idea and into thinking about how skills could be deployed responsibly across the organization. The value was repeatability and shared learning, not a claim about replacing engineering work.",
      visual: "loop",
      pipeline: [
        { label: "Write the skill", note: "ESLint-focused" },
        { label: "Run in two assistants", note: "Claude Code & Copilot" },
        { label: "Score", note: "same scorecard each run" },
        { label: "Test on real code", note: "dummy + live project" },
        { label: "Summarize", note: "findings & readiness" },
      ],
      did: [
        "Researched Claude Code and reusable engineering skills during the internal pilot.",
        "Built and tested an ESLint-related skill using both Claude Code and GitHub Copilot.",
        "Compared skill behavior across the two assistants with a repeatable scorecard.",
        "Tested the skill on a dummy project and on a live enterprise project to see how behavior changed with real code.",
        "Researched and contributed to the idea of a reusable skills marketplace.",
        "Built a small ITSM triage prototype during a HackAIthon using an agent development kit (ADK).",
        "Summarized findings and helped think through deployment and enterprise-readiness considerations.",
      ],
      approach:
        "I kept the evaluation boring on purpose: the same skill, the same tasks and the same scorecard for each assistant, run against both a controlled project and a real one.",
      validation:
        "Running the skill against a live enterprise codebase — not only a dummy project — was the check that made the comparison meaningful.",
      learned:
        "Assistants are most useful when the task is well-scoped and the expected behavior is written down. A skill is a small piece of engineering, so it deserves tests and a scorecard like any other.",
    },
  ];

  var moreWork = {
    feature: {
      id: "case-greetings",
      status: "shipped",
      title: "HR greetings service — authentication modernization",
      summary:
        "Birthday and service-anniversary emails had stopped sending because the application relied on a deprecated SharePoint authentication method.",
      steps: [
        { label: "Investigate", text: "I traced the delivery failure to the deprecated authentication path." },
        { label: "Coordinate", text: "I worked with platform and support teams to establish the required access and conditions." },
        { label: "Rebuild", text: "I built a new approach using an Azure AD app registration and Vault-backed settings, and updated the code for Vault authentication." },
        { label: "Validate", text: "I updated the QA scheduled jobs and confirmed emails were sent through the production job flow again." },
        { label: "Document", text: "I wrote up the resolution so future support starts from a known fix." },
      ],
      tags: ["C# / .NET", "Azure AD", "Vault", "SharePoint", "Scheduled jobs"],
    },
    cards: [
      {
        status: "supported",
        title: "Security & reliability",
        body:
          "Fixed or helped resolve vulnerabilities, image-checker findings, deployment problems and reliability issues in a corporate responsibility portal and other applications.",
      },
      {
        status: "contributed",
        title: "Modernization & environments",
        body:
          "Contributed to application modernization, environment fixes, and QA and production deployment support.",
      },
      {
        status: "supported",
        title: "Production support",
        body:
          "Resolved issues involving directory/API synchronization, report ordering, database refreshes, application configuration and user-facing behavior.",
      },
      {
        status: "contributed",
        title: "Credit-data integration",
        body:
          "Helped with enhancements, debugging, vulnerability fixes, deployments and knowledge transfer for an application integrating an external credit-data service.",
      },
      {
        status: "supported",
        title: "Developer enablement",
        body:
          "Helped other developers with deployment setup, branch merging and understanding GitHub workflows.",
      },
    ],
  };

  var approach = [
    { step: "Diagnose", text: "Reproduce the symptom, then follow one value through UI, service and database until the paths diverge." },
    { step: "Design", text: "Match the source of truth — align calculations and configuration with the path users already trust." },
    { step: "Implement", text: "Make targeted changes: a per-market bundle, a new auth path, a multi-source API." },
    { step: "Validate", text: "Compare against a known scenario, reconcile parts to the whole, and prove it in QA first." },
    { step: "Document", text: "Write down formulas, change impact and resolution steps so the next person starts ahead." },
    { step: "Deploy", text: "Plan the release, resolve conflicts, prepare rollback and hypercare, and follow the change into production." },
  ];

  var toolkit = [
    {
      group: "Backend",
      items: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "LINQ", "VB.NET"],
      evidence: "Snapshot calculation services, market-level fixes, Vault-backed authentication.",
    },
    {
      group: "Frontend",
      items: ["Vue 3", "Vue 2 → 3 migration", "TypeScript", "JavaScript", "HTML & CSS", "WCAG 2.2"],
      evidence: "Planner and merchandising screens, Skills Marketplace UI.",
    },
    {
      group: "Data",
      items: ["SQL Server", "Stored procedures", "PostgreSQL", "PL/SQL", "Python"],
      evidence: "Tracing schemas, formulas and captured data during snapshot analysis.",
    },
    {
      group: "Cloud & platform",
      items: ["GitHub Actions", "Azure AD", "Vault", "Docker", "Kubernetes / GitOps", "Terraform"],
      evidence: "DR configuration, app registrations, secrets, multi-environment releases.",
    },
    {
      group: "Developer productivity",
      items: ["Claude Code", "GitHub Copilot", "Reusable skills", "Evaluation scorecards", "UML & technical docs"],
      evidence: "Skills pilot, Skills Marketplace, architecture diagrams, process documentation.",
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
      title: "Joined DnA as a software engineering trainee",
      body:
        "Built foundations in C#, SQL Server, ASP.NET Core, Entity Framework Core and GitHub workflows, then applied them to real application support.",
    },
    {
      phase: "Support & reliability",
      title: "Keeping applications healthy",
      body:
        "Vulnerability fixes, deployments, production support and the HR greetings authentication modernization.",
    },
    {
      phase: "Enterprise engineering",
      title: "SRM planning engine",
      body:
        "Vue 3 migration work, snapshot calculation analysis and fixes, releases, and a disaster-recovery exercise.",
    },
    {
      phase: "Developer productivity",
      title: "AI-assisted engineering & the Skills Marketplace",
      body:
        "Claude Code pilot research, skill evaluations, a HackAIthon prototype, and UI/API work on the marketplace.",
    },
    {
      phase: "Now",
      title: "Deepening domain expertise",
      body:
        "Continuing SRM onboarding and the Vue 3 learning path alongside delivery work.",
      current: true,
    },
  ];

  var learning = [
    {
      learned: ["C# fundamentals", "ASP.NET Core fundamentals", "ASP.NET Core with EF Core", ".NET LINQ for databases"],
      applied: "Reading and changing server-side snapshot services and calculation logic.",
    },
    {
      learned: ["SQL Server fundamentals", "Functions & stored procedures"],
      applied: "Tracing schemas, formulas and captured data to find where snapshot values diverged.",
    },
    {
      learned: ["GitHub workflows", "Associate Cloud Engineer track"],
      applied: "Deployment workflows, DR configuration, environment set-up, and helping others merge and deploy.",
    },
    {
      learned: ["React beginner path", "Angular beginner path"],
      inProgress: ["Vue 3 path"],
      applied: "Contributing to the Vue 2 → Vue 3 migration and marketplace UI work.",
    },
    {
      learned: ["Python fundamentals"],
      applied: "Prototyping an ITSM triage agent during a HackAIthon.",
    },
    {
      learned: ["Engaging Leader Behaviour"],
      applied: "Stakeholder demos, knowledge transfer, and supporting junior developers.",
    },
    {
      learned: ["VB.NET fundamentals"],
      inProgress: ["SRM onboarding & domain depth"],
      applied: "Broadening the .NET range and the business context behind the code I change.",
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
      body: "Runner-up at the IIT Madras Road Safety Hackathon — a helmet designed to protect riders and summon help after an accident.",
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
