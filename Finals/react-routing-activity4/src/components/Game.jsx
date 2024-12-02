import { useLocation } from "react-router-dom";

export default function Game() {
  const location = useLocation()
  const game = location.state.game

  return (
    <div>
      {game ? (
        <>
          <h1>{game.name}</h1>
          <p>{game.description}</p>
          <img src={game.image} alt={game.name} />
          

        </>
      ) : (
        <p>Game not found.</p>
      )}
    </div>
  );
}