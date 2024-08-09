import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest } from 'next/server';

export type TLocale = 'en';

const locales: TLocale[] = ['en'];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {

  const headers = request.headers;
  const languages = new Negotiator({ headers: {
    'accept-language': headers.get('accept-language') || undefined
  } }).languages();
  const defaultLocale: TLocale = 'en';

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  const locale = getLocale(request);
  if (pathnameHasLocale) return;

  if (locale === 'en') return;
  // Redirect if there is no locale
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl);
}


export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};