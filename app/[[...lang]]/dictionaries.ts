import { TLocale } from '@/middleware';
import 'server-only';

const dictionaries = {
  'en': () => import('@/dictionaries/en.json').then((module) => module.default),
  // fi: () => import('@/dictionaries/fi.json').then((module) => module.default),
};

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

export type TDictionary = UnwrapPromise<ReturnType<typeof dictionaries['en']>>;

export const getDictionary = async (locale: TLocale) => dictionaries[locale]();

