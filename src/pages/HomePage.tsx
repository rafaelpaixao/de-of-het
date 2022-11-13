import { A } from "@solidjs/router";
import { Page } from "../components/Page";

export default function HomePage() {
  return (
    <Page>
      <p>Home</p>
      <A href="/game">Start Game!</A>
    </Page>
  );
}
