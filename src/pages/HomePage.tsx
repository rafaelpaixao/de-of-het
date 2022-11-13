import { Button } from "../components/Button";
import { Page } from "../components/Page";

export default function HomePage() {
  return (
    <Page>
      <p>
        Swipe the cards to the left if you think the word's article is De, or to
        the right if you think it is Het.
      </p>
      <p>Good luck!</p>
      <Button href="/game" content="Start Game!"></Button>
    </Page>
  );
}
