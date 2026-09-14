import { en } from './en';
import { hi } from './hi';
import { mr } from './mr';
import { gu } from './gu';
import type { Locale } from '../config';
import type { Dictionary } from './en';

export const dictionaries: Record<Locale, Dictionary> = { en, hi, mr, gu };
export type { Dictionary } from './en';
