import { WebPlugin } from '@capacitor/core';

import type { NHSpotifyPlugin } from './definitions';

export class NHSpotifyWeb extends WebPlugin implements NHSpotifyPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
