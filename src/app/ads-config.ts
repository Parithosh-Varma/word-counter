import { environment } from '../environments/environment';

export const AD_CLIENT_ID: string =
  (globalThis as { __AD_CLIENT__?: string }).__AD_CLIENT__ ?? environment.adClient ?? 'ca-pub-9710402411932807';