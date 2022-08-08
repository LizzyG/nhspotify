import { registerPlugin } from '@capacitor/core';

import type { NHSpotifyPlugin } from './definitions';

const NHSpotify = registerPlugin<NHSpotifyPlugin>('NHSpotify', {
  web: () => import('./web').then(m => new m.NHSpotifyWeb()),
});

export * from './definitions';
export { NHSpotify };
