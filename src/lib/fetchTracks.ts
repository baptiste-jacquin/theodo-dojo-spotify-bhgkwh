import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQB0YDplxAdmJxjIH50Z1415587Ry_cLb50ILN58x_cs_vSAKy6Uo9I2IV9aliT6HkjLpKDI71QhiwnYsdU9efIWFEmMYwELOuQOVZGLcdDDZfSoBOp3cI5U0mlq3n-OFpK3kMytnj8NfrxIMAAH24tVilady1zorJ5jtwnW7m1qU0j4iaXj61D8A8ai3RaJza45Ohb07A';

export const fetchTracks = async (): Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
