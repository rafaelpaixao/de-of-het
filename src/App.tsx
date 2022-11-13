import "./App.scss";

import { AppRoutes } from "./routes";
import { Navbar } from "./components/Navbar";
import { Router } from "@solidjs/router";

export function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
