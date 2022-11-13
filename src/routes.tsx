import { Route, Routes } from "@solidjs/router";

import { lazy } from "solid-js";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const GamePage = lazy(() => import("./pages/GamePage"));

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/game" component={GamePage} />
    </Routes>
  );
}
