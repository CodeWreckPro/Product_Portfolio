export type TrackType = 'improvement' | 'teardown';

export interface LinkRef {
  label: string;
  url: string;
}

export interface TableRowCell {
  text: string;
  badge?: {
    label: string;
    tone: 'neutral' | 'fact' | 'hypothesis' | 'proposal' | 'high' | 'medium' | 'low' | 'p0' | 'p1' | 'p2';
  };
  link?: LinkRef;
  bold?: boolean;
}

export type ContentBlock =
  | { type: 'lead'; text: string }
  | { type: 'paragraph'; text: string; link?: LinkRef; suffix?: string }
  | { type: 'heading'; text: string; badge?: { label: string; tone: 'high' | 'medium' | 'low' | 'p0' | 'p1' | 'p2' | 'proposal' | 'core' } }
  | { type: 'subheading'; text: string }
  | { type: 'note'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | {
      type: 'callout';
      title: string;
      body: string;
      tone?: 'blue' | 'green' | 'amber' | 'red' | 'neutral';
      code?: string;
    }
  | { type: 'list'; items: Array<{ lead?: string; text: string; link?: LinkRef }> }
  | { type: 'orderedList'; items: Array<{ lead?: string; text: string; note?: string }> }
  | {
      type: 'table';
      caption?: string;
      headers: string[];
      rows: Array<Array<string | TableRowCell>>;
    }
  | {
      type: 'flowSteps';
      title?: string;
      steps: Array<{ title: string; description: string }>;
    }
  | {
      type: 'feedbackLoop';
      nodes: string[];
    }
  | {
      type: 'formula';
      expression: string;
      caption?: string;
    }
  | {
      type: 'scorecard';
      disclaimer: string;
      items: Array<{ dimension: string; score: number; maxScore: number; rationale: string }>;
    }
  | {
      type: 'cards';
      columns: 2 | 3;
      items: Array<{ kicker?: string; title: string; body?: string; bullets?: string[] }>;
    };

export interface CaseSection {
  number: string; // '01'..'09'
  shortTab: string; // Concise 1-2 word tab label
  title: string;
  kicker: string;
  blocks: ContentBlock[];
}

export interface ExecutiveSummary {
  hook: string;
  northStar: string;
  mvpScope: string;
  keyTradeoff: string;
  evidenceNote: string;
}

export interface ReferenceItem {
  id: string;
  title: string;
  source: string;
  url: string;
  detail?: string;
}

export interface CaseStudy {
  id: string;
  track: TrackType;
  trackLabel: string;
  indexLabel: string;
  product: string;
  title: string;
  subtitle: string;
  focusLabel: string;
  scopeLabel: string;
  dateLabel: string;
  thesis: string;
  executiveSummary: ExecutiveSummary;
  sections: CaseSection[];
  references: ReferenceItem[];
  referencesNote: string;
}
