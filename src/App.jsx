import Scoreboard from    "./components/scoreboard"

function App() {
  return (
    <div>
      <h1>Jogo da Memória</h1>

      <Scoreboard
        turns={turns}
        pairsFound={pairsFound}
        totalPairs={cards.length / 2}
      />

      {/*  */}
    </div>
  );
}
