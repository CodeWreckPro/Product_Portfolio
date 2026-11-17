import { calendarStudy } from './calendarStudy';
import { geminiStudy } from './geminiStudy';
import { mapsStudy } from './mapsStudy';
import { stravaStudy } from './stravaStudy';
import type { CaseStudy } from '../types/portfolio';

export const ALL_CASE_STUDIES: CaseStudy[] = [
  calendarStudy,
  mapsStudy,
  geminiStudy,
  stravaStudy,
];

export const IMPROVEMENT_STUDIES: CaseStudy[] = [calendarStudy, mapsStudy];
export const TEARDOWN_STUDIES: CaseStudy[] = [geminiStudy, stravaStudy];

export { calendarStudy, mapsStudy, geminiStudy, stravaStudy };
