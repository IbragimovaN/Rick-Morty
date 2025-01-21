export const internalPaths = {
  home: "/",
  characters: "/characters",
  locations: "/locations",
  episodes: "/episodes",
  not: "*",
  login: "/login",
  character: (id) => `/characters/${id}`,
  episode: (id) => `/episodes/${id}`,
  location: (id) => `/locations/${id}`,
};
