import "./App.scss";

import { AppRoutes } from "./routes";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <div class="app">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
