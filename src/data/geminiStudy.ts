import type { CaseStudy } from '../types/portfolio';

export const geminiStudy: CaseStudy = {
  id: 'google-gemini',
  track: 'teardown',
  trackLabel: 'Product Breakdown & Teardown',
  indexLabel: '03',
  product: 'Google Gemini',
  title: 'Beyond Intelligence: Building an AI Assistant Users Can Trust',
  subtitle: 'Closing the gap between conversational intelligence and dependable task execution.',
  focusLabel: 'AI assistant & ecosystem trust',
  scopeLabel: 'Consumer app · India lens · Nov 2026',
  dateLabel: '14 November 2026',
  thesis:
    'Gemini’s next product challenge is larger than model intelligence: closing the gap between what the assistant says it can do and what it can reliably execute in the user’s current account, device, integration, and interaction context.',
  executiveSummary: {
    hook: 'In a first-hand photo-retrieval test, Gemini shifted between claiming assistant photo access, failing to find a screenshot or last camera photo, and recommending Android Photos/Storage permissions—even when Android App Info showed "No permissions requested".',
    northStar:
      'Weekly Successful User Goals (WSUG) — unique users completing ≥ 1 meaningful goal successfully in a 7-day window (replacing raw prompt volume).',
    mvpScope:
      'P0 Capability Awareness Layer: evaluate account eligibility, Connected Apps / Personal Intelligence state, and current mode support BEFORE promising or attempting execution.',
    keyTradeoff:
      'Make Gemini dependable before expanding autonomous surface area—prioritising capability truthfulness, contextual integration setup, and structured failure recovery over more integrations.',
    evidenceNote:
      'Research cut-off 14 Nov 2026. Screenshots show one observed session (not proof of a universal defect); qualitative scorecard reflects author judgement, not Google internal data.',
  },
  sections: [
    {
      number: '01',
      shortTab: 'Context',
      title: 'Product Context',
      kicker: '01 · Strategy & positioning',
      blocks: [
        {
          type: 'lead',
          text: 'Gemini is Google’s family of AI models and its consumer-facing AI assistant. This teardown focuses on the Gemini consumer app (web and mobile), including multimodal interaction, personalisation, and Connected Apps, while treating Workspace, developer APIs, and enterprise offerings as ecosystem context.',
        },
        {
          type: 'callout',
          title: 'Observed product tension (First-hand photo-retrieval critique)',
          body: 'In supplied user screenshots, Gemini initially described photo access as available via assistant tools, failed to locate a screenshot containing an Instagram ID or the last camera photo, and recommended toggling Android Photos/Storage permissions—even though Android App Info showed "No permissions requested". Google documents Google Photos access via Personal Intelligence / Connected Apps (subject to eligibility and setup), highlighting a gap between capability language, real account state, and troubleshooting guidance.',
          tone: 'amber',
        },
        {
          type: 'table',
          caption: 'Gemini consumer positioning',
          headers: ['Dimension', 'Gemini positioning'],
          rows: [
            ['Core promise', 'AI assistance for learning, work, creativity, research, and everyday tasks.'],
            ['Interaction model', 'Text, voice, Live, images, files, and supported multimodal inputs.'],
            ['Distinctive opportunity', 'Google’s ecosystem (Search, Android, Photos, Workspace, Maps, YouTube) and consent-based personal context.'],
            ['Value proposition', 'Move from answering questions to completing useful tasks with relevant context.'],
            ['Business model', 'Freemium consumer access, paid Google AI plans, plus enterprise and developer tiers.'],
          ],
        },
        {
          type: 'heading',
          text: 'Strategic objectives & core tension',
        },
        {
          type: 'orderedList',
          items: [
            { lead: 'Drive AI adoption:', text: 'Make Gemini accessible via standalone apps and native Google surfaces.' },
            { lead: 'Increase usefulness:', text: 'Support multi-step research, creation, and execution workflows.' },
            { lead: 'Leverage ecosystem context:', text: 'Use connected Google services when explicitly authorised.' },
            { lead: 'Build habitual usage:', text: 'Create repeat everyday utility beyond novelty.' },
            { lead: 'Monetise advanced value:', text: 'Convert power users via higher limits, frontier models, and bundled storage.' },
          ],
        },
      ],
    },
    {
      number: '02',
      shortTab: 'Market',
      title: 'Market & Competition',
      kicker: '02 · Competitive landscape',
      blocks: [
        {
          type: 'paragraph',
          text: 'General-purpose AI assistants compete across reasoning, writing, coding, research, content creation, and multi-step execution. This qualitative positioning comparison reflects capabilities that evolve frequently by plan, region, and platform.',
        },
        {
          type: 'table',
          caption: 'Qualitative competitive positioning (not a model benchmark)',
          headers: ['Product', 'Primary product strength', 'Strategic advantage', 'Potential watch-out'],
          rows: [
            ['Google Gemini', 'Multimodal assistant, Google-service context, research and creation tools.', 'Google distribution and breadth of first-party services.', 'Integration and eligibility complexity can obscure what works in the current context.'],
            ['ChatGPT', 'Broad assistant across search, analysis, writing, voice, apps, and agentic workflows.', 'Strong standalone assistant habit and broad tool ecosystem.', 'Connected tools and plan-gated limits can also introduce complexity.'],
            ['Claude', 'Writing, reasoning, coding, and focused knowledge-work workflows.', 'Strong positioning with developers and structured knowledge work.', 'Less direct ownership of a mass-market consumer device/services ecosystem.'],
            ['Perplexity', 'Research and answer discovery with citation-first synthesis.', 'Clear search/research identity and transparent sourcing.', 'Less positioned as a personal assistant across everyday apps.'],
          ],
        },
        {
          type: 'callout',
          title: 'Competitive thesis',
          body: 'A large integration catalogue is not a moat if users cannot tell which integration is active or how to recover when it fails. Gemini wins by reliably turning user intent into completed outcomes across Google’s ecosystem.',
          tone: 'blue',
        },
      ],
    },
    {
      number: '03',
      shortTab: 'Segments',
      title: 'User Segmentation',
      kicker: '03 · Users & expectations',
      blocks: [
        {
          type: 'table',
          caption: 'Core Gemini user segments',
          headers: ['Segment', 'Primary jobs to be done', 'What creates value', 'Likely friction'],
          rows: [
            ['Students & learners', 'Understand concepts, study, summarise, practise.', 'Clear explanations, tutoring, file understanding.', 'Hallucinations, over-reliance, unclear source quality.'],
            ['Knowledge workers', 'Draft, summarise, plan, analyse, communicate.', 'Workspace integration and document context.', 'Permission setup, workflow breaks, accuracy issues.'],
            ['Creators', 'Brainstorm, write, edit, generate media.', 'Multimodal input, creation tools, fast iteration.', 'Usage limits, inconsistency, tool fragmentation.'],
            ['Developers', 'Understand code, debug, prototype, use APIs.', 'Reasoning, coding support, large context windows.', 'Code reliability, context drift, API cost.'],
            ['Everyday personal-assistant users (Focus)', 'Find info, plan activities, retrieve personal context.', 'Voice, memory, connected apps, task execution.', 'Trust, privacy, unclear capabilities, failed integrations.'],
            ['Enterprise users', 'Search org knowledge, automate workflows.', 'Governance, security, admin controls.', 'Access boundaries, compliance, reliability.'],
          ],
        },
        {
          type: 'heading',
          text: 'Why the everyday personal-assistant segment matters most',
        },
        {
          type: 'paragraph',
          text: 'This segment expects natural-language requests to work seamlessly across personal services—making it the sharpest test of whether Gemini knows what tools are connected, communicates boundaries truthfully, and recovers cleanly when prerequisites are missing.',
        },
      ],
    },
    {
      number: '04',
      shortTab: 'Journeys',
      title: 'Core User Journeys',
      kicker: '04 · End-to-end UX & observed failure',
      blocks: [
        {
          type: 'heading',
          text: 'Five core consumer journeys',
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              kicker: '4.1 & 4.2',
              title: 'Onboarding & Everyday Prompting',
              bullets: [
                'Discover → Enter → Understand capabilities → Activate on first useful outcome',
                'Express intent → Interpret → Respond/clarify → User evaluates or abandons',
              ],
            },
            {
              kicker: '4.3 & 4.4',
              title: 'Research & Creation',
              bullets: [
                'Define topic → Gather sources → Synthesise with citations → Verify facts',
                'Describe output → Generate → Iterate across turns → Export to workflow',
              ],
            },
          ],
        },
        {
          type: 'heading',
          text: '4.5 Connected-App Task Execution (Target Journey)',
        },
        {
          type: 'flowSteps',
          steps: [
            { title: 'Request', description: 'User asks Gemini to retrieve info or act on connected data.' },
            { title: 'Check access', description: 'Gemini checks connected app, eligibility, and current mode.' },
            { title: 'Execute', description: 'Retrieves authorised info or runs the approved action.' },
            { title: 'Confirm', description: 'Reports exact outcome, failures, or missing setup steps.' },
          ],
        },
        {
          type: 'callout',
          title: 'Observed journey failure & how photo retrieval should work',
          body: 'In the tested session, Gemini gave conflicting statements about photo access and pointed to non-existent Android storage permissions. Instead, it should: (1) recognise the request targets the user’s personal Google Photos library; (2) check Personal Intelligence / Google Photos eligibility and connection status; (3) verify whether the active mode (e.g., Live vs. chat) supports the action; and (4) either run the search accurately or give the exact Connected Apps setup pathway.',
          tone: 'red',
        },
      ],
    },
    {
      number: '05',
      shortTab: 'Architecture',
      title: 'Product Architecture & Experience',
      kicker: '05 · Conceptual layers & Personal Intelligence',
      blocks: [
        {
          type: 'paragraph',
          text: 'Public product documentation supports a six-layer conceptual view of the Gemini user experience (not an assertion about Google’s private model-serving internals).',
        },
        {
          type: 'table',
          caption: 'User-visible product architecture layers',
          headers: ['Layer', 'Responsibility', 'User-facing examples'],
          rows: [
            ['Interaction layer', 'Accept user intent and present responses.', 'Text chat, voice, Gemini Live, image and file inputs.'],
            ['Model layer', 'Interpret prompts and reason over outputs.', 'Model selector and plan-dependent model access.'],
            ['Context layer', 'Apply conversation context and authorised personal context.', 'Memory, Personal Intelligence, connected Google apps.'],
            ['Tool / integration layer', 'Connect to supported services and execute actions.', 'Gmail, Google Photos, Calendar, Maps, YouTube (subject to availability).'],
            ['Output layer', 'Present answers, citations, media, and action state.', 'Text, citations, media, files, and execution receipts.'],
            ['Trust & control layer', 'Manage consent, eligibility, privacy, and safety.', 'Connected Apps settings, Personal Intelligence controls, activity settings.'],
          ],
        },
        {
          type: 'callout',
          title: 'Distinguishing Personal Intelligence from OS permissions',
          body: 'Google Photos integration in Gemini operates through Google Account connection (Gemini → Profile/Settings → Personal Intelligence → Connected Apps → Google Photos for eligible accounts/regions), which is fundamentally distinct from Android OS local storage permissions. Conflating the two sends users to dead-end system settings.',
          tone: 'blue',
        },
        {
          type: 'heading',
          text: 'Five governing experience principles',
        },
        {
          type: 'list',
          items: [
            { lead: 'Capability truthfulness:', text: 'Never imply a tool is available before verifying state.' },
            { lead: 'Consent clarity:', text: 'Make data access explicit, scoped, and easy to revoke.' },
            { lead: 'Mode awareness:', text: 'Explain upfront when a task is unsupported in the active surface or mode.' },
            { lead: 'Execution transparency:', text: 'Separate intention, attempt, success, and failure cleanly.' },
            { lead: 'Recoverability:', text: 'Offer the exact next step instead of generic apologies.' },
          ],
        },
      ],
    },
    {
      number: '06',
      shortTab: 'Evaluation',
      title: 'Product Evaluation',
      kicker: '06 · Strengths, critiques & scorecard',
      blocks: [
        {
          type: 'heading',
          text: 'Five critical product critiques',
        },
        {
          type: 'orderedList',
          items: [
            { lead: 'Capability claims ungrounded in live state:', text: 'Assistant conflates capabilities that exist somewhere in Gemini with what is enabled for this user in this mode.' },
            { lead: 'Integration setup lacks context:', text: 'Users should not need to understand Google’s internal product taxonomy to connect an app.' },
            { lead: 'Weak failure diagnosis:', text: '"I couldn’t find it" hides whether the cause is a disconnected app, missing eligibility, unsupported mode, or genuinely absent item.' },
            { lead: 'Cross-surface expectation mismatch:', text: 'Users assume voice, Live, and text share identical tool capabilities.' },
            { lead: 'Confidence vs. execution separation:', text: '"I will check" must reflect real tool invocation rather than conversational fluency.' },
          ],
        },
        {
          type: 'heading',
          text: 'Qualitative scorecard',
        },
        {
          type: 'scorecard',
          disclaimer: 'Portfolio author’s analytical judgement (not measured user ratings or internal Google scores). Requires validation via usability testing and telemetry.',
          items: [
            { dimension: 'Strategic vision', score: 5, maxScore: 5, rationale: 'Strong opportunity to become a personal AI layer across Google services.' },
            { dimension: 'Ecosystem potential', score: 5, maxScore: 5, rationale: 'Unmatched first-party footprint across Android, Search, Photos, Workspace, Maps.' },
            { dimension: 'Personalisation potential', score: 5, maxScore: 5, rationale: 'High upside from Personal Intelligence, subject to consent and reliability.' },
            { dimension: 'Core AI experience', score: 4, maxScore: 5, rationale: 'Broad reasoning, research, coding, and multimodal capability set.' },
            { dimension: 'Journey consistency', score: 3, maxScore: 5, rationale: 'Notable variation across modes, accounts, and rollout tiers.' },
            { dimension: 'Task reliability', score: 3, maxScore: 5, rationale: 'Needs systematic evaluation across connected-app task categories.' },
            { dimension: 'Integration discoverability', score: 2, maxScore: 5, rationale: 'Observed setup guidance sent user to irrelevant Android permissions.' },
            { dimension: 'Capability transparency', score: 2, maxScore: 5, rationale: 'Observed mismatch between claimed photo access and actual execution.' },
          ],
        },
      ],
    },
    {
      number: '07',
      shortTab: 'Growth',
      title: 'Growth & Monetisation',
      kicker: '07 · Distribution & India plan snapshot',
      blocks: [
        {
          type: 'heading',
          text: 'Growth levers & activation funnel',
        },
        {
          type: 'table',
          caption: 'Key acquisition and retention surfaces',
          headers: ['Growth lever', 'Mechanism', 'Contribution'],
          rows: [
            ['Android & mobile', 'Default/prominent assistant entry points.', 'Low-friction awareness and habit entry.'],
            ['Search & Chrome', 'AI assistance inside high-intent search and browsing.', 'Massive top-of-funnel reach.'],
            ['Workspace', 'Gemini embedded inside Gmail, Docs, Calendar, Meet.', 'Repeat workplace utility and subscription value.'],
            ['Creative AI & Personal Intelligence', 'Generative media + authorised context from Google apps.', 'Feature-led acquisition and stickier personal relevance.'],
          ],
        },
        {
          type: 'paragraph',
          text: 'Funnel distinction: sending a first prompt is not activation. Activation should be measured when a new user achieves a meaningful, verified outcome.',
        },
        {
          type: 'heading',
          text: 'India consumer plan snapshot (Checked 14 Nov 2026)',
        },
        {
          type: 'note',
          text: 'Source: Official Google Gemini & Google One India plan pages checked 14 November 2026. Dynamic plan pricing, limits, and inclusions vary over time—verify live pages prior to publication.',
        },
        {
          type: 'table',
          caption: 'Google AI consumer subscription tiers in India (snapshot)',
          headers: ['Plan', 'Displayed price', 'Positioning'],
          rows: [
            ['Free', '₹0 / month', 'Everyday AI access and baseline features.'],
            ['Google AI Plus', '₹399 / month', 'Higher usage, additional AI capabilities, and storage benefit.'],
            ['Google AI Pro', '₹1,950 / month', 'Expanded usage, advanced capabilities, and Google AI benefits.'],
            ['Google AI Ultra', 'Starting at ₹6,500 / month', 'Highest access tiers and premium features (limits vary by tier).'],
          ],
        },
        {
          type: 'paragraph',
          text: 'Key monetisation risks: inference economics on multi-step agentic tasks, free-to-paid differentiation clarity, and trust erosion—users who experience failed personal-data tasks are far less likely to connect more apps or upgrade.',
        },
      ],
    },
    {
      number: '08',
      shortTab: 'Metrics',
      title: 'Metrics & Experimentation',
      kicker: '08 · North Star & 5 priority experiments',
      blocks: [
        {
          type: 'callout',
          title: 'Proposed North Star Metric: Weekly Successful User Goals (WSUG)',
          body: 'Unique users completing at least one meaningful task successfully with Gemini in a 7-day period. Prompt volume can rise when users are stuck correcting errors; goal completion captures real value.',
          tone: 'green',
          code: 'WSUG = unique users with >= 1 successful goal in the last 7 days',
        },
        {
          type: 'table',
          caption: 'Supporting health, trust, and recovery metrics',
          headers: ['Category', 'Metric', 'What it measures'],
          rows: [
            ['Activation', 'First successful task rate & time to first success', 'Share of new users reaching a verified outcome quickly.'],
            ['Integration', 'Connected-app activation rate', 'Eligible users who connect an app and complete a task with it.'],
            ['Engagement & Retention', 'Successful goals per user · D7 / D30 retention', 'Repeat meaningful usage over time.'],
            ['Reliability & Trust', 'Capability accuracy & unsupported-claim rate', 'How often Gemini accurately represents live tool/access availability.'],
            ['Recovery', 'Recovery success rate', 'Share of failed attempts resolved via accurate next-step guidance.'],
            ['Monetisation', 'Free-to-paid conversion & paid retention', 'Conversion to and renewal of paid Google AI plans.'],
          ],
        },
        {
          type: 'heading',
          text: 'Five proposed experiments',
        },
        {
          type: 'table',
          caption: 'Prioritised experimentation roadmap',
          headers: ['Experiment', 'Priority', 'Primary metric', 'Key guardrails'],
          rows: [
            ['1. Capability awareness & transparency', { text: 'High', badge: { label: 'High', tone: 'high' } }, 'Capability accuracy', 'Response latency, false-negative capability blocks.'],
            ['2. Contextual integration onboarding', { text: 'High', badge: { label: 'High', tone: 'high' } }, 'Integration activation rate', 'Consent comprehension, permission revocations, privacy complaints.'],
            ['3. Intelligent failure recovery', { text: 'High', badge: { label: 'High', tone: 'high' } }, 'Recovery success rate', 'Incorrect diagnosis rate, unnecessary permission prompts.'],
            ['4. Cross-mode continuity (text ↔ voice)', { text: 'Medium', badge: { label: 'Medium', tone: 'medium' } }, 'Cross-mode task completion', 'User interventions, abandonment after mode limits.'],
            ['5. Authorised personal assistance', { text: 'Medium', badge: { label: 'Medium', tone: 'medium' } }, 'Task-based retention', 'Incorrect personal assumptions, data-access revocation.'],
          ],
        },
      ],
    },
    {
      number: '09',
      shortTab: 'Strategy',
      title: 'Strategic Recommendations',
      kicker: '09 · Roadmap & execution architecture',
      blocks: [
        {
          type: 'heading',
          text: '9.1 Recommendation 1 — Capability Awareness Layer',
          badge: { label: 'P0 · Highest priority', tone: 'p0' },
        },
        {
          type: 'paragraph',
          text: 'Evaluate every task request against live user context before promising execution: (1) desired outcome, (2) required tools/integrations, (3) account & regional eligibility, (4) Connected Apps authorisation state, (5) current mode support, and (6) required user approval. Surface a concise proposed status indicator ("Available", "Connect Google Photos", "Not supported in this mode", or "Requires approval") with a direct action.',
        },
        {
          type: 'heading',
          text: '9.2 Recommendation 2 — Contextual Integration Onboarding',
          badge: { label: 'P1 · High priority', tone: 'p1' },
        },
        {
          type: 'paragraph',
          text: 'Introduce just-in-time onboarding at the moment of need: explain which service and data are required, route directly to the true settings pathway (never generic OS permissions unless applicable), make disconnection discoverable, and never block unrelated tasks if declined.',
        },
        {
          type: 'heading',
          text: '9.3 Recommendation 3 — Intelligent Failure Recovery & Execution Receipts',
          badge: { label: 'P1 · High priority', tone: 'p1' },
        },
        {
          type: 'table',
          caption: 'Structured failure diagnosis replacing generic apologies',
          headers: ['Failure state', 'Better product response'],
          rows: [
            ['App not connected', 'Name the required app and open the exact Connected Apps setup flow.'],
            ['Unsupported mode', 'Explain the mode limitation and offer a seamless handoff to a supported mode.'],
            ['Account not eligible', 'Explain eligibility/rollout limits honestly without sending users to dead settings.'],
            ['Search returned no match', 'Confirm the search actually ran, state zero matches, and suggest query refinements.'],
            ['Tool execution failed', 'Avoid claiming success; state failure clearly and provide a safe retry.'],
          ],
        },
        {
          type: 'paragraph',
          text: 'Pair recovery with factual Execution Receipts generated directly from tool-execution state (what was searched, changed, unchanged, and final status) rather than LLM prose.',
        },
        {
          type: 'heading',
          text: '9.4 Unified Cross-Mode Experience (P2) & Phased Roadmap',
        },
        {
          type: 'table',
          caption: 'Proposed 12-month product roadmap (author recommendation)',
          headers: ['Horizon', 'Focus', 'Illustrative deliverables'],
          rows: [
            ['0–3 months', 'Trust & transparency', 'Live capability checks, accurate unsupported-mode messages, corrected setup guidance.'],
            ['3–6 months', 'Integration & recovery', 'Just-in-time connection flows, structured failure diagnosis, integration diagnostics.'],
            ['6–12 months', 'Dependable agentic workflows', 'Context-preserving cross-mode transitions, multi-step execution receipts.'],
          ],
        },
        {
          type: 'callout',
          title: 'Conclusion: Three takeaways',
          body: '1) Intelligence does not automatically translate into utility when tools fail. 2) Ecosystem integration is a moat only when seamless and truthful. 3) Trust must be measured as a first-class product metric alongside capability.',
          tone: 'blue',
        },
      ],
    },
  ],
  referencesNote:
    'Research cut-off: 14 November 2026. Official Google support pages, blogs, and SEC filings ground factual statements; qualitative scores, North Star metrics, and roadmap recommendations are independent author judgements.',
  references: [
    {
      id: 'gem-1',
      title: 'Google Gemini — Official Product',
      source: 'Google',
      url: 'https://gemini.google.com/',
    },
    {
      id: 'gem-2',
      title: 'Use and manage Connected Apps in Gemini',
      source: 'Google Help',
      url: 'https://support.google.com/gemini/answer/13695044?hl=en-IN',
    },
    {
      id: 'gem-3',
      title: 'Connect your Google apps to personalise your Gemini experience (Personal Intelligence & Google Photos)',
      source: 'Google Help',
      url: 'https://support.google.com/gemini/answer/16598406?hl=en',
    },
    {
      id: 'gem-4',
      title: 'Talk naturally with Gemini Live (Connected Apps support)',
      source: 'Google Help',
      url: 'https://support.google.com/gemini/answer/15274899?hl=en',
    },
    {
      id: 'gem-5',
      title: 'Personal Intelligence launches in the Gemini app in India (14 Apr 2026)',
      source: 'Google India Blog',
      url: 'https://blog.google/intl/en-in/products/personal-intelligence-launches-in-the-gemini-app-in-india/',
    },
    {
      id: 'gem-6',
      title: 'Google Gemini India Subscription Plans & Google One AI Plans',
      source: 'Google Gemini / Google One (checked 14 Nov 2026)',
      url: 'https://gemini.google/in/subscriptions/?hl=en-IN',
    },
    {
      id: 'gem-7',
      title: 'Alphabet Q3 2026 Earnings Call Remarks & SEC Exhibit 99.1 (28 Oct 2026)',
      source: 'Google / SEC Filing',
      url: 'https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q3-2026/',
    },
    {
      id: 'gem-8',
      title: 'Competitor references: OpenAI · Anthropic · Perplexity',
      source: 'Official Product Sites',
      url: 'https://www.anthropic.com/news/product',
    },
  ],
};
