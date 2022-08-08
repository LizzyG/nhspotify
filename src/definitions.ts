export interface NHSpotifyPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
