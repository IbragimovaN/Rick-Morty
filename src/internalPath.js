export const internalPaths = {
  home: "/",
  characters: "/characters",
  locations: "/locations",
  episodes: "/episodes",
  not: "*",
  character: (id) => `/characters/${id}`,
  episode: (id) => `/episode/${id}`,
  location: (id) => `/location/${id}`,
};
