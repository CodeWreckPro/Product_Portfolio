import type { CaseStudy } from '../types/portfolio';

export const mapsStudy: CaseStudy = {
  id: 'google-maps',
  track: 'improvement',
  trackLabel: 'Product Improvement Strategy',
  indexLabel: '02',
  product: 'Google Maps',
  title: 'Group Journey Mode',
  subtitle: 'Moving together, even when travelling separately.',
  focusLabel: 'Multi-vehicle trip coordination',
  scopeLabel: 'Shared route awareness & regrouping',
  dateLabel: 'November 2026',
  thesis:
    'Google Maps already helps individuals navigate to a destination. Group Journey Mode introduces a shared coordination layer so friends and families travelling in separate vehicles can understand relative route progress, regroup intelligently, and preserve individual route control.',
  executiveSummary: {
    hook: 'Live location pins tell you where someone is, not whether they are ahead, behind, on the same road, or where everyone can safely regroup.',
    northStar:
      'Successful Group Journey Sessions — activated multi-vehicle sessions where participants reach the shared destination or an agreed regroup point, paired with completion rate.',
    mvpScope:
      'Session-based group invite link, shared map showing individual routes + relative progress + road distance/ETA, shared meetup point acceptance, and one-tap resume to original destination.',
    keyTradeoff:
      'Share a journey without forcing a single route; defer automated route convergence, group chat, and Joyride exploratory routing until the core coordination loop is validated.',
    evidenceNote:
      'Motivated by first-hand multi-car travel observation and Google Maps Community feature requests (qualitative signals; interviews & opt-in beta proposed).',
  },
  sections: [
    {
      number: '01',
      shortTab: 'Overview',
      title: 'Product Overview',
      kicker: '01 · Product, users & business model',
      blocks: [
        {
          type: 'lead',
          text: 'Most navigation experiences are built around one person going from A to B. In real life, friends and families often drive to the same destination in multiple cars—turning Google Maps, messaging apps, and phone calls into a fragmented coordination loop.',
        },
        {
          type: 'heading',
          text: 'Existing ecosystem & the opportunity',
        },
        {
          type: 'paragraph',
          text: 'Google Maps provides turn-by-turn navigation, real-time traffic, location sharing, local discovery, and Gemini-powered Ask Maps for conversational journey planning. Yet when a group drives separately, live location pins still force constant manual cross-checking.',
          link: {
            label: 'Google Ask Maps announcement',
            url: 'https://blog.google/products-and-platforms/products/maps/ask-maps-immersive-navigation/',
          },
        },
        {
          type: 'heading',
          text: 'Proposed product: Group Journey Mode',
        },
        {
          type: 'list',
          items: [
            { text: 'Create a temporary group journey session and invite other drivers via link or QR.' },
            { text: 'View every participant’s live location and individual route on a shared map.' },
            { text: 'Understand who is ahead, behind, or travelling along a different road.' },
            { text: 'Check road distance and estimated travel time between participants.' },
            { text: 'Identify route convergence opportunities and agree on mutually accessible meeting points.' },
            { text: 'Resume navigation to the original destination in one tap after regrouping.' },
          ],
        },
        {
          type: 'table',
          caption: 'Primary and secondary user segments',
          headers: ['User segment', 'Core need'],
          rows: [
            ['Friends travelling in separate cars (Primary)', 'Stay coordinated without repeated calls and messages.'],
            ['Families on road trips (Primary)', 'Coordinate meal/fuel stops and ensure everyone arrives together.'],
            ['Group trip organisers', 'Monitor group progress and coordinate regrouping stops.'],
            ['Independent drivers', 'Keep personal route flexibility while staying aware of the group.'],
          ],
        },
        {
          type: 'callout',
          title: 'Business model & safety boundary',
          body: 'Google Maps is free to consumers, supported by location-based ads and paid Maps Platform APIs. Group Journey Mode is an engagement and retention lever for longer trips; any promoted places along a route must remain strictly separated from safety-critical navigation and meetup recommendations.',
          tone: 'neutral',
        },
      ],
    },
    {
      number: '02',
      shortTab: 'Research',
      title: 'User Research',
      kicker: '02 · Existing capabilities & signals',
      blocks: [
        {
          type: 'heading',
          text: 'Understanding what Google Maps already offers',
        },
        {
          type: 'list',
          items: [
            { lead: 'Location Sharing:', text: 'Real-time position shared with selected contacts for a chosen duration.' },
            { lead: 'Share Trip Progress:', text: 'Shares destination, ETA and location while navigating, stopping on arrival.' },
            { lead: 'Individual Navigation & Search Along Route:', text: 'Traffic-aware routing and stop discovery per vehicle.' },
            { lead: 'Ask Maps:', text: 'Conversational place discovery and journey planning.' },
          ],
        },
        {
          type: 'heading',
          text: 'First-hand insight & external signals',
        },
        {
          type: 'paragraph',
          text: 'In personal multi-car travel, even when everyone shared live locations, pins failed to clarify who was leading along the same highway, how far behind someone had fallen in road minutes, or where everyone could conveniently stop.',
        },
        {
          type: 'paragraph',
          text: 'Public Google Maps Community threads (including a 2025 discussion on multi-vehicle group travel difficulty and a 2026 Convoy Mode request) reinforce that users manually bridge this gap today. Treated strictly as qualitative problem signals rather than representative market sizing.',
          link: {
            label: 'Google Maps Community: Group travel thread',
            url: 'https://support.google.com/maps/thread/390982252/group-travel-navigation-is-difficult-with-multiple-vehicles',
          },
        },
        {
          type: 'table',
          caption: 'Observed friction translated into product opportunities',
          headers: ['User need', 'Current friction', 'Opportunity'],
          rows: [
            ['Know where everyone is', 'Location pins require mental interpretation.', 'Show group progress and route context together.'],
            ['Understand ahead vs. behind', 'Geographic pin position alone can mislead.', 'Compute relative progress along shared route segments.'],
            ['Estimate catch-up time', 'Drivers manually compare locations and ETAs.', 'Surface road distance and ETA to a participant.'],
            ['Regroup mid-trip', 'Requires calls and chats to pick a stop.', 'Suggest mutually accessible stops with parking and facilities.'],
            ['Continue after stopping', 'Everyone must re-enter the destination.', 'Preserve original destination for one-tap resume.'],
          ],
        },
        {
          type: 'heading',
          text: 'Proposed primary research',
        },
        {
          type: 'paragraph',
          text: 'Conduct 8–12 contextual interviews asking recent multi-vehicle travellers to reconstruct their last trip: vehicle count, how locations were shared, communication frequency, separation events, and how regroup stops were chosen.',
        },
      ],
    },
    {
      number: '03',
      shortTab: 'Problems',
      title: 'Problem Identification',
      kicker: '03 · Defining the coordination gap',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              kicker: 'Problem 01',
              title: 'No contextual awareness',
              body: 'A location pin does not clarify whether another vehicle is ahead, behind, stopped, or on a parallel road.',
            },
            {
              kicker: 'Problem 02',
              title: 'Manual coordination',
              body: 'Without a shared view of routes, ETAs, and delays, coordination spills out of Maps into calls and chats while driving.',
            },
            {
              kicker: 'Problem 03',
              title: 'Inefficient regrouping',
              body: 'Agreeing on a convenient meetup spot and restarting navigation to the main destination is fragmented.',
            },
          ],
        },
        {
          type: 'callout',
          title: 'Core problem statement',
          body: 'People travelling to the same destination in separate vehicles lack a unified way to understand and coordinate their journeys—creating unnecessary cognitive load, communication overhead, and uncertainty in unfamiliar areas.',
          tone: 'blue',
        },
        {
          type: 'quote',
          text: 'When I am travelling with friends or family in separate vehicles, I want to understand everyone’s progress and coordinate stops or meetups, so that we can complete the journey together without constantly communicating or compromising our individual routes.',
          attribution: 'Jobs to Be Done (JTBD)',
        },
        {
          type: 'heading',
          text: 'Explicit non-goals (What Maps should NOT do)',
        },
        {
          type: 'list',
          items: [
            { text: 'Never force every vehicle onto the exact same route.' },
            { text: 'Never turn Maps into a full group-chat application.' },
            { text: 'Never alter a driver’s active route automatically without explicit consent.' },
            { text: 'Never encourage speeding or unsafe shortcuts to catch up to another car.' },
            { text: 'Never make location sharing permanent or mandatory beyond the trip.' },
          ],
        },
      ],
    },
    {
      number: '04',
      shortTab: 'Journey',
      title: 'User Journey',
      kicker: '04 · Current vs. proposed flow',
      blocks: [
        {
          type: 'heading',
          text: 'Existing multi-vehicle experience',
        },
        {
          type: 'table',
          caption: 'Four friends travelling in three cars today',
          headers: ['Stage', 'Existing experience', 'Friction'],
          rows: [
            ['Planning', 'Destination pasted into a group chat.', 'No shared navigation session.'],
            ['Starting', 'Everyone starts individual navigation.', 'Independent routes and disconnected ETAs.'],
            ['Tracking', 'Live location shared separately.', 'Requires mental translation to understand progress.'],
            ['Separation', 'One car hits traffic or misses an exit.', 'Repeated phone calls and distracting chats.'],
            ['Regrouping', 'Group debates where to pull over.', 'No unified view of accessible stops for all cars.'],
            ['Resuming', 'Everyone manually re-enters destination.', 'Repeated setup effort after every stop.'],
          ],
        },
        {
          type: 'heading',
          text: 'Proposed Group Journey flow',
        },
        {
          type: 'flowSteps',
          steps: [
            { title: 'Create session', description: 'Organiser selects destination and taps Create Group Journey.' },
            { title: 'Invite & consent', description: 'Participants join via link/QR with session-scoped sharing.' },
            { title: 'Navigate freely', description: 'Each driver keeps their own optimal route and audio guidance.' },
            { title: 'Track relative progress', description: 'Shared map shows routes, road distance, and ahead/behind state.' },
            { title: 'Coordinate regroup', description: 'Share or request a mutually convenient meetup stop.' },
            { title: 'Resume journey', description: 'One tap restores navigation to the original destination.' },
          ],
        },
        {
          type: 'callout',
          title: 'Key experience principle',
          body: 'The group shares a journey, not necessarily a route. Different starting points, vehicle constraints, or traffic choices remain fully supported.',
          tone: 'green',
        },
      ],
    },
    {
      number: '05',
      shortTab: 'Solutions',
      title: 'Proposed Solutions',
      kicker: '05 · Capabilities & Joyride extension',
      blocks: [
        {
          type: 'heading',
          text: '5.1 Create a Group Journey',
          badge: { label: 'Core', tone: 'core' },
        },
        {
          type: 'paragraph',
          text: 'From any destination screen, choose "Create Group Journey", share an invite link or QR code, and start navigating. Sharing is strictly scoped to the active session, participants can leave anytime, and the session auto-expires upon arrival or inactivity.',
        },
        {
          type: 'heading',
          text: '5.2 Shared Map & Relative Position Awareness',
          badge: { label: 'Core', tone: 'core' },
        },
        {
          type: 'paragraph',
          text: 'Displays each participant’s live location, individual route, common route segments, and destination. When vehicles share a road segment, Maps surfaces clear ahead/behind context; when on diverging roads, it avoids misleading ahead/behind labels and instead displays road distance and ETA.',
        },
        {
          type: 'table',
          caption: 'Participant information card details',
          headers: ['Field', 'Purpose'],
          rows: [
            ['Current location & freshness', 'Understand where the vehicle is and how recently GPS updated.'],
            ['Road distance', 'Know actual driving distance separating vehicles.'],
            ['ETA to current position', 'Distinguish time to reach a stationary location vs. a moving-target rendezvous estimate.'],
            ['Relative route progress', 'Identify who is leading or trailing along shared segments.'],
          ],
        },
        {
          type: 'heading',
          text: '5.3 Intelligent Route Convergence & 5.4 Meetup Points',
        },
        {
          type: 'paragraph',
          text: 'When routes merge ahead or one driver faces heavy traffic, Maps can optionally suggest a slight route alignment with exact time/distance deltas. When separated, Maps recommends safe, accessible meetup stops (fuel stations, restaurants, parking) factoring in travel times for all cars—augmented by Ask Maps / Gemini natural language queries while grounding feasibility strictly in Maps’ routing engine. A suggested meetup never alters navigation without user acceptance.',
        },
        {
          type: 'heading',
          text: '5.5 Resume Original Journey & 5.6 Joyride (Adjacent Opportunity)',
        },
        {
          type: 'paragraph',
          text: 'After reaching a meetup stop, one tap on "Continue Journey" restores routing to the original destination inside the same group session. Separately, Joyride ("Scenic" or "Explore Along the Way") is framed as a universal platform-level route preference independent of individual vs. group mode—not bundled as a dependency of the Group Journey MVP.',
        },
        {
          type: 'table',
          caption: 'Two independent dimensions of journey planning',
          headers: ['Dimension', 'Options'],
          rows: [
            ['Journey context', 'Individual or Group'],
            ['Route preference', 'Fastest, Scenic, or Explore Along the Way (Joyride)'],
          ],
        },
      ],
    },
    {
      number: '06',
      shortTab: 'Prioritise',
      title: 'Prioritisation',
      kicker: '06 · Directional RICE & MVP scope',
      blocks: [
        {
          type: 'formula',
          expression: 'RICE = (Reach × Impact × Confidence) / Effort',
          caption: 'Directional assessment only — numerical scores avoided prior to user research and engineering sizing.',
        },
        {
          type: 'table',
          caption: 'Directional prioritisation across proposed capabilities',
          headers: ['Feature', 'Reach', 'Impact', 'Confidence', 'Effort', 'Priority'],
          rows: [
            ['Create & join group sessions', 'Medium', 'High', 'High', 'Medium', { text: 'P0', badge: { label: 'P0', tone: 'p0' } }],
            ['Shared map & participant locations', 'Medium', 'High', 'High', 'High', { text: 'P0', badge: { label: 'P0', tone: 'p0' } }],
            ['Relative route progress', 'Medium', 'High', 'Medium', 'High', { text: 'P0', badge: { label: 'P0', tone: 'p0' } }],
            ['Road distance & participant ETA', 'Medium', 'High', 'Medium', 'Medium', { text: 'P0', badge: { label: 'P0', tone: 'p0' } }],
            ['Share & accept a meetup location', 'Medium', 'High', 'High', 'Medium', { text: 'P0', badge: { label: 'P0', tone: 'p0' } }],
            ['Intelligent meetup recommendations', 'Medium', 'High', 'Medium', 'High', { text: 'P1', badge: { label: 'P1', tone: 'p1' } }],
            ['Automatic route convergence suggestions', 'Medium', 'Medium', 'Medium', 'High', { text: 'P1', badge: { label: 'P1', tone: 'p1' } }],
            ['Gemini-powered meetup discovery', 'Medium', 'Medium', 'Medium', 'High', { text: 'P1', badge: { label: 'P1', tone: 'p1' } }],
            ['Joyride route preference', 'Broader', 'Medium', 'Medium', 'High', { text: 'Separate', badge: { label: 'Separate', tone: 'p2' } }],
          ],
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              kicker: 'MVP Scope (P0)',
              title: 'Validate the coordination loop',
              bullets: [
                'Create group journey & invite link',
                'Session-scoped location sharing',
                'Shared map with individual routes & relative progress',
                'Road distance & participant ETA',
                'Share/accept meetup point & resume original destination',
              ],
            },
            {
              kicker: 'Deferred from MVP',
              title: 'Avoid premature complexity',
              bullets: [
                'Advanced Gemini meetup discovery',
                'Automatic route convergence suggestions',
                'Complex multi-option group voting',
                'In-app group chat or social feeds',
                'Joyride scenic/explore preference (separate workstream)',
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
          title: 'North Star Metric: Successful Group Journey Sessions',
          body: 'Number of activated group journeys where active participants reach the shared destination or an agreed regroup point—tracked alongside Group Journey Completion Rate so growth never hides failed sessions.',
          tone: 'green',
        },
        {
          type: 'table',
          caption: 'Supporting product and journey KPIs',
          headers: ['Metric', 'What it measures'],
          rows: [
            ['Group Journey Activation Rate', '% of created sessions where ≥ 2 participants join and start navigating.'],
            ['Group Journey Completion Rate', '% of activated sessions successfully completed.'],
            ['Time to Regroup', 'Elapsed time from agreeing on a meetup stop to participants arriving there.'],
            ['Meetup Acceptance Rate', '% of shared or suggested meetup points accepted by participants.'],
            ['ETA Accuracy & Session Join Rate', 'Predicted vs. actual arrival error; % of invited participants joining.'],
            ['Repeat Group Journey Usage', '% of users who create or join a subsequent group journey.'],
          ],
        },
        {
          type: 'heading',
          text: 'Safety, privacy & reliability guardrails',
        },
        {
          type: 'table',
          caption: 'Critical guardrail metrics',
          headers: ['Guardrail', 'Why it matters'],
          rows: [
            ['Driver interaction frequency', 'Must not increase distracted screen interaction while moving.'],
            ['Location accuracy & freshness', 'Stale or noisy GPS can cause missed turns or confusion.'],
            ['Battery consumption', 'Continuous multi-user telemetry must remain practical on long road trips.'],
            ['Location-sharing opt-outs', 'Users must retain clear, immediate privacy control.'],
            ['Safety complaints & unnecessary detours', 'Never encourage speeding or significantly worse routes.'],
          ],
        },
      ],
    },
    {
      number: '08',
      shortTab: 'Experiments',
      title: 'Experimentation',
      kicker: '08 · Staged hypotheses & validation',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              kicker: 'Hypothesis 1 · Discovery',
              title: 'Multi-vehicle coordination gap',
              body: 'Contextual interviews with 8–12 recent multi-vehicle travellers reconstructing real trips to verify high-friction moments beyond live pins.',
            },
            {
              kicker: 'Hypothesis 2 · Comprehension Prototype',
              title: 'Relative route awareness vs. pins',
              body: 'Clickable prototype A/B test comparing isolated location pins (A) vs. routes + relative progress + road distance/ETA (B) on speed and interpretation accuracy.',
            },
            {
              kicker: 'Hypothesis 3 · Regrouping Prototype',
              title: 'Meetup recommendations',
              body: 'Compare manual stop selection vs. suggested mutually accessible meetups, measuring time to agree, acceptance rate, and perceived fairness.',
            },
            {
              kicker: 'Hypothesis 4 · Group-Randomised Beta',
              title: 'End-to-end Group Journey Mode',
              body: 'Opt-in beta randomised at the group level (never splitting one trip across variants) measuring completion rate, time to regroup, repeat usage, and voluntary survey coordination effort.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Joyride would be validated on a separate experimentation track with both solo and group travellers to measure scenic-route opt-in rate, acceptable detour time tolerance, and stop agreement.',
        },
      ],
    },
    {
      number: '09',
      shortTab: 'Risks',
      title: 'Risks & Reflection',
      kicker: '09 · Constraints, safety & trade-offs',
      blocks: [
        {
          type: 'table',
          caption: 'Technical & product risks with mitigations',
          headers: ['Risk', 'Why it matters', 'Mitigation'],
          rows: [
            ['GPS & network interruptions', 'Stale pins make ahead/behind indicators misleading.', 'Map-matching, freshness timestamps, and clear last-updated indicators.'],
            ['Moving-target ETA confusion', 'Calculating ETA to a moving car differs from a fixed point.', 'Separate "ETA to current position" from projected rendezvous; flag uncertainty clearly.'],
            ['Map clutter', 'Multiple routes and avatars can overwhelm mobile screens.', 'Adaptive visibility and progressive disclosure of non-critical details.'],
            ['Driver distraction', 'Drivers must not stare at the group map.', 'Deliver key updates via audio guidance; keep detailed views for passengers or stationary stops.'],
            ['Unsafe catch-up behaviour', 'Trailing drivers might feel pressured to speed.', 'Avoid competitive rankings; favour safe, accessible meetup stops.'],
          ],
        },
        {
          type: 'heading',
          text: 'Key trade-offs',
        },
        {
          type: 'list',
          items: [
            { lead: 'Group coordination vs. individual freedom:', text: 'A shared journey must never become a forced route mandate.' },
            { lead: 'Information richness vs. cognitive load:', text: 'Surface relative progress selectively rather than dumping every route polyline at once.' },
            { lead: 'Automation vs. user control:', text: 'Recommend meetups and explain trade-offs, never reroute silently.' },
            { lead: 'Update frequency vs. battery & privacy:', text: 'Adaptive GPS cadence balanced with strict session-only consent.' },
          ],
        },
        {
          type: 'callout',
          title: 'Reflection',
          body: 'Navigation has long been designed as a solo activity, even though many road trips are social. Starting with shared route awareness and simple regrouping validates the core coordination loop before expanding into intelligent AI meetup discovery and exploratory Joyride routing.',
          tone: 'blue',
        },
      ],
    },
  ],
  referencesNote:
    'This is an independent product proposal; personal travel insight and public Google Maps Community threads provide qualitative motivation, while interviews, prototype tests, and beta experiments are proposed validation steps.',
  references: [
    {
      id: 'maps-1',
      title: 'Location Sharing and Share Trip Progress',
      source: 'Google Maps Help',
      url: 'https://support.google.com/maps/answer/15437054',
    },
    {
      id: 'maps-2',
      title: 'Navigation and Search Along Route',
      source: 'Google Maps Help',
      url: 'https://support.google.com/maps/answer/3273406',
    },
    {
      id: 'maps-3',
      title: 'Ask Maps and Immersive Navigation',
      source: 'Google Official Blog',
      url: 'https://blog.google/products-and-platforms/products/maps/ask-maps-immersive-navigation/',
    },
    {
      id: 'maps-4',
      title: 'Group travel navigation is difficult with multiple vehicles',
      source: 'Google Maps Community (2025)',
      url: 'https://support.google.com/maps/thread/390982252/group-travel-navigation-is-difficult-with-multiple-vehicles',
    },
    {
      id: 'maps-5',
      title: 'Group Trip / Convoy Mode feature request',
      source: 'Google Maps Community (2026)',
      url: 'https://support.google.com/maps/thread/440491068/i-would-like-a-group-trip-convoy-mode-in-google-maps-users-could-create-a-trip-invite-multiple-veh',
    },
    {
      id: 'maps-6',
      title: 'Google Maps Platform Pricing Overview',
      source: 'Google Developers',
      url: 'https://developers.google.com/maps/billing-and-pricing/overview',
    },
    {
      id: 'maps-7',
      title: 'Advertising in Maps',
      source: 'Google Ads Help',
      url: 'https://support.google.com/google-ads/answer/16388390',
    },
  ],
};
