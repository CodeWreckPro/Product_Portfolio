import type { CaseStudy } from '../types/portfolio';

export const stravaStudy: CaseStudy = {
  id: 'strava',
  track: 'teardown',
  trackLabel: 'Product Breakdown & Teardown',
  indexLabel: '04',
  product: 'Strava',
  title: 'Turning FOMO into Fitness',
  subtitle: 'How social comparison, asynchronous participation and achievement recognition turn individual effort into collective momentum.',
  focusLabel: 'Social fitness & habit loops',
  scopeLabel: 'Behavioural loop · Social product strategy',
  dateLabel: 'November 2026',
  thesis:
    'Strava transforms isolated physical exercise into a collective social experience. By making personal effort visible, measurable, and socially rewarding asynchronously, it turns friendly FOMO into durable fitness habits.',
  executiveSummary: {
    hook: 'People rarely quit fitness because tracking fails—they quit because exercising alone loses accountability and social recognition.',
    northStar:
      'Weekly Active Athletes completing at least one recorded activity—ensuring social engagement translates into real physical movement.',
    mvpScope:
      'Async Crew Goals (P0, RICE 4.00): private groups of 3–8 friends sharing a flexible weekly collective distance/activity target without real-time schedule coordination or competitive leaderboards.',
    keyTradeoff:
      'Balance motivating social comparison against toxic pressure: ship participation-first Async Crew Goals before competitive rankings, and surface Healthy Motivation Controls for beginners.',
    evidenceNote:
      'Independent analysis grounded in Strava product & Year in Sport materials; RICE scores and 4-week experiment thresholds are illustrative analytical assumptions.',
  },
  sections: [
    {
      number: '01',
      shortTab: 'Overview',
      title: 'Product Overview',
      kicker: '01 · Ecosystem & business model',
      blocks: [
        {
          type: 'lead',
          text: 'Founded in 2009 to recreate the camaraderie and friendly competition of team sports, Strava is a cross-device activity tracking and social networking platform spanning running, cycling, walking, and multi-sport movement.',
        },
        {
          type: 'table',
          caption: 'Multi-stakeholder value proposition',
          headers: ['Stakeholder', 'Value proposition'],
          rows: [
            ['Athletes', 'Track performance, build consistent habits, and earn recognition.'],
            ['Friends & communities', 'Stay connected through shared activities without exercising at the same time.'],
            ['Competitive athletes', 'Compare segments, personal records, and longitudinal progress.'],
            ['Brands & urban planners', 'Sponsored challenges/segments; aggregated Strava Metro insights for active transport planning.'],
          ],
        },
        {
          type: 'heading',
          text: 'Core ecosystem & freemium model',
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              kicker: 'Free Participation',
              title: 'Core tracking & social loop',
              body: 'GPS recording, social activity feed, Kudos, comments, clubs, and basic community participation.',
            },
            {
              kicker: 'Subscription & Partnerships',
              title: 'Analytics, coaching & Metro',
              body: 'Advanced training analytics, route tools, goals, Runna coaching acquisition, sponsored challenges, and Strava Metro data services.',
            },
          ],
        },
        {
          type: 'callout',
          title: 'Competitive moat vs. Garmin, Nike Run Club, Komoot & Apple Fitness+',
          body: 'Device apps win on hardware telemetry or guided workouts, but Strava owns the cross-device social graph—making it valuable alongside whichever watch or phone an athlete uses.',
          tone: 'blue',
        },
      ],
    },
    {
      number: '02',
      shortTab: 'Research',
      title: 'User Research',
      kicker: '02 · Segments, JTBD & behavioural insights',
      blocks: [
        {
          type: 'table',
          caption: 'Key athlete segments',
          headers: ['User segment', 'Primary motivation', 'Key need'],
          rows: [
            ['Beginners', 'Building healthy habits', 'Encouragement and consistency without intimidation'],
            ['Recreational athletes', 'Enjoyment & social connection', 'Community and recognition'],
            ['Competitive athletes', 'Improving performance', 'Analytics, segments, and benchmarks'],
            ['Outdoor explorers', 'Discovering new places', 'Routes, heatmaps, and navigation'],
            ['Multi-sport enthusiasts', 'Tracking overall progress', 'Cross-device activity consolidation'],
          ],
        },
        {
          type: 'heading',
          text: 'Jobs to Be Done (JTBD)',
        },
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              kicker: 'Functional Jobs',
              title: 'Measure & route',
              bullets: ['Track physical activities', 'Measure improvement over time', 'Discover safe routes', 'Maintain routine'],
            },
            {
              kicker: 'Emotional Jobs',
              title: 'Feel rewarded',
              bullets: ['Feel accomplished post-effort', 'Stay motivated when exercise feels repetitive', 'Build confidence in progress'],
            },
            {
              kicker: 'Social Jobs',
              title: 'Belong & share',
              bullets: ['Share milestones credibly', 'Receive Kudos & recognition', 'Compete playfully', 'Feel connected while training solo'],
            },
          ],
        },
        {
          type: 'heading',
          text: 'Three behavioural insights',
        },
        {
          type: 'orderedList',
          items: [
            { lead: 'Social comparison & FOMO:', text: 'Seeing friends log activities creates immediate social proof that nudges inactive users to move.' },
            { lead: 'Recognition reinforces effort:', text: 'Kudos and comments convert solitary sweat into visible social validation.' },
            { lead: 'Community without schedule alignment:', text: 'Friends can belong to the same fitness moment asynchronously across different hours and cities.' },
          ],
        },
        {
          type: 'note',
          text: 'Strava’s Year in Sport reporting highlights growth in everyday activities such as walking, reinforcing why Strava should be evaluated as a broad activity community rather than solely an elite racing app.',
        },
      ],
    },
    {
      number: '03',
      shortTab: 'Problems',
      title: 'Problem Identification',
      kicker: '03 · Unmet needs & opportunities',
      blocks: [
        {
          type: 'table',
          caption: 'Underlying fitness and social friction',
          headers: ['Problem', 'Why it matters'],
          rows: [
            ['Inconsistent motivation', 'Solo fitness goals easily become repetitive and stall.'],
            ['Lack of social accountability', 'Users struggle to stay consistent without peer encouragement.'],
            ['Schedule coordination friction', 'Friends rarely share free time to work out together live.'],
            ['Limited recognition', 'Hard milestones feel hollow without peer acknowledgement.'],
            ['Competitive intimidation', 'Constant pace/leaderboard comparison discourages beginners or encourages overtraining.'],
          ],
        },
        {
          type: 'quote',
          text: 'How might we make physical activity a socially rewarding and sustainable habit without requiring people to exercise together or compete constantly?',
          attribution: 'Core Problem Statement',
        },
        {
          type: 'note',
          text: 'Credibility qualification: Recorded GPS and device telemetry provide structured activity context rather than tamper-proof verification (GPS drift, connected devices, and manual entries vary).',
        },
      ],
    },
    {
      number: '04',
      shortTab: 'Journey',
      title: 'User Journey',
      kicker: '04 · Journey friction & behavioural loop',
      blocks: [
        {
          type: 'heading',
          text: 'Core user journey (Recreational runner building a habit)',
        },
        {
          type: 'flowSteps',
          steps: [
            { title: 'Discover & onboard', description: 'Finds Strava via friends; friction if social graph is initially empty.' },
            { title: 'Connect & configure', description: 'Follows friends, joins clubs, pairs watch/phone; setup friction possible.' },
            { title: 'Record activity', description: 'Logs GPS distance, pace, elevation; sensitive to battery & GPS accuracy.' },
            { title: 'Share achievement', description: 'Reviews summary and posts to feed; privacy zone clarity matters.' },
            { title: 'Social reinforcement', description: 'Receives Kudos & comments; low engagement weakens motivation.' },
            { title: 'Return & improve', description: 'Sees feed, compares progress, joins challenges; watch competitive pressure.' },
          ],
        },
        {
          type: 'heading',
          text: 'Core behavioural feedback loop',
        },
        {
          type: 'feedbackLoop',
          nodes: [
            'See others exercising',
            'Feel motivated (FOMO)',
            'Complete an activity',
            'Share achievement',
            'Receive recognition (Kudos)',
          ],
        },
        {
          type: 'paragraph',
          text: 'This self-reinforcing loop turns Strava from a passive utility tracker into a social habit engine.',
        },
      ],
    },
    {
      number: '05',
      shortTab: 'Solutions',
      title: 'Proposed Solutions',
      kicker: '05 · Inclusive & sustainable social loops',
      blocks: [
        {
          type: 'heading',
          text: '5.1 Async Crew Goals',
          badge: { label: 'Primary opportunity', tone: 'p0' },
        },
        {
          type: 'paragraph',
          text: 'Evolve Strava’s existing group challenges into recurring, small-group targets (e.g., 5 friends aiming for a collective 40 km week) where everyone contributes on their own schedule—emphasising shared participation rather than speed rankings.',
        },
        {
          type: 'heading',
          text: '5.2 Context-Rich Achievement Sharing',
        },
        {
          type: 'paragraph',
          text: 'Customisable external share cards combining distance, pace, route map, personal records, explicit activity source (GPS/watch), and map-masking privacy controls so achievements carry credible context off-platform.',
        },
        {
          type: 'heading',
          text: '5.3 Healthy Motivation Controls',
        },
        {
          type: 'list',
          items: [
            { text: 'Let beginners prioritise personal consistency over public pace leaderboards.' },
            { text: 'Customise feed emphasis, celebrate streaks/consistency, and prompt healthy rest & recovery.' },
            { text: 'Support private, non-competitive friend challenges to keep motivation sustainable.' },
          ],
        },
      ],
    },
    {
      number: '06',
      shortTab: 'Prioritise',
      title: 'Prioritisation',
      kicker: '06 · Illustrative RICE & MVP scope',
      blocks: [
        {
          type: 'formula',
          expression: 'RICE = (Reach × Impact × Confidence) / Effort',
          caption: 'Illustrative relative scores for analytical comparison (Reach/Effort 1–10; Impact 0.5–3), not internal Strava data.',
        },
        {
          type: 'table',
          caption: 'RICE comparison of proposed opportunities',
          headers: ['Proposed solution', 'Reach', 'Impact', 'Confidence', 'Effort', 'RICE Score'],
          rows: [
            [{ text: 'Async Crew Goals', bold: true }, '8', '2', '75%', '3', { text: '4.00 · P0', badge: { label: '4.00 · P0', tone: 'p0' } }],
            ['Healthy Motivation Controls', '7', '1.5', '70%', '3', { text: '2.45 · P1', badge: { label: '2.45 · P1', tone: 'p1' } }],
            ['Context-Rich Achievement Sharing', '6', '1', '80%', '2', { text: '2.40 · P1', badge: { label: '2.40 · P1', tone: 'p1' } }],
          ],
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              kicker: 'MVP Scope · Async Crew Goals',
              title: 'Validate shared participation first',
              bullets: [
                'Private crews of 3–8 members',
                'Weekly collective activity goals',
                'Flexible individual contribution anytime',
                'Shared progress tracker & milestone nudges',
                'Weekly crew recap',
              ],
            },
            {
              kicker: 'Deferred from MVP',
              title: 'Keep beginners unintimidated',
              bullets: [
                'Complex intra-crew speed leaderboards',
                'Detailed competitive member rankings',
                'Public discovery directories for private crews',
              ],
            },
          ],
        },
      ],
    },
    {
      number: '07',
      shortTab: 'Metrics',
      title: 'Success Metrics',
      kicker: '07 · North Star, KPIs & guardrails',
      blocks: [
        {
          type: 'callout',
          title: 'North Star Metric: Weekly Active Athletes completing ≥ 1 recorded activity',
          body: 'Measures whether social loops actually convert screen engagement into real physical activity.',
          tone: 'green',
        },
        {
          type: 'table',
          caption: 'Supporting funnel & community KPIs',
          headers: ['Category', 'Metric', 'What it measures'],
          rows: [
            ['Acquisition & Activation', 'New sign-ups · First activity recorded', 'Top-of-funnel growth and initial value delivery.'],
            ['Engagement & Social', 'Activities per athlete · Kudos & comments per activity', 'Workout frequency and peer reinforcement density.'],
            ['Community', 'Group challenge & Crew Goal participation', 'Collective accountability adoption.'],
            ['Retention & Monetisation', '4-week active retention · Free-to-paid conversion', 'Habit durability and subscription growth.'],
          ],
        },
        {
          type: 'heading',
          text: 'Guardrail metrics',
        },
        {
          type: 'list',
          items: [
            { text: 'Privacy-setting tightening or activity deletion spikes.' },
            { text: 'User reports, blocks, and negative social-pressure survey signals.' },
            { text: 'Signals of overtraining or compulsive exercise behaviour.' },
            { text: 'GPS recording failures and app reliability crashes.' },
          ],
        },
      ],
    },
    {
      number: '08',
      shortTab: 'Experiments',
      title: 'Experimentation',
      kicker: '08 · Hypothesis testing',
      blocks: [
        {
          type: 'heading',
          text: 'Primary Experiment: Async Crew Goals (4-week A/B test)',
        },
        {
          type: 'table',
          caption: 'Experiment 1 design',
          headers: ['Parameter', 'Specification'],
          rows: [
            ['Hypothesis', 'Flexible collective crew goals increase workout consistency and 4-week retention compared with individual-only goals.'],
            ['Control vs. Treatment', 'Existing individual goals (Control) vs. Async Crew Goals for 3–8 friends (Treatment).'],
            ['Duration', '4 weeks'],
            ['Primary & Secondary metrics', '4-week active retention (primary); activities per member per week (secondary).'],
            ['Guardrails', 'Negative feedback, notification muting, and mid-week crew abandonment.'],
          ],
        },
        {
          type: 'heading',
          text: 'Secondary Experiment: Context-Rich Achievement Sharing',
        },
        {
          type: 'paragraph',
          text: 'A/B test standard activity sharing against customisable context cards, measuring not only external shares and Kudos, but whether recipients and sharers return to record subsequent workouts—while monitoring privacy complaints.',
        },
      ],
    },
    {
      number: '09',
      shortTab: 'Risks',
      title: 'Risks & Reflection',
      kicker: '09 · Boundaries & strategic lessons',
      blocks: [
        {
          type: 'table',
          caption: 'Key product risks and mitigations',
          headers: ['Risk', 'Potential impact', 'Mitigation'],
          rows: [
            ['FOMO turning unhealthy', 'Stress, burnout, and compulsive overtraining.', 'Non-competitive crew goals and recovery prompts.'],
            ['Location privacy exposure', 'Revealing home, workplace, or daily routines.', 'Clear visibility defaults and automatic start/end map masking.'],
            ['Beginner intimidation', 'Feeling inadequate next to fast athletes.', 'Personal progress views and inclusive consistency challenges.'],
            ['Data manipulation', 'Eroded trust in shared achievements.', 'Transparent activity-source attribution (GPS/device vs. manual).'],
            ['Empty social network', 'Weak value for users without active friends on Strava.', 'Strong solo goals and local club discovery.'],
            ['Paywall frustration', 'Core motivation feels gated.', 'Preserve a generous free social & recording core.'],
          ],
        },
        {
          type: 'callout',
          title: 'Final product takeaway',
          body: 'Great products do not always need to invent new human behaviours. Strava succeeds because it connects existing human drives—social proof, asynchronous belonging, and recognition—into a loop that keeps people moving.',
          tone: 'blue',
        },
      ],
    },
  ],
  referencesNote:
    'Validation note: Behavioural explanations are analytical hypotheses rather than claims about Strava’s internal intent; RICE scores and experiment parameters are illustrative assumptions. Verify dynamic pricing and packaging against official Strava sources before publishing.',
  references: [
    {
      id: 'str-1',
      title: 'Strava — About & Company Mission',
      source: 'Strava',
      url: 'https://www.strava.com/about',
    },
    {
      id: 'str-2',
      title: 'Strava — Subscription Features',
      source: 'Strava',
      url: 'https://www.strava.com/subscribe',
    },
    {
      id: 'str-3',
      title: 'Strava — Year in Sport',
      source: 'Strava',
      url: 'https://www.strava.com/year-in-sport',
    },
    {
      id: 'str-4',
      title: 'Strava Support — Product & Privacy Documentation',
      source: 'Strava Support',
      url: 'https://support.strava.com/',
    },
    {
      id: 'str-5',
      title: 'Strava Metro — Aggregated Active Transportation Insights',
      source: 'Strava Metro',
      url: 'https://metro.strava.com/',
    },
  ],
};
