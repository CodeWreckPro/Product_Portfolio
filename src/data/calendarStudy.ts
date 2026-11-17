import type { CaseStudy } from '../types/portfolio';

export const calendarStudy: CaseStudy = {
  id: 'google-calendar',
  track: 'improvement',
  trackLabel: 'Product Improvement Strategy',
  indexLabel: '01',
  product: 'Google Calendar',
  title: 'Rethinking How Teams Schedule, Collaborate and Stay in Sync',
  subtitle: 'From managing meetings to enabling better collaboration across time zones.',
  focusLabel: 'Distributed-team collaboration',
  scopeLabel: 'Scheduling & meeting continuity',
  dateLabel: 'November 2026',
  thesis:
    'Google Calendar could evolve from a tool that primarily manages individual schedules into a stronger collaboration layer that helps distributed teams converge on mutually acceptable meeting times before meetings happen and rediscover key context after they end.',
  executiveSummary: {
    hook: 'Availability is not convenience. A slot can be empty on every calendar while imposing an unfair early/late burden or requiring multi-round chat coordination.',
    northStar:
      'Share of cross-time-zone meeting requests confirmed by the deadline while respecting participants’ stated working-hour preferences.',
    mvpScope:
      'Multi-option scheduling poll inside event creation: Gemini candidate shortlist, local-time display, preferred vs. acceptable voting, private alternative suggestions, and organiser confirmation.',
    keyTradeoff:
      'Keep final confirmation with the organiser (rather than auto-booking by highest vote) and keep alternative suggestions private by default to protect minority time-zone constraints.',
    evidenceNote:
      'Independent analysis grounded in Google Calendar documentation and a 2023 CHI study of 20M meetings; user hypotheses require primary validation.',
  },
  sections: [
    {
      number: '01',
      shortTab: 'Overview',
      title: 'Product Overview',
      kicker: '01 · Product understanding',
      blocks: [
        {
          type: 'lead',
          text: 'Google Calendar is already effective at helping people manage events and find available time. For distributed teams, however, scheduling is not simply finding an empty slot—and after a meeting, decisions and notes can become hard to rediscover.',
        },
        {
          type: 'heading',
          text: 'What is Google Calendar?',
        },
        {
          type: 'paragraph',
          text: 'Google Calendar is a digital calendar and scheduling product that helps individuals and teams organise events, coordinate availability, invite participants and manage their time. It serves personal users and Google Workspace teams alongside Gmail, Google Meet and Google Drive.',
          link: { label: 'Google Calendar', url: 'https://calendar.google.com/' },
        },
        {
          type: 'paragraph',
          text: 'Its core value is not just storing appointments. It provides a shared representation of time: users can see commitments, understand availability, invite others and coordinate around events.',
        },
        {
          type: 'heading',
          text: 'Primary user groups',
        },
        {
          type: 'table',
          caption: 'High-level user groups relevant to this case study',
          headers: ['User group', 'Primary need', 'Potential friction'],
          rows: [
            ['Individual users', 'Manage personal commitments and understand availability.', 'Conflicts, fragmented calendars and changing schedules.'],
            ['Meeting organisers', 'Find a suitable time, invite participants and confirm a meeting efficiently.', 'Repeated coordination, late responses and rescheduling.'],
            ['Meeting participants', 'Understand the proposed time, assess whether they can attend and communicate constraints.', 'Time-zone ambiguity, inconvenient meeting times and limited influence over the final slot.'],
            ['Distributed teams', 'Coordinate work across locations, time zones and working-hour preferences.', 'Uneven distribution of early or late meetings and asynchronous coordination overhead.'],
            ['People revisiting past meetings', 'Recover decisions, discussion context and action items.', 'Unclear event titles, scattered notes and time-consuming searches.'],
          ],
        },
        {
          type: 'heading',
          text: 'Existing capabilities and product context',
        },
        {
          type: 'paragraph',
          text: 'The proposal builds on what Calendar and the wider Workspace ecosystem already do rather than presenting existing capabilities as new features.',
        },
        {
          type: 'table',
          caption: 'Existing capabilities relevant to the opportunity',
          headers: ['Capability', 'What exists', 'Implication for this proposal'],
          rows: [
            ['Gemini-assisted scheduling', 'For eligible plans, Gemini in Calendar can suggest meeting times using availability, time zones, working hours and conflicts.', 'Extend the decision workflow beyond suggested slots rather than adding another AI time suggestion feature.'],
            ['Time-zone support', 'Calendar supports events and scheduling across time zones.', 'Present candidate times in each participant’s local time and make zones easy to compare.'],
            ['Proposed meeting times', 'Calendar supports mechanisms for invitees to propose a different time for an event.', 'The opportunity is a structured, multi-option decision process with preferences, private alternatives and a deadline.'],
            ['Gemini meeting notes in Meet', 'Eligible users can enable Gemini to take meeting notes in Google Meet from a Calendar event, saved to Google Docs.', 'Improve how meeting context is surfaced and rediscovered, not merely attach another notes document.'],
            ['Google Workspace integration', 'Calendar works alongside Gmail, Meet and Drive for invitations, video meetings and shared docs.', 'Use the event as a contextual entry point while preserving the source document and its permissions.'],
          ],
        },
        {
          type: 'callout',
          title: 'Two related opportunities (sequenced by urgency)',
          body: 'Opportunity 1: Collaborative scheduling across time zones, working hours and competing preferences (primary MVP). Opportunity 2: Contextual meeting history making decisions and notes easier to rediscover from past Calendar events (follow-on capability).',
          tone: 'blue',
        },
      ],
    },
    {
      number: '02',
      shortTab: 'Research',
      title: 'User Research',
      kicker: '02 · Understand users and evidence',
      blocks: [
        {
          type: 'heading',
          text: 'Research approach',
        },
        {
          type: 'paragraph',
          text: 'This is a desk-research-led product analysis combining current product documentation, published research and workflow observations. No primary user interviews or surveys have been conducted for this draft—the user problems below are opportunities to validate, not claims that every user experiences the same friction.',
        },
        {
          type: 'heading',
          text: 'Relevant user segments',
        },
        {
          type: 'table',
          caption: 'Initial segmentation and needs hypotheses',
          headers: ['Segment', 'Context', 'Need to investigate'],
          rows: [
            ['Distributed individual contributors', 'Work with teammates, clients or partners in other time zones.', 'Do they feel they have meaningful input into meeting times? How often do they attend outside preferred hours?'],
            ['Frequent meeting organisers', 'Coordinate recurring or cross-functional meetings with several participants.', 'How much time is spent proposing slots, chasing replies and resolving conflicts?'],
            ['Team leads and managers', 'Balance team availability, deadlines and collaboration needs.', 'How do they decide whose schedule takes priority when no slot is convenient for everyone?'],
            ['People who miss or revisit meetings', 'Need to recover a decision or action item after the meeting.', 'How do they currently find the relevant event, notes document or decision?'],
          ],
        },
        {
          type: 'heading',
          text: 'Published research: time-zone collaboration',
        },
        {
          type: 'paragraph',
          text: 'A 2023 CHI study (Mok et al., "Challenging but Connective: Large-Scale Characteristics of Synchronous Collaboration Across Time Zones") analysed 20 million meetings at a multinational corporation alongside a survey of 130 employees. Cross-time-zone meetings were associated with early-morning and late-evening patterns that conflicted with employees’ stated preferences, with the burden distributed unevenly across organisational levels and geographies.',
          link: {
            label: 'Read CHI 2023 study',
            url: 'https://www.microsoft.com/en-us/research/publication/challenging-but-connective-large-scale-characteristics-of-synchronous-collaboration-across-time-zones/',
          },
        },
        {
          type: 'callout',
          title: 'Research implication',
          body: 'Availability is not the same as convenience. The CHI study also cautions against simply reducing cross-time-zone meetings, as they connect organisationally distant teams. A scheduling product should help teams understand who is absorbing inconvenience and make fairer trade-offs.',
          tone: 'blue',
        },
        {
          type: 'heading',
          text: 'Evidence classification',
        },
        {
          type: 'table',
          caption: 'Distinguishing established facts from hypotheses requiring validation',
          headers: ['Type', 'Insight', 'Product implication'],
          rows: [
            [{ text: 'Published finding', badge: { label: 'Published finding', tone: 'fact' } }, 'Cross-time-zone meetings can create early or late meeting burdens distributed unevenly.', 'Measure the distribution of inconvenient meeting times, not only total meeting count.'],
            [{ text: 'Product fact', badge: { label: 'Product fact', tone: 'fact' } }, 'Calendar already uses availability, working hours, time zones and conflicts for Gemini scheduling suggestions.', 'Focus the proposal on collective preference gathering and decision-making.'],
            [{ text: 'Hypothesis', badge: { label: 'Hypothesis', tone: 'hypothesis' } }, 'Organisers of multi-participant meetings may need multiple message rounds to find a mutually acceptable time.', 'Test whether a structured poll reduces coordination time and follow-up messages.'],
            [{ text: 'Hypothesis', badge: { label: 'Hypothesis', tone: 'hypothesis' } }, 'Participants may accept inconvenient times because they do not want to delay the group or challenge a senior colleague.', 'Test private alternatives and preference collection before exposing group-level results.'],
            [{ text: 'Hypothesis', badge: { label: 'Hypothesis', tone: 'hypothesis' } }, 'People may remember a meeting topic or approximate date but not the exact event title or notes document.', 'Test whether contextual summaries and meeting-history search reduce retrieval time.'],
          ],
        },
        {
          type: 'heading',
          text: 'Research limitations and next discovery steps',
        },
        {
          type: 'list',
          items: [
            { text: 'The CHI study reflects one multinational corporation and should not be assumed to represent every Google Calendar user.' },
            { text: 'Product documentation confirms existing features, not how frequently users experience the proposed pain points.' },
            { text: 'Primary research is needed to establish the frequency, severity and context of scheduling and retrieval friction.' },
          ],
        },
      ],
    },
    {
      number: '03',
      shortTab: 'Problems',
      title: 'Problem Identification',
      kicker: '03 · Frame the opportunity',
      blocks: [
        {
          type: 'heading',
          text: 'Problem A: Finding an available time is not finding an acceptable time',
        },
        {
          type: 'paragraph',
          text: 'For a distributed team, the calendar grid reveals when people are free, but not which of several available slots is least disruptive. One participant may have an early start, another may be at the end of their day, and a third may have personal commitments.',
        },
        {
          type: 'callout',
          title: 'Problem statement A',
          body: 'Meeting organisers coordinating across time zones need a lightweight way to compare candidate times against participants’ real preferences, because availability alone does not show whether a meeting time is mutually acceptable or distributes inconvenience fairly.',
          tone: 'blue',
        },
        {
          type: 'subheading',
          text: 'Underlying causes to investigate',
        },
        {
          type: 'list',
          items: [
            { text: 'Availability data represents calendar commitments, not personal preferences or unblocked constraints.' },
            { text: 'Time-zone differences make it harder to compare the real impact of a proposed slot across participants.' },
            { text: 'Participants may hesitate to suggest alternatives publicly, especially when the organiser is senior.' },
            { text: 'Automated time suggestions identify candidate slots, yet the group still lacks a structured collective decision step.' },
            { text: 'Recurring meetings can silently lock in an uneven burden if inconvenience is never surfaced.' },
          ],
        },
        {
          type: 'heading',
          text: 'Problem B: Meeting context becomes difficult to rediscover',
        },
        {
          type: 'paragraph',
          text: 'When someone misses a meeting or revisits a decision weeks later, they often search across Calendar events, Drive documents, notes and chat. The event title may not match the topic they remember.',
        },
        {
          type: 'callout',
          title: 'Problem statement B',
          body: 'People who need to revisit a past meeting need a fast way to identify its key decisions and locate the original notes, because meeting context can become fragmented across events and documents.',
          tone: 'neutral',
        },
        {
          type: 'heading',
          text: 'Opportunity framing & prioritisation rationale',
        },
        {
          type: 'quote',
          text: 'How might Google Calendar help distributed teams reach a mutually acceptable meeting time with less coordination effort, while making the outcomes of those meetings easier to find later?',
        },
        {
          type: 'paragraph',
          text: 'Problem A is prioritised first because it occurs before every meeting and directly gates whether collaboration happens. Problem B depends on notes availability, accuracy and document permissions, making it a strong follow-on.',
        },
      ],
    },
    {
      number: '04',
      shortTab: 'Journey',
      title: 'User Journey',
      kicker: '04 · Understand the workflow',
      blocks: [
        {
          type: 'heading',
          text: 'Journey A: Scheduling a cross-time-zone meeting today',
        },
        {
          type: 'table',
          caption: 'Illustrative current-state journey to validate',
          headers: ['Stage', 'User action', 'Current experience', 'Potential friction'],
          rows: [
            ['1. Initiate', 'Organiser creates an event and adds participants.', 'Calendar provides event creation and attendee management.', 'Organiser may not understand every participant’s preferred meeting window.'],
            ['2. Find options', 'Organiser reviews availability and suggested times.', 'Gemini can suggest times using available calendar info for eligible users.', 'A free slot may still be inconvenient for someone.'],
            ['3. Coordinate', 'Organiser proposes a time or asks participants for alternatives.', 'Participants can respond and propose another time.', 'Several rounds of messages may be needed to converge.'],
            ['4. Evaluate', 'Participants interpret the proposed time.', 'Calendar displays event times in local time zones.', 'Participants cannot easily compare how convenient each option is for the group.'],
            ['5. Confirm', 'Organiser chooses a time and sends the invitation.', 'Calendar updates the event and notifies invitees.', 'Decision may rely on incomplete preference information.'],
          ],
        },
        {
          type: 'heading',
          text: 'Journey A: Proposed collaborative scheduling flow',
        },
        {
          type: 'flowSteps',
          steps: [
            { title: 'Create meeting', description: 'Organiser adds attendees, duration and meeting context.' },
            { title: 'Generate options', description: 'Gemini proposes candidate slots using authorised scheduling info.' },
            { title: 'Open a poll', description: 'Organiser selects candidate slots and sets a response deadline.' },
            { title: 'Collect preferences', description: 'Participants view local times, vote and suggest private alternatives.' },
            { title: 'Review trade-offs', description: 'Organiser compares aggregate preferences and alternative suggestions.' },
            { title: 'Confirm meeting', description: 'Organiser confirms a slot and Calendar updates the event.' },
          ],
        },
        {
          type: 'heading',
          text: 'Journey B: Finding information from a past meeting',
        },
        {
          type: 'table',
          caption: 'Illustrative current and proposed meeting-continuity journey',
          headers: ['Stage', 'Current-state behaviour', 'Potential friction', 'Proposed improvement'],
          rows: [
            ['1. Recall', 'User remembers a topic, decision or approximate date.', 'Exact event title may be unknown.', 'Allow users to start from the relevant Calendar history.'],
            ['2. Search', 'User searches Calendar, Drive or chat.', 'Information is spread across multiple places.', 'Show a concise summary and linked notes inside the event.'],
            ['3. Verify', 'User opens a notes document and scans.', 'Finding the relevant decision takes time.', 'Surface decisions, action items and follow-ups as structured highlights.'],
            ['4. Act', 'User copies or shares information.', 'Context can be lost or duplicated.', 'Link directly to original notes and preserve access permissions.'],
          ],
        },
      ],
    },
    {
      number: '05',
      shortTab: 'Solutions',
      title: 'Proposed Solutions',
      kicker: '05 · Design the intervention',
      blocks: [
        {
          type: 'heading',
          text: 'Solution A: Collaborative Time Slot Selection',
          badge: { label: 'Proposed concept', tone: 'proposal' },
        },
        {
          type: 'paragraph',
          text: 'Add a structured multi-option scheduling poll inside the Calendar event-creation workflow so participants can express real preferences and organisers can decide without a long chain of messages.',
        },
        {
          type: 'orderedList',
          items: [
            { lead: 'Create the event:', text: 'Organiser enters meeting title, duration, attendees and context.' },
            { lead: 'Suggest candidate slots:', text: 'Gemini uses authorised availability, time zones, working hours and conflicts to generate a shortlist.' },
            { lead: 'Select multiple options:', text: 'Organiser adjusts the shortlist and picks candidate slots for a poll.' },
            { lead: 'Set response deadline:', text: 'Organiser chooses when voting closes; participants see the deadline and status.' },
            { lead: 'Display local times:', text: 'Each participant sees candidate slots in their own local time zone.' },
            { lead: 'Collect preferences:', text: 'Participants distinguish preferred slots from slots they can attend if necessary.' },
            { lead: 'Offer private alternative:', text: 'Participants can propose another time visible only to the organiser by default, reducing social pressure.' },
            { lead: 'Review results:', text: 'Organiser reviews aggregate preferences, conflicts and private alternatives.' },
            { lead: 'Confirm:', text: 'Organiser selects the final time; Calendar updates the event and sends notifications.' },
          ],
        },
        {
          type: 'table',
          caption: 'Key interaction choices and rationale',
          headers: ['Decision', 'Rationale', 'Risk to validate'],
          rows: [
            ['Show times in each participant’s local time', 'Reduces mental conversion and makes slot impact clear.', 'Time-zone data may be missing or outdated; users need an easy correction path.'],
            ['Separate preferred from acceptable times', 'Being free is different from finding a time convenient.', 'Extra voting complexity could reduce poll completion.'],
            ['Keep alternative suggestions private to organiser', 'Gives participants a lower-pressure way to share constraints.', 'Organisers may miss why a time was suggested or overlook an alternative.'],
            ['Keep final confirmation with the organiser', 'Preserves accountability and avoids simplistic auto-booking.', 'Organisers could override participant preferences without explanation.'],
            ['Use an explicit response deadline', 'Creates a clear decision point.', 'Short deadlines may disadvantage people in distant time zones or on leave.'],
            ['Test aggregate-result visibility', 'Aggregate results help groups understand options.', 'Early visibility may create majority bias and distort later votes.'],
          ],
        },
        {
          type: 'subheading',
          text: 'Longer-term extension: Fairer recurring meetings',
        },
        {
          type: 'paragraph',
          text: 'For recurring cross-time-zone series, Calendar could optionally surface how early/late slots have been distributed over time and suggest rotations. Excluded from MVP because a naive fairness score could oversimplify personal circumstances.',
        },
        {
          type: 'heading',
          text: 'Solution B: Contextual Meeting History',
          badge: { label: 'Proposed concept', tone: 'proposal' },
        },
        {
          type: 'paragraph',
          text: 'Make the Calendar event a lightweight entry point for revisiting decisions and action items, building on Gemini meeting notes in Meet while keeping the source Google Doc intact.',
        },
        {
          type: 'list',
          items: [
            { lead: 'Preserve source access:', text: 'The summary is a shortcut, not a replacement for the original Google Doc.' },
            { lead: 'Respect permissions:', text: 'Summaries must inherit source-document ACLs; event guests must never gain unauthorised access.' },
            { lead: 'Make uncertainty visible:', text: 'Label summaries as AI-generated and avoid presenting inferences as confirmed decisions.' },
            { lead: 'Support correction:', text: 'Allow users to open the source or report inaccurate summaries.' },
            { lead: 'Keep interface lightweight:', text: 'Calendar remains a coordination hub, not a full document editor.' },
          ],
        },
      ],
    },
    {
      number: '06',
      shortTab: 'Prioritise',
      title: 'Prioritisation and MVP',
      kicker: '06 · Decide what to build first',
      blocks: [
        {
          type: 'paragraph',
          text: 'The first release should solve one coherent problem end to end: helping a distributed group select and confirm a mutually acceptable meeting time. Because reliable internal usage and engineering estimates are unavailable in an independent analysis, prioritisation uses qualitative RICE rather than invented numerical scores.',
        },
        {
          type: 'formula',
          expression: 'RICE = (Reach × Impact × Confidence) / Effort',
          caption: 'Qualitative assessment only in this case study — avoiding false precision without internal telemetry.',
        },
        {
          type: 'table',
          caption: 'Proposed release sequence and rationale',
          headers: ['Priority', 'Capability', 'Why this priority', 'Dependency / validation need'],
          rows: [
            [{ text: 'P0 · MVP', badge: { label: 'P0 · MVP', tone: 'p0' } }, 'Gemini-assisted candidate time suggestions', 'Reuses existing scheduling intelligence for a strong starting shortlist.', 'Eligibility, calendar permissions, and clear conflict explanations.'],
            [{ text: 'P0 · MVP', badge: { label: 'P0 · MVP', tone: 'p0' } }, 'Multi-option scheduling poll', 'Creates a structured way for participants to express preferences.', 'Simple event creation flow and reliable invite delivery.'],
            [{ text: 'P0 · MVP', badge: { label: 'P0 · MVP', tone: 'p0' } }, 'Local-time display and time-zone comparison', 'Makes slot impact immediately understandable for every invitee.', 'Accurate participant time-zone data and DST handling.'],
            [{ text: 'P0 · MVP', badge: { label: 'P0 · MVP', tone: 'p0' } }, 'Preferences & private alternative suggestions', 'Captures real preference beyond free/busy and lowers social friction.', 'Privacy controls and intuitive preferred vs. possible voting.'],
            [{ text: 'P0 · MVP', badge: { label: 'P0 · MVP', tone: 'p0' } }, 'Deadline, aggregate results & organiser confirm', 'Completes the decision loop while keeping organiser accountability.', 'Test aggregate visibility to avoid majority bias.'],
            [{ text: 'P1 · Follow-on', badge: { label: 'P1 · Follow-on', tone: 'p1' } }, 'Inline meeting summary in Calendar event', 'Reduces effort to recall what happened in past meetings.', 'Reliable notes generation, source attribution and strict ACLs.'],
            [{ text: 'P1 · Follow-on', badge: { label: 'P1 · Follow-on', tone: 'p1' } }, 'Decision, action-item & follow-up highlights', 'Makes meeting outcomes scannable directly from Calendar.', 'Extraction accuracy evaluation and user correction flows.'],
            [{ text: 'P1 · Follow-on', badge: { label: 'P1 · Follow-on', tone: 'p1' } }, 'Chronological meeting history', 'Predictable timeline to revisit past meetings.', 'Reliable event-to-document linking and permissions.'],
            [{ text: 'P2 · Later', badge: { label: 'P2 · Later', tone: 'p2' } }, 'Natural-language historical meeting search', 'Helps retrieve context by topic rather than exact event title.', 'Search relevance, citations and retrieval-quality evaluation.'],
            [{ text: 'P2 · Later', badge: { label: 'P2 · Later', tone: 'p2' } }, 'Recurring-meeting fairness & rotation insights', 'Helps teams notice and reduce repeated after-hours burden.', 'Longitudinal consent, fairness definitions and nuance safeguards.'],
          ],
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              kicker: 'Included in MVP',
              title: 'End-to-end collaborative poll',
              bullets: [
                'Create event & add participants',
                'Gemini candidate slot shortlist',
                'Multi-option poll with deadline',
                'Local-time preferred/possible voting + private alternatives',
                'Organiser reviews results & confirms event',
              ],
            },
            {
              kicker: 'Explicitly cut from MVP',
              title: 'What NOT to build first',
              bullets: [
                'Auto-booking solely on highest vote count',
                'Public display of individual participant votes',
                'Complex fairness scoring or automated rotations',
                'Full project-management or document-authoring tools',
                'Natural-language historical search before ACLs are proven',
              ],
            },
          ],
        },
      ],
    },
    {
      number: '07',
      shortTab: 'Metrics',
      title: 'Measuring Success',
      kicker: '07 · Define success',
      blocks: [
        {
          type: 'callout',
          title: 'Proposed North Star Metric',
          body: 'Share of cross-time-zone meeting requests confirmed by the deadline while respecting participants’ stated working-hour preferences. (Proposed outcome metric—not a metric reported by Google; focuses on coordination quality rather than inflating raw meeting count.)',
          tone: 'green',
        },
        {
          type: 'heading',
          text: 'Collaborative scheduling metrics',
        },
        {
          type: 'table',
          caption: 'Primary and secondary KPIs for collaborative scheduling',
          headers: ['Metric', 'What it measures', 'Why it matters'],
          rows: [
            ['Poll-to-confirmation rate', '% of scheduling polls resulting in a confirmed Calendar event.', 'Measures whether the workflow helps groups reach a decision.'],
            ['Time to confirmation', 'Median elapsed time from poll creation to final confirmation.', 'Measures coordination speed and delay reduction.'],
            ['Poll completion rate', '% of invited participants responding before the deadline.', 'Indicates clarity and low friction of the voting UI.'],
            ['Coordination interactions', 'Follow-up messages or manual reschedules per confirmed meeting (where consented).', 'Tests whether polls replace back-and-forth messaging.'],
            ['Meeting acceptance & attendance', 'Invite acceptance and actual attendance.', 'Checks that confirmed slots turn into successful meetings.'],
            ['After-hours meeting burden', 'Early/late minutes per participant and distribution across the group.', 'Measures whether scheduling becomes fairer, not just faster.'],
          ],
        },
        {
          type: 'heading',
          text: 'Meeting continuity metrics (P1 Follow-on)',
        },
        {
          type: 'table',
          caption: 'Proposed metrics for contextual meeting history',
          headers: ['Metric', 'What it measures', 'Why it matters'],
          rows: [
            ['Time to retrieve meeting info', 'Time to locate a past decision or action item.', 'Directly measures retrieval friction saved.'],
            ['Retrieval success rate', '% of users finding the right context in a benchmark task.', 'Measures summary and history usefulness.'],
            ['Summary engagement & source opens', 'Opens of inline summaries alongside click-through to source Docs.', 'Verifies discoverability and deep verification behaviour.'],
            ['User-reported confidence', 'Confidence that summaries accurately reflect the meeting.', 'Measures user trust in AI-generated context.'],
          ],
        },
        {
          type: 'heading',
          text: 'Guardrail metrics',
        },
        {
          type: 'list',
          items: [
            { lead: 'Poll abandonment:', text: 'A faster flow fails if invitees drop off mid-poll.' },
            { lead: 'Cancellations & rescheduling:', text: 'Confirmed slots should not trigger higher downstream churn.' },
            { lead: 'Preference concentration:', text: 'Ensure the same individuals do not keep absorbing inconvenient slots.' },
            { lead: 'Notification fatigue & permission incidents:', text: 'Limit reminder noise; zero unauthorised summary exposure.' },
            { lead: 'Meeting load:', text: 'Do not optimise for creating more meetings without better outcomes.' },
          ],
        },
      ],
    },
    {
      number: '08',
      shortTab: 'Experiments',
      title: 'Experimentation and Validation',
      kicker: '08 · Learn before scaling',
      blocks: [
        {
          type: 'heading',
          text: 'Discovery before implementation',
        },
        {
          type: 'paragraph',
          text: 'Before committing engineering resources, conduct 5–8 exploratory interviews with frequent cross-time-zone organisers and participants to map real coordination workflows, how inconvenient slots are negotiated, and where people currently search for past meeting decisions.',
        },
        {
          type: 'heading',
          text: 'Experiment 1: Does a collaborative poll reduce scheduling friction?',
        },
        {
          type: 'table',
          caption: 'Proposed A/B experiment design',
          headers: ['Element', 'Experiment plan'],
          rows: [
            ['Target users', 'Organisers scheduling meetings with multiple participants across ≥ 2 time zones.'],
            ['Control', 'Existing Calendar scheduling workflow with current availability and time suggestions.'],
            ['Treatment', 'Collaborative poll with candidate shortlist, local-time display, preferences, private alternatives and deadline.'],
            ['Primary measures', 'Time to confirmation and poll-to-confirmation rate.'],
            ['Secondary & guardrails', 'Poll completion, follow-up effort, satisfaction, poll abandonment, cancellations and after-hours burden distribution.'],
            ['Decision rule', 'Ship if confirmation efficiency improves without worsening participant satisfaction or concentrating inconvenient hours.'],
          ],
        },
        {
          type: 'heading',
          text: 'Experiment 2: Blind-first vs. visible aggregate poll results',
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              kicker: 'Variant A · Blind-first',
              title: 'Submit before seeing results',
              body: 'Participants submit preferences independently; aggregate counts appear only after voting. Tests whether this protects honest preference reporting.',
            },
            {
              kicker: 'Variant B · Live aggregate',
              title: 'Visible aggregate counts',
              body: 'Participants see live aggregate counts while choosing. Tests whether social proof speeds convergence or causes majority conformity bias.',
            },
          ],
        },
        {
          type: 'heading',
          text: 'Experiment 3 & Phased Rollout',
        },
        {
          type: 'paragraph',
          text: 'For Solution B, run moderated usability retrieval tasks comparing current Notes links against inline decision summaries—including edge cases where notes are restricted by permissions. Roll out in 5 stages: Discovery → Prototype testing → Limited pilot → Iteration → Broad expansion.',
        },
      ],
    },
    {
      number: '09',
      shortTab: 'Risks',
      title: 'Risks, Trade-offs and Reflection',
      kicker: '09 · Make trade-offs explicit',
      blocks: [
        {
          type: 'heading',
          text: 'Product and user-experience risks',
        },
        {
          type: 'table',
          caption: 'Key risks and proposed mitigations',
          headers: ['Risk', 'Why it matters', 'Potential mitigation'],
          rows: [
            ['Majority bias in polls', 'Visible results may pressure participants to conform rather than report real constraints.', 'Test blind-first voting; keep individual responses private.'],
            ['False sense of fairness', 'A popular slot can still severely burden one participant.', 'Highlight local times and inconvenient-hour flags; avoid automated "fairness" claims.'],
            ['Social pressure', 'Juniors may hesitate to reject a manager’s proposed time.', 'Keep alternative time suggestions private to the organiser by default.'],
            ['Added friction for simple 1:1s', 'A multi-option poll is overkill for quick 1:1 syncs.', 'Offer polls selectively for multi-participant/cross-zone meetings; preserve quick scheduling.'],
            ['AI summary errors & permission leakage', 'Inaccurate summaries mislead teams; exposing restricted notes violates trust.', 'Label AI summaries, link source Docs, allow corrections, and enforce source ACLs strictly.'],
          ],
        },
        {
          type: 'heading',
          text: 'Key product trade-offs',
        },
        {
          type: 'list',
          items: [
            { lead: 'Speed vs. inclusion:', text: 'Auto-picking the top-voted slot is fast, but keeping confirmation with the organiser surfaces minority time-zone trade-offs.' },
            { lead: 'Transparency vs. independence:', text: 'Live vote tallies build context yet risk conformity bias—must be tested experimentally.' },
            { lead: 'Convenience vs. privacy:', text: 'Inline meeting summaries save search time but must never weaken underlying Google Drive permissions.' },
          ],
        },
        {
          type: 'callout',
          title: 'Reflection & final takeaway',
          body: 'Scheduling is not purely a calendar-availability problem; it is a human coordination problem shaped by preferences, power dynamics, and time zones. Better collaboration comes from making trade-offs visible before the meeting and preserving trusted context after it.',
          tone: 'blue',
        },
      ],
    },
  ],
  referencesNote:
    'Sources support factual statements about current Google Calendar capabilities and published research. Proposed workflows, prioritisation and metrics are independent product recommendations.',
  references: [
    {
      id: 'cal-1',
      title: 'Better time suggestions for meeting with your colleagues using Gemini in Google Calendar',
      source: 'Google Workspace Updates (26 Jan 2026)',
      url: 'https://workspaceupdates.googleblog.com/2026/01/improved-meeting-suggestions-gemini-calendar.html',
    },
    {
      id: 'cal-2',
      title: 'Let Gemini in Google Calendar find times to meet',
      source: 'Google Calendar Help',
      url: 'https://support.google.com/calendar/answer/16690875',
    },
    {
      id: 'cal-3',
      title: 'Plan and hold meetings from anywhere',
      source: 'Google Workspace Learning Center',
      url: 'https://support.google.com/a/users/answer/9283193',
    },
    {
      id: 'cal-4',
      title: 'Add or remove a video conference from your Calendar event (Gemini meeting notes)',
      source: 'Google Calendar Help',
      url: 'https://support.google.com/calendar/answer/9896550',
    },
    {
      id: 'cal-5',
      title: 'Challenging but Connective: Large-Scale Characteristics of Synchronous Collaboration Across Time Zones',
      source: 'Mok, L. et al., CHI 2023 (Microsoft Research)',
      url: 'https://www.microsoft.com/en-us/research/publication/challenging-but-connective-large-scale-characteristics-of-synchronous-collaboration-across-time-zones/',
    },
  ],
};
