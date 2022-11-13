import { Board } from "../components/Board";
import { GameProvider } from "../game/context";
import { Page } from "../components/Page";
import { createWords } from "../service/createWords";

export default function GamePage() {
  return (
    <Page>
      <GameProvider words={createWords()}>
        <Board />
      </GameProvider>
    </Page>
  );
}
