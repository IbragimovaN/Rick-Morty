import { Route, Routes } from "react-router-dom";
import { internalPaths } from "./internalPath";
import { AuthProvader } from "./context/AuthProvader";
import { PrivatRoute } from "./Components/PrivatRoute";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./Components/Common";

const CharactersPage = lazy(() => import("./Components/Pages/CharactersPage"));
const CharacterPage = lazy(() => import("./Components/Pages/CharacterPage"));
const EpisodesPage = lazy(() => import("./Components/Pages/EpisodesPage"));
const EpisodePage = lazy(() => import("./Components/Pages/EpisodePage"));
const LocationsPage = lazy(() => import("./Components/Pages/LocationsPage"));
const LocationPage = lazy(() => import("./Components/Pages/LocationPage"));
const HomePage = lazy(() => import("./Components/Pages/HomePage"));
const NotFoundPage = lazy(() => import("./Components/Pages/NotFoundPage"));
const LoginPage = lazy(() => import("./Components/Pages/LoginPage"));

function App() {
  return (
    <AuthProvader>
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </AuthProvader>
  );
}

export default App;
