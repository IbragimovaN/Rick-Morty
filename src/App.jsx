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
  LoginPage,
} from "./Components/Pages";
import { AuthProvader } from "./context/AuthProvader";
import { PrivatRoute } from "./Components/PrivatRoute";

function App() {
  return (
    <AuthProvader>
      <Routes>
        <Route path={internalPaths.home} element={<HomePage />}>
          <Route
            path={internalPaths.characters}
            element={
              <PrivatRoute>
                <CharactersPage />{" "}
              </PrivatRoute>
            }
          />
          <Route
            path={internalPaths.character(":id")}
            element={
              <PrivatRoute>
                <CharacterPage />
              </PrivatRoute>
            }
          />
          <Route
            path={internalPaths.locations}
            element={
              <PrivatRoute>
                <LocationsPage />
              </PrivatRoute>
            }
          />
          <Route
            path={internalPaths.location(":id")}
            element={
              <PrivatRoute>
                <LocationPage />
              </PrivatRoute>
            }
          />
          <Route
            path={internalPaths.episodes}
            element={
              <PrivatRoute>
                <EpisodesPage />
              </PrivatRoute>
            }
          />
          <Route
            path={internalPaths.episode(":id")}
            element={
              <PrivatRoute>
                <EpisodePage />
              </PrivatRoute>
            }
          />
          <Route path={internalPaths.not} element={<NotFoundPage />} />
          <Route path={internalPaths.login} element={<LoginPage />} />
        </Route>
      </Routes>
    </AuthProvader>
  );
}

export default App;
