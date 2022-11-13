import "./Navbar.scss";

import { A } from "@solidjs/router";

export function Navbar() {
  return (
    <div class="navbar">
      <A href="/" end>
        Home
      </A>
      <A href="/About">About</A>
    </div>
  );
}
