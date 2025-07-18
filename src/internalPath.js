export const internalPaths = {
  home: "/",
  characters: "/characters",
  locations: "/locations",
  episodes: "/episodes",
  not: "*",
  character: (id) => `/characters/${id}`,
  episode: (id) => `/episodes/${id}`,
  location: (id) => `/locations/${id}`,
};
