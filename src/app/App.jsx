import { Route, Routes } from "react-router-dom";
import { internalPaths } from "../constants/internalPath";
import { AuthProvader } from "../context";
import { PrivatRoute, LoadingSpinner } from "../components";
import { lazy, Suspense } from "react";

const CharactersPage = lazy(() =>
  import("../pages/charactersPage/CharactersPage")
);
const CharacterPage = lazy(() =>
  import("../pages/characterPage/CharacterPage")
);
const EpisodesPage = lazy(() => import("../pages/episodesPage/EpisodesPage"));
const EpisodePage = lazy(() => import("../pages/episodePage/EpisodePage"));
const LocationsPage = lazy(() =>
  import("../pages/locationsPage/LocationsPage")
);
const LocationPage = lazy(() => import("../pages/locationPage/LocationPage"));
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const NotFoundPage = lazy(() => import("../pages/notFoundPage/NotFoundPage"));
const LoginPage = lazy(() => import("../pages/loginPage/LoginPage"));
export const App = () => {
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
};
