import { DragDropProvider, DragDropSensors } from "@thisbeyond/solid-dnd";

import { Board } from "../components/Board";
import { GameProvider } from "../game/context";
import { Page } from "../components/Page";
import { createWords } from "../service/createWords";

export default function GamePage() {
  return (
    <Page>
      <GameProvider words={createWords()}>
        <DragDropProvider>
          <DragDropSensors>
            <Board />
          </DragDropSensors>
        </DragDropProvider>
      </GameProvider>
    </Page>
  );
}
