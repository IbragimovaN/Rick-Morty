import { Route, Routes } from "react-router-dom";
import { internalPaths } from "./internalPath";
import {
  CharacterPage,
  CharactersPage,
  EpisodesPage,
  HomePage,
  NotFoundPage,
  LocationsPage,
  LocationPage,
  EpisodePage,
} from "./Components/Pages";

function App() {
  return (
    <>
      <Routes>
        <Route path={internalPaths.home} element={<HomePage />}>
          <Route path={internalPaths.characters} element={<CharactersPage />} />
          <Route
            path={internalPaths.character(":id")}
            element={<CharacterPage />}
          />
          <Route path={internalPaths.locations} element={<LocationsPage />} />
          <Route
            path={internalPaths.location(":id")}
            element={<LocationPage />}
          />
          <Route path={internalPaths.episodes} element={<EpisodesPage />} />
          <Route
            path={internalPaths.episode(":id")}
            element={<EpisodePage />}
          />
          <Route path={internalPaths.not} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
